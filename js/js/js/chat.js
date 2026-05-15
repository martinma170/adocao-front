const form = document.getElementById("chat-form");
const input = document.getElementById("chat-input");
const messages = document.getElementById("chat-messages");

form.addEventListener("submit", function(e){
    e.preventDefault();

    const text = input.value;

    if(text.trim() !== ""){

        const div = document.createElement("div");
        div.classList.add("mensagem", "usuario");
        div.textContent = text;

        messages.appendChild(div);

        input.value = "";
        messages.scrollTop = messages.scrollHeight;
    }
});
