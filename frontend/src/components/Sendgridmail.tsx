import emailjs from 'emailjs-com';


export const enviarCorreo = () => {
  const templateParams = {
    to_email: 'andyg.oyarzo@gmail.com',
    from_name: 'Andy',
    message: 'Esto es un pedido de Pixie',
  };

  console.log("enviando correo")

  emailjs.send(
    'service_g6r30td', // Reemplaza con tu Service ID
    'template_jstoukw', // Reemplaza con tu Template ID
    templateParams,
    '-MK3qMdy-8H_nzNKl' // Reemplaza con tu User ID
  )
    .then((response) => console.log('Correo enviado con éxito:', response))
    .catch((error) => console.error('Error al enviar el correo:', error));
};
