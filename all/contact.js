function submitForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    
    const responseMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}`;
    document.getElementById('responseMessage').textContent = responseMessage;
  }
  