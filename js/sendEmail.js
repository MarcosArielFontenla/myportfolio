let nombre = document.getElementById('nombre');
let telefono = document.getElementById('telefono');
let email = document.getElementById('email');
let mensaje = document.getElementById('mensaje');

const form = document.getElementById('contactForm');

form.addEventListener('submit', (e) => {
    e.preventDefault();   
    sendEmail(nombre.value, telefono.value, email.value, mensaje.value);
    form.reset();
   });

function sendEmail(nombre, telefono, email, mensaje) {
  Email.send({
      Host: "smtp.gmail.com",
      Username: 'carysmatico@gmail.com',
      Password: 'ayaqayjojebeohbb', 
      To: "carysmatico@gmail.com",
      From: 'carysmatico@gmail.com', 
      Subject: `${nombre} ${telefono} envió un mensaje desde tu portfolio`,
      Body: `<p>Nombre: <b>${nombre}</b></p>
              <p>Telefono: <b>${telefono}</b></p>
              <p>Email: <b>${email}</b></p>
              <p>Mensaje: <b>${mensaje}</b></p>
              `
    }).then(
        swal('¡Mensaje enviado!', 'Tu mensaje fué enviado con exito!')
    )
    .catch(err => console.log('err: ', err))
}