function register(event) {
  //Prevent Default Behaviour of form
  event.preventDefault();
  //Get Data From User using form
  var userName = document.getElementById("name").value;
  var userNumber = document.getElementById("number").value;
  var userEmail = document.getElementById("email").value;
  var userPassword = document.getElementById("password").value;
  var conformPassword = document.getElementById("conform-password").value;
  // temp variable to create object of users data
  var userData = {
    name: userName,
    number: userNumber,
    email: userEmail,
    password: userPassword,
  };
  //Getting data From Ls
  var dataFromLs = JSON.parse(localStorage.getItem("userData")) || [];

  //Verification for exsiting email
  var flang = false;
  for (var i = 0; i < dataFromLs.length; i++) {
    if (dataFromLs[i].email === userEmail) {
      flang = true;
    }
  }

  if (flang) {
    alert("Email Already existed, Please enter another email");
    document.getElementById("email").value = "";
  } else if (userPassword.length < 8) {
    alert("password Must be greater than 8 characters");
    document.getElementById("password").value = "";
    document.getElementById("conform-password").value = "";
  } else if (userPassword !== conformPassword) {
    alert("Password does not match please enter similiar conform password");
    document.getElementById("password").value = "";
    document.getElementById("conform-password").value = "";
  } else {
    //push userdata object to localstorage temp variable
    dataFromLs.push(userData);
    //update local storage
    localStorage.setItem("userData", JSON.stringify(dataFromLs));
    //clear form
    document.getElementById("name").value = "";
    document.getElementById("number").value = "";
    document.getElementById("email").value = "";
    document.getElementById("password").value = "";
    document.getElementById("conform-password").value = "";
    //redirect to another page
    window.location.href = "/login.html";
    //registration alert
    alert("registration done");
  }

  //   console.log(dataFromLs,"dataFromLs");
}

function login(event) {
  event.preventDefault();

  var userData = document.getElementById("name").value;
  var userPassword = document.getElementById("password").value;
  var dataFromLs = JSON.parse(localStorage.getItem("userData"));

  var flag = false;

  for (var i = 0; i < dataFromLs.length; i++) {
    if (
      (dataFromLs[i].email === userData || dataFromLs[i].number === userData) &&
      dataFromLs[i].password === userPassword
    ) {
      flag = true;
    }
  }

  if (flag) {
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
    window.location.href = "/homepage.html";
    alert("Loged in Sucessful");
  } else {
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";
    alert("Eamil /number / password not matched ");
  }
}
