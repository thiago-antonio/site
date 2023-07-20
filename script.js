
  // Função para alterar o texto do botão ao clicar
  function changeButtonText() {
    var button = document.getElementById('submitButton');
    button.innerHTML = 'Enviado!';
    button.disabled = true;
  }

  // Função para exibir mensagem de agradecimento após o envio do formulário
  function showThankYouMessage() {
    var form = document.getElementById('contactForm');
    var thankYouMessage = document.createElement('p');
    thankYouMessage.innerHTML = 'Obrigado por entrar em contato!';
    form.appendChild(thankYouMessage);
  }

  // Event listener para o envio do formulário
  document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    changeButtonText();
    showThankYouMessage();
  });

