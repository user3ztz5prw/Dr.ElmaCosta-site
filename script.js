// CONFIGURAÇÃO: troque pelo número do WhatsApp da Dra. Elma.
 // Use código do país + DDD + número, somente dígitos. Exemplo fictício: 5511999999999
const WHATSAPP_NUMBER = "55DDNUMEROAQUI";

const cleanPhone = WHATSAPP_NUMBER.replace(/\D/g, "");
const validPhone = cleanPhone.length >= 12 && !cleanPhone.includes("DD") && !cleanPhone.includes("NUMEROAQUI");
const whatsappUrl = (message) => `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;

function openWhatsApp(message) {
  if (!validPhone) {
    const formMessage = document.getElementById("formMessage");
    if (formMessage) {
      formMessage.textContent = "Antes de usar o WhatsApp, configure o número da Dra. Elma no arquivo script.js. Veja o arquivo LEIA-ME.";
    } else {
      alert("Configure primeiro o número do WhatsApp no arquivo script.js. Veja o arquivo LEIA-ME.");
    }
    return;
  }
  window.open(whatsappUrl(message), "_blank", "noopener,noreferrer");
}

document.getElementById("currentYear").textContent = new Date().getFullYear();

const dateInput = document.getElementById("appointmentDate");
if (dateInput) {
  const today = new Date();
  const localToday = new Date(today.getTime() - today.getTimezoneOffset() * 60000).toISOString().split("T")[0];
  dateInput.min = localToday;
}

const bookingForm = document.getElementById("bookingForm");
if (bookingForm) {
  bookingForm.addEventListener("submit", (event) => {
    event.preventDefault();
    if (!bookingForm.reportValidity()) return;
    const name = document.getElementById("clientName").value.trim();
    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value;
    const type = document.getElementById("appointmentType").value;
    const formattedDate = new Date(`${date}T12:00:00`).toLocaleDateString("pt-BR");
    const message = `Olá, Dra. Elma! Meu nome é ${name}. Gostaria de solicitar ${type.toLowerCase()} para ${formattedDate}, às ${time}. Sei que o horário depende de confirmação.`;
    openWhatsApp(message);
  });
}

document.querySelectorAll("[data-whatsapp-message]").forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp(link.getAttribute("data-whatsapp-message"));
  });
});

const contactLink = document.getElementById("contactWhatsApp");
if (contactLink) {
  contactLink.addEventListener("click", (event) => {
    event.preventDefault();
    openWhatsApp("Olá, Dra. Elma! Gostaria de receber informações sobre seus atendimentos e a mentoria anual.");
  });
}

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");
if (menuToggle && mainNav) {
  menuToggle.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("open");
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    menuToggle.textContent = isOpen ? "×" : "☰";
  });
  mainNav.querySelectorAll("a").forEach((link) => link.addEventListener("click", () => {
    mainNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Abrir menu");
    menuToggle.textContent = "☰";
  }));
}
