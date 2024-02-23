const imagenes = document.querySelectorAll('.propiedad__imagen');

console.log("imagenes =",imagenes);

window.addEventListener('scroll', () => {
    console.log("brandon")
    const scroll = this.scrollY / -20;

    imagenes.forEach( (imagen) => {
        imagen.style.style = {
            with: '1000px'
        }
    })
});
