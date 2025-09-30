document.addEventListener("DOMContentLoaded", () => {
  const authScreen = document.getElementById("authScreen");
  const chatApp = document.getElementById("chatApp");
  const authForm = document.getElementById("authForm");
  const logoutBtn = document.getElementById("logoutBtn");
  const sendBtn = document.getElementById("sendBtn");
  const userInput = document.getElementById("userInput");
  const messages = document.getElementById("messages");
  const themeToggle = document.getElementById("themeToggle");

  authForm.addEventListener("submit", (e) => {
    e.preventDefault();
    authScreen.classList.add("hidden");
    chatApp.classList.remove("hidden");
  });

  document.getElementById("signupBtn").addEventListener("click", () => {
    authScreen.classList.add("hidden");
    chatApp.classList.remove("hidden");
  });

  logoutBtn.addEventListener("click", () => {
    chatApp.classList.add("hidden");
    authScreen.classList.remove("hidden");
  });

  function addMessage(text, sender) {
    const div = document.createElement("div");
    div.classList.add("message", sender === "user" ? "user-message" : "bot-message");
    div.textContent = text;
    messages.appendChild(div);
    messages.scrollTop = messages.scrollHeight;
  }

  sendBtn.addEventListener("click", () => {
    const text = userInput.value.trim();
    if (text) {
      addMessage(text, "user");
      userInput.value = "";
      setTimeout(() => {
        addMessage("📘 EduBot: This is a demo academic reply.", "bot");
      }, 600);
    }
  });

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
  });
});
