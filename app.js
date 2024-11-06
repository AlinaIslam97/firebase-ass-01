import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification } from "./firebase.js";

let signUp = () => {
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user)
      alert("Account created successfully");
    })
    .catch((error) => {
      console.log(error.messege)
      // alert(error.code);
    });
}

if (window.location.pathname == "/index.html") {
  let sign_up = document.getElementById("sign_up")
  sign_up.addEventListener("click", signUp)
}

let logIn = () => {
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      alert("Login Successful")
    })
    .catch((error) => {
      console.log(error.code)
      alert(error.code);
    });
}

if (window.location.pathname == "/login.html") {
  let log_in = document.getElementById("log_in")
  log_in.addEventListener("click", logIn)
}

// onAuthStateChanged(auth, (user) => {
//   if (user) {
//     console.log(user);
//     const uid = user.uid;
//     // ...
//   } else {
//     // alert("User not found")
//   }
// });

// let sendMail = () => {
//   sendEmailVerification(auth.currentUser)
//     .then(() => {
//       console.log("Email verification sent!");
//     });
// }
// if (window.location.pathname == "/index.html") {
//   let verification = document.getElementById("verification")
//   verification.addEventListener("click", sendMail)
// }

