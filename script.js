// ----------------------
// Anno dinamico footer
// ----------------------
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// ----------------------
// Menu mobile
// ----------------------
const navToggle = document.querySelector(".nav-toggle");
const navLinks = document.querySelector(".nav-links");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("open");
  });

  navLinks.addEventListener("click", (e) => {
    if (e.target.tagName === "A") {
      navLinks.classList.remove("open");
    }
  });
}

// ----------------------
// Scroll morbido link interni
// ----------------------
document.querySelectorAll('a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href").substring(1);
    const targetEl = document.getElementById(targetId);
    if (targetEl) {
      e.preventDefault();
      targetEl.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// ----------------------
// Traduzioni (i18n)
// ----------------------

const translations = {
  it: {
    "brand.name": "Gaia Pallotta",
    "nav.about": "Chi sono",
    "nav.services": "Servizi",
    "nav.experience": "Esperienza",
    "nav.education": "Formazione",
    "nav.contact": "Contatti",
    "controls.languageLabel": "Lingua",
    "hero.title": "Interprete di conferenza e traduttrice",
    "hero.subtitle":
      "Interpreting and Translation · Intercultural Communication · International Relations",
    "hero.location": "Roma · Italia",
    "hero.cta": "Contattami",
    "about.title": "Chi sono",
    "services.title": "Servizi",
    "contact.title": "Contatti",
    "contact.formTitle": "Scrivimi un messaggio",
    "contact.nameLabel": "Nome",
    "contact.emailLabel": "Email",
    "contact.messageLabel": "Messaggio",
    "contact.submit": "Invia",
    "contact.errorRequired":
      "Compila tutti i campi per inviare il messaggio.",
    "contact.success":
      "Messaggio inviato. Ti risponderò il prima possibile.",
    "footer.owner": "Gaia Pallotta – Tutti i diritti riservati.",
    "footer.backToTop": "Torna su",
  },
  en: {
    "brand.name": "Gaia Pallotta",
    "nav.about": "About",
    "nav.services": "Services",
    "nav.experience": "Experience",
    "nav.education": "Education",
    "nav.contact": "Contact",
    "controls.languageLabel": "Language",
    "hero.title": "Conference interpreter and translator",
    "hero.subtitle":
      "Interpreting and Translation · Intercultural Communication · International Relations",
    "hero.location": "Rome · Italy",
    "hero.cta": "Contact me",
    "about.title": "About",
    "services.title": "Services",
    "contact.title": "Contact",
    "contact.formTitle": "Send me a message",
    "contact.nameLabel": "Name",
    "contact.emailLabel": "Email",
    "contact.messageLabel": "Message",
    "contact.submit": "Send",
    "contact.errorRequired": "Please fill in all fields to send the message.",
    "contact.success":
      "Message sent. I will get back to you as soon as possible.",
    "footer.owner": "Gaia Pallotta – All rights reserved.",
    "footer.backToTop": "Back to top",
  },
  fr: {
    "brand.name": "Gaia Pallotta",
    "nav.about": "À propos",
    "nav.services": "Services",
    "nav.experience": "Expérience",
    "nav.education": "Formation",
    "nav.contact": "Contact",
    "controls.languageLabel": "Langue",
    "hero.title": "Interprète de conférence et traductrice",
    "hero.subtitle":
      "Interprétation et traduction · Communication interculturelle · Relations internationales",
    "hero.location": "Rome · Italie",
    "hero.cta": "Contactez-moi",
    "about.title": "À propos",
    "services.title": "Services",
    "contact.title": "Contact",
    "contact.formTitle": "Écrivez-moi un message",
    "contact.nameLabel": "Nom",
    "contact.emailLabel": "E-mail",
    "contact.messageLabel": "Message",
    "contact.submit": "Envoyer",
    "contact.errorRequired":
      "Veuillez remplir tous les champs pour envoyer le message.",
    "contact.success":
      "Message envoyé. Je vous répondrai dès que possible.",
    "footer.owner": "Gaia Pallotta – Tous droits réservés.",
    "footer.backToTop": "Revenir en haut",
  },
  es: {
    "brand.name": "Gaia Pallotta",
    "nav.about": "Sobre mí",
    "nav.services": "Servicios",
    "nav.experience": "Experiencia",
    "nav.education": "Formación",
    "nav.contact": "Contacto",
    "controls.languageLabel": "Idioma",
    "hero.title": "Intérprete de conferencias y traductora",
    "hero.subtitle":
      "Interpretación y traducción · Comunicación intercultural · Relaciones internacionales",
    "hero.location": "Roma · Italia",
    "hero.cta": "Contáctame",
    "about.title": "Sobre mí",
    "services.title": "Servicios",
    "contact.title": "Contacto",
    "contact.formTitle": "Envíame un mensaje",
    "contact.nameLabel": "Nombre",
    "contact.emailLabel": "Correo electrónico",
    "contact.messageLabel": "Mensaje",
    "contact.submit": "Enviar",
    "contact.errorRequired":
      "Rellena todos los campos para enviar el mensaje.",
    "contact.success":
      "Mensaje enviado. Te responderé lo antes posible.",
    "footer.owner": "Gaia Pallotta – Todos los derechos reservados.",
    "footer.backToTop": "Volver arriba",
  },
};

let currentLocale = "it";
let currentTranslations = translations[currentLocale];

function applyTranslations(locale) {
  const dict = translations[locale];
  if (!dict) return;

  currentLocale = locale;
  currentTranslations = dict;

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const text = dict[key];
    if (typeof text === "string") {
      el.textContent = text;
    }
  });
}

// Selettore lingua
const langSelect = document.getElementById("language-select");

if (langSelect) {
  const storedLocale = localStorage.getItem("portfolioLocale");
  const initialLocale =
    storedLocale && translations[storedLocale] ? storedLocale : "it";

  langSelect.value = initialLocale;
  applyTranslations(initialLocale);

  langSelect.addEventListener("change", () => {
    const newLocale = langSelect.value;
    applyTranslations(newLocale);
    localStorage.setItem("portfolioLocale", newLocale);
  });
} else {
  applyTranslations("it");
}

// ----------------------
// Tema chiaro / notturno
// ----------------------

const themeToggle = document.getElementById("theme-toggle");

function setTheme(isLight) {
  if (isLight) {
    document.body.classList.add("light-mode");
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", "true");
      themeToggle.setAttribute("aria-label", "Disattiva modalità notturna");
    }
    localStorage.setItem("portfolioTheme", "light");
  } else {
    document.body.classList.remove("light-mode");
    if (themeToggle) {
      themeToggle.setAttribute("aria-pressed", "false");
      themeToggle.setAttribute("aria-label", "Attiva modalità notturna");
    }
    localStorage.setItem("portfolioTheme", "dark");
  }
}

(function initTheme() {
  const storedTheme = localStorage.getItem("portfolioTheme");
  if (storedTheme === "light") {
    setTheme(true);
  } else if (storedTheme === "dark") {
    setTheme(false);
  } else {
    const prefersLight =
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: light)").matches;
    setTheme(prefersLight);
  }
})();

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLightNow = !document.body.classList.contains("light-mode");
    setTheme(isLightNow);
  });
}

// ----------------------
// Gestione form (solo front-end)
// ----------------------
// In script.js, sostituisci la gestione del form con:
const form = document.getElementById("contact-form");
const statusEl = document.getElementById("form-status");

if (form && statusEl) {
  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    
    const formData = new FormData(form);
    
    // Aggiungi lingua corrente al campo hidden
    const langField = document.getElementById("form-language");
    if (langField) {
      langField.value = currentLocale;
    }
    
    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          'Accept': 'application/json'
        }
      });
      
      if (response.ok) {
        statusEl.textContent = currentTranslations["contact.success"] || 
          "Messaggio inviato. Ti risponderò il prima possibile.";
        statusEl.className = "form-status success";
        form.reset();
      } else {
        statusEl.textContent = currentTranslations["contact.errorRequired"] || 
          "Si è verificato un errore. Riprova.";
        statusEl.className = "form-status error";
      }
    } catch (error) {
      statusEl.textContent = "Errore di connessione. Riprova più tardi.";
      statusEl.className = "form-status error";
    }
  });
}

