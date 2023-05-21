let socket = io();
let userName;

Swal.fire({
  title: "Write your name",
  input: "text",
  inputValidator: (value) => !value && "please write your name",
  allowOutsideClick: false,
}).then((res) => {
  userName = res.value;
  document.getElementById("userName").innerHTML = userName;

  socket.emit("auth", userName);
  //console.log(userName);
});

let chatbox = document.getElementById("chatbox");
chatbox.addEventListener("keyup", send);

function send(e) {
  if (e.key === "Enter") {
    socket.emit("new_message", {
      userName,
      message: chatbox.value,
    });
    //console.log(chatbox.value);
  }
}
socket.on("allMessagess", (data) => {
    document.getElementById('messagess').innerHTML = data
        .map((message) => `<br><b>${message.userName}</b>: ${message.message}`)
    .join("");
});//mapeo para transformar array en un array de string al ser unidos por metodo join.
