
const chatInput=document.querySelector(".chat-input textarea");
const sendChatBtn=document.querySelector(".chat-input i");
const chatbox=document.querySelector(".chatbox");


let userMessage;


const createChatLi =(message, className)=>{
    // create a chat <li> element with passed message and claasName

    const chatLi= document.createElement("li");
    chatLi.classList.add("chat",className);
    let chatContent=className=="outgoing" ? `<p>${message}</p>` :  `   <i class="fa-solid fa-robot"></i><p>${message}</p>`;
    chatLi.innerHTML=chatContent;
    return chatLi;

}

const handleChat=()=>{
userMessage=chatInput.value.trim();
if (! userMessage) return;
// Append the user message to the chatbox
chatbox.appendChild(createChatLi(userMessage,"outgoing"));
}

sendChatBtn.addEventListener("click",handleChat);