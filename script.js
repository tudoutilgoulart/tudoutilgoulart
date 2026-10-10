
/* =====================================
   TUDO UTIL GOULART
   Funcionalidades do site
===================================== */

// ANO AUTOMÁTICO NO RODAPÉ
const yearElement = document.getElementById("year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}


// MENU PARA CELULAR
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

if (menuToggle && nav) {
  menuToggle.addEventListener("click", function () {
    const menuAberto = nav.classList.toggle("open");

    menuToggle.textContent = menuAberto ? "✕" : "☰";

    menuToggle.setAttribute(
      "aria-label",
      menuAberto ? "Fechar menu" : "Abrir menu"
    );
  });

  // FECHAR MENU AO CLICAR EM UM LINK
  nav.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
      nav.classList.remove("open");
      menuToggle.textContent = "☰";
      menuToggle.setAttribute("aria-label", "Abrir menu");
    });
  });
}


// CONFIGURAÇÃO DO WHATSAPP
// TROQUE PELO SEU NÚMERO COM DDD E CÓDIGO DO PAÍS.
// Exemplo do formato: 5511999999999
// Não use espaços, parênteses, traços ou o sinal de +.

```javascript
const WHATSAPP_NUMERO = "5551984641194";

const WHATSAPP_TEXTO =
  "Olá! Vim pelo site da TUDO UTIL GOULART e gostaria de saber mais sobre os produtos e serviços.";

const WHATSAPP_LINK =
  "https://wa.me/5551984641194" +
  WHATSAPP_NUMERO +
  "?text=olá gostaria de um orçamento tudo útil goulart" +
  encodeURIComponent(WHATSAPP_TEXTO);
```


// ANIMAÇÃO SUAVE AO ENTRAR NAS SEÇÕES
const elementosAnimados = document.querySelectorAll(
  ".category-card, .benefits > div, .about-stamp"
);

if ("IntersectionObserver" in window) {
  const observador = new IntersectionObserver(
    function (entradas, observer) {
      entradas.forEach(function (entrada) {
        if (entrada.isIntersecting) {
          entrada.target.classList.add("visible");
          observer.unobserve(entrada.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elementosAnimados.forEach(function (elemento) {
    elemento.classList.add("reveal");
    observador.observe(elemento);
  });
}