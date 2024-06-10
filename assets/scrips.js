 const imagen = document.getElementById('Imagen');

 imagen.addEventListener('click', function() {
     if (this.classList.contains('borde-rojo')) {
         this.classList.remove('borde-rojo');
     } else {
         this.classList.add('borde-rojo');
     }
 });