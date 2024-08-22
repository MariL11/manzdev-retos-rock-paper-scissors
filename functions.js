let counter1 = 0;
let counter2 = 0;
let intervalId;

window.addEventListener('load', startGame, false);

function startGame() {
    let icons = document.getElementById("icons");
    let restartButton = document.getElementById("restart");

    // Verificar si el SVG se ha cargado correctamente
    if (icons) {

        if (intervalId) {
            clearInterval(intervalId);
        }

        intervalId = setInterval(function() {
            let iconsDoc = icons.contentDocument;

            if (iconsDoc) {
                clearInterval(intervalId);  // Detener el intervalo una vez que se carga el SVG

                let scissors = iconsDoc.getElementById("✂️");
                let moai = iconsDoc.getElementById("🗿");
                let page = iconsDoc.getElementById("📄");

                if (scissors && moai && page) { // Verificar que todos los elementos estén presentes
                    

                    scissors.addEventListener("click", function() {
                        deleteStyle(scissors, moai, page);
                        scissors.style.stroke = "darkblue";       
                        randomFigure(scissors, moai, page);
                    });

                    moai.addEventListener("click", function() {
                        deleteStyle(scissors, moai, page);
                        moai.style.stroke = "darkblue";       
                        randomFigure(scissors, moai, page);
                    });

                    page.addEventListener("click", function() {
                        deleteStyle(scissors, moai, page);
                        page.style.stroke = "darkblue";       
                        randomFigure(scissors, moai, page);
                    });

                    if(restartButton){
                        restartButton.addEventListener("click", function() {
                            restartGame();
                            deleteStyle(scissors, moai, page);
                        });
                    }

                }
                
                
            }
        }, 100); 
    } else {
        console.error("SVG object not found.");
    }
}

/*Seleccionar figura aleatoria en el turno de la CPU*/ 
function randomFigure(scissors, moai, page) {
    const figures = ["✂️", "🗿", "📄"];


    let random = Math.floor(Math.random() * 3);
    let selectedFigureCPU = figures[random];

    console.log("CPU selecciona: " + selectedFigureCPU);

    // Resaltar la elección de la CPU
    if (selectedFigureCPU === "✂️") {
        scissors.style.stroke = "red";
    } else if (selectedFigureCPU === "🗿") {
        moai.style.stroke = "red";
    } else {
        page.style.stroke = "red";
    }

    // Verifica si la CPU ganó
    if ((selectedFigureCPU === "🗿" && scissors.style.stroke === "darkblue") || 
        (selectedFigureCPU === "📄" && moai.style.stroke === "darkblue") ||
        (selectedFigureCPU === "✂️" && page.style.stroke === "darkblue")) {
        document.getElementById("pointsCPU").textContent = ++counter2;
        document.getElementById("result").textContent = "CPU has won";

    // Verifica si el jugador ganó
    }else if ((selectedFigureCPU === "📄" && scissors.style.stroke === "darkblue") || 
        (selectedFigureCPU === "✂️" && moai.style.stroke === "darkblue") ||
        (selectedFigureCPU === "🗿" && page.style.stroke === "darkblue")) {
        document.getElementById("pointsPlayer").textContent = ++counter1;
        document.getElementById("result").textContent = "Player has won";

    }else{
        document.getElementById("result").textContent = "Draw";
    }
}

/*Quitar el resaltado de las figuras*/ 
function deleteStyle (scissors, moai, page){
    scissors.style.removeProperty('stroke');
    moai.style.removeProperty('stroke');
    page.style.removeProperty('stroke');
}

/*Reiniciar juego*/
function restartGame(){

    counter1 = 0;
    counter2 = 0;

    document.getElementById("pointsPlayer").textContent = counter1;
    document.getElementById("pointsCPU").textContent = counter2;
    document.getElementById("result").textContent = "Select a figure";


}

