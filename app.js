import { auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signOut, signInWithPopup, GoogleAuthProvider, provider, getFirestore, db, collection, addDoc } from "./firebase.js";

let signUp = () => {
  let email = document.getElementById("email").value
  let password = document.getElementById("password").value
  let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  let passwordRegex = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;

  let name = document.getElementById("name").value
  let number = document.getElementById("number").value
  let userData = { name, number, email, password}
  console.log(userData);

  if (emailRegex.test(email) && passwordRegex.test(password)) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async(userCredential) => {
        const user = userCredential.user;
        console.log(user)
        alert("Account created successfully");
        window.location.href = "./postApp(1)/index.html";

        try {
          const docRef = await addDoc(collection(db, "users"), {
            ...userData,
            uId : user.uid,
          });
          console.log("Document written with ID: ", docRef.id);
        } catch (e) {
          console.error("Error adding document: ", e);
        }
      })
      .catch((error) => {
        console.log(error.messege)
        // alert(error.code);
      });
  } else {
    alert("invalid email or password")
  }

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
      window.location.href = "./postApp(1)/index.html"
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

onAuthStateChanged(auth, (user) => {
  if (user) {
    console.log(user);
    const uid = user.uid;
  } else {
    // alert("User not found")
  }
});

let sendMail = () => {
  sendEmailVerification(auth.currentUser)
    .then(() => {
      console.log("Email verification sent!");
    });
}
if (window.location.pathname == "/index.html") {
  let verification = document.getElementById("verification")
  verification.addEventListener("click", sendMail)
}

let signout = () => {
  signOut(auth).then(() => {
    alert("Log out successfull")
    window.location.href = "../index.html"
  }).catch((error) => {
    console.log(error.code);

  });
}
if(window.location.pathname == "/postApp(1)/index.html"){
  let sign_out = document.getElementById("sign_out")
  sign_out.addEventListener("click", signout)
}

let googleSignup = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const user = result.user;
      console.log(user)
      window.location.href = "./postApp(1)/index.html"
    }).catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      const email = error.customData.email;
      const credential = GoogleAuthProvider.credentialFromError(error);
      console.log(email, credential);
    });
}

if (window.location.pathname == "/index.html") {
  let googleBtn = document.getElementById("googleBtn");
  googleBtn.addEventListener("click", googleSignup);
}