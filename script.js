const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const backToTop = document.getElementById("back-to-top");
const languageSwitcher = document.getElementById("languageSwitcher");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

window.addEventListener("scroll", () => {
  backToTop.style.display = window.scrollY > 300 ? "block" : "none";
});

backToTop.addEventListener("click", () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
});

const translations = {
  pt: {
    hero_title: "Descubra Foz do Iguaçu com quem conhece a região",
    hero_subtitle: "Agência de turismo familiar e local",
    hero_btn: "Fale Conosco",
    about_title: "Quem Somos",
    about_text: "Somos uma agência de turismo familiar de Foz do Iguaçu.",
    gallery_title: "Galeria de Foz do Iguaçu",
    map_title: "Onde Estamos",
    contact_title: "Contato",
    contact_btn: "Enviar"
  },
  es: {
    hero_title: "Descubra Foz do Iguaçu con quien conoce la región",
    hero_subtitle: "Agencia de turismo familiar y local",
    hero_btn: "Contáctanos",
    about_title: "Quiénes Somos",
    about_text: "Somos una agencia de turismo familiar de Foz do Iguaçu.",
    gallery_title: "Galería de Foz do Iguaçu",
    map_title: "Dónde Estamos",
    contact_title: "Contacto",
    contact_btn: "Enviar"
  },
  en: {
    hero_title: "Discover Foz do Iguaçu with local experts",
    hero_subtitle: "Family-owned local travel agency",
    hero_btn: "Contact Us",
    about_title: "About Us",
    about_text: "We are a family-owned travel agency from Foz do Iguaçu.",
    gallery_title: "Foz do Iguaçu Gallery",
    map_title: "Our Location",
    contact_title: "Contact",
    contact_btn: "Send"
  }
};

languageSwitcher.addEventListener("change", () => {
  document.querySelectorAll("[data-i18n]").forEach(el => {
    el.textContent = translations[languageSwitcher.value][el.dataset.i18n];
  });
});
