const emailInput = document.querySelector(".Email");
const messageInput = document.querySelector(".Message");
const submitBtn = document.querySelector(".submitBtn");

var getEmail;
var getMsg;

getEmail = localStorage.getItem("email");
getMsg = localStorage.getItem("msg");

module.exports = {
  getEmail,
  getMsg,
};

submitBtn.addEventListener("click", () => {
  localStorage.setItem("email", emailInput.value);
  localStorage.setItem("msg", messageInput.value);

  getEmail = localStorage.getItem("email");
  getMsg = localStorage.getItem("msg");

  module.exports = {
    getEmail,
    getMsg,
  };

  console.log(getEmail);
});
