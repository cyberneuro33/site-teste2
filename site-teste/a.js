document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); // Previne o envio do formulário para testar a funcionalidade
        
        // Captura os dados do formulário
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        
        // Exibe uma mensagem de agradecimento
        alert(`Obrigado, ${name}! Entraremos em contato pelo email: ${email}`);
        
        // Limpa o formulário
        form.reset();
    });
});
