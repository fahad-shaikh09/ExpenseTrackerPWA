import firebase from "firebase";

// const firebaseconfig = {
//     apiKey: "AIzaSyBU5bY0DnUnKV-n1bwm1pQPrKHe4-jUxm8",
//     authDomain: "expensetrackerpwa.firebaseapp.com",
//     databaseURL: "https://expensetrackerpwa.firebaseio.com",
//     projectId: "expensetrackerpwa",
//     storageBucket: "expensetrackerpwa.appspot.com",
//     messagingSenderId: "532179021074",
//     appId: "1:532179021074:web:9205f57167f1cab37a97cb"
//   };

  firebase.initializeApp({
    apiKey: "AIzaSyBU5bY0DnUnKV-n1bwm1pQPrKHe4-jUxm8",
    authDomain: "expensetrackerpwa.firebaseapp.com",
    databaseURL: "https://expensetrackerpwa.firebaseio.com",
    projectId: "expensetrackerpwa",
    storageBucket: "expensetrackerpwa.appspot.com",
    messagingSenderId: "532179021074",
    appId: "1:532179021074:web:9205f57167f1cab37a97cb"
  });
  const messaging = firebase.messaging();


export function requestPermission() {
    console.log('Requesting permission...');
    // [START request_permission]
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        console.log('Notification permission granted.');
        messaging.getToken().then((currentToken) => {
            if (currentToken) {
              console.log("Token: ", currentToken)
            } else {
              // Show permission request.
              console.log('No Instance ID token available. Request permission to generate one.');
            }
          }).catch((err) => {
            console.log('An error occurred while retrieving token. ', err);
          });
      } else {
        console.log('Unable to get permission to notify.');
      }
    });
  }