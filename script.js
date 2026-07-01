// ================= SCROLL SUAVE =================
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();

    const target = document.querySelector(this.getAttribute("href"));

    if (target) {
      target.scrollIntoView({
        behavior: "smooth"
      });
    }
  });
});


// ================= FORMULÁRIO -> WHATSAPP =================
const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const nome = form.querySelector("input[type='text']").value;
  const email = form.querySelector("input[type='email']").value;
  const tel = form.querySelector("input[type='tel']").value;
  const msg = form.querySelector("textarea").value;

  const texto = `Olá! Tenho interesse em imóveis.%0A
Nome: ${nome}%0A
Email: ${email}%0A
Telefone: ${tel}%0A
Mensagem: ${msg}`;

  const numero = "5500000000000"; // TROQUE PELO SEU NÚMERO

  window.open(`https://wa.me/${numero}?text=${texto}`, "_blank");
});


// ================= BOTÃO WHATSAPP (GARANTE FUNCIONAMENTO) =================
const whatsappBtn = document.querySelector(".btn-whatsapp");

const numero = "5500000000000";

const mensagemPadrao = encodeURIComponent(
  "Olá! Vim pelo site e gostaria de informações sobre imóveis."
);

whatsappBtn.href = `https://wa.me/${numero}?text=${mensagemPadrao}`;