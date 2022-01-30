const firebaseConfig = {
    apiKey: "AIzaSyAuJc1RF9Ft-Tnq3buAZZKNBKzBpCbB5_4",
    authDomain: "clone-509bb.firebaseapp.com",
    projectId: "clone-509bb",
    storageBucket: "clone-509bb.appspot.com",
    messagingSenderId: "388907999371",
    appId: "1:388907999371:web:3062c78c1e3644b7d8748e",
    measurementId: "G-MGLTRBR03B"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  var db = firebase.firestore();