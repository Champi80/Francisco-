function mostrar(tipo) {

    const contenido = document.getElementById("contenido");
    const modal = document.getElementById("modal");


    if (tipo === "besito") {

        contenido.innerHTML = `
            <h2>Besitop pa que no chille </h2>

            <p>
                Muackkk te amooop :)
            </p>

            <img src="Beso.gif" class="media">
        `;
    }


    else if (tipo === "amor") {

        contenido.innerHTML = `
            <h2>Asi cuando me pregunta cuanto la amoop la amoo asiiip</h2>

            <p>
                Te amo muchísimo ❤️<br>
                Se acuerda de la cancion de Hasta Donde Te Quiero pues yo la amoop hasta donde sus ojos no ven
            </p>

            <img src="image.png" class="media">
        `;
    }


    else if (tipo === "razones") {

        contenido.innerHTML = `
            <h2> Por que no se debe enojar </h2>

            <ul>
                <li>Aunque enojada se ve hermosa la quiero ver feliz</li>
                <li>Que tal y se enferma o algop</li>
                <li>Si se enoja chillo</li>
                <li>Por que la amooop</li>
            
            </ul>
        `;
    }


    else if (tipo === "carta") {

        contenido.innerHTML = `
            <h2>💌 Carta para ti</h2>

            <p>
               Te amoop muchisimo mi amor gracias por estar en mi vida 
               cada vez que le doy un besito o un abrazo mi corazon hace tun tun tun jsjs  
               y ya nose que escribir jsjs
            </p>
        `;
    }


    else if (tipo === "fotos") {

        contenido.innerHTML = `
            <h2>📸 Nuestras Fotos</h2>

            <div class="galeria">

                <img src="1.jpg">
                <img src="2.jpg">
                <img src="3.jpg">
                <img src="4.jpg">

            </div>
        `;
    }





    modal.style.display = "flex";
}


function cerrarModal() {

    document.getElementById("modal").style.display = "none";
}


window.onclick = function(event) {

    const modal = document.getElementById("modal");

    if (event.target === modal) {

        cerrarModal();

    }
};