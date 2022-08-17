const btn = document.getElementById('button');

document.getElementById('form')
.addEventListener('submit', function(event) {
   event.preventDefault();

   btn.value = 'Enviando...';

   const serviceID = 'default_service';
   const templateID = 'template_7kxshs7';

   emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btn.value = 'Enviar Mensaje';
      Swal.fire({
        position: 'center',
        icon: 'success',
        color: "rgb(166, 77, 124)",
        title: 'Mensaje enviado Correctamente!',
        footer: "Pronto nos contactaremos con usted",
        showConfirmButton: false,
        timer: 3000
      })
    }, (err) => {
      btn.value = 'Enviar Mensaje';
      alert(JSON.stringify(err));
    });
});
