

window.addEventListener('load', iniciar, false);

function iniciar() {
    let icons = document.getElementById("icons");

    // Verifica si el SVG se ha cargado correctamente
    if (icons) {
        let intervalId = setInterval(function() {
            let iconsDoc = icons.contentDocument;

            if (iconsDoc) {
                clearInterval(intervalId);  // Detener el intervalo una vez que se carga el SVG


                let scissors = iconsDoc.getElementById("✂️");
                let moai = iconsDoc.getElementById("🗿");
                let page = iconsDoc.getElementById("📄");


                if (scissors) {
                    scissors.addEventListener("click", function() {
                        /*scissors.style.stroke="green";       
                        scissors.style.strokeWidth ="1px";*/
     
                        
                        scissors.classList.add("borde");
                    });
                }

                
            }
        }, 100); 
    } else {
        console.error("No se encontró el objeto SVG.");
    }
}