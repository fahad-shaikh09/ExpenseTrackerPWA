importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.17.1/firebase-messaging.js');


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

