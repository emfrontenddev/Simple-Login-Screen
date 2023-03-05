const Name = document.querySelector("#name");
const Email = document.querySelector("#email");
const button = document.querySelector("#btn");
const Message = document.querySelector(".msg");

button.addEventListener('click', (event) =>{
    event.preventDefault;

    const nameValue = Name.value;
    const emailValue = Email.value;

    if(nameValue === "" || emailValue == ""){
        Message.textContent = "Please fill out the fields!";
        Message.classList = "error"

        setTimeout(() =>{
            Message.textContent = "";
            Message.classList = "";
        }, 1500);
        return;
    }
});