import React, { useState, useEffect } from "react";
import Form from "../FormGen/Form";
import data from "./data";
import qrcode from "qrcode-generator";

export default () => {
  const [database, setDatabase] = useState({});
  const [storage, setStorage] = useState({});
  const [auth, setAuth] = useState({});
  const [done, setDone] = useState("");
  const config = {
    apiKey: "AIzaSyC-eZnVqCn0Qba8EOy8Omzq_7pM4sSRsSc",
    authDomain: "hayatcode-16825.firebaseapp.com",
    databaseURL: "https://hayatcode-16825.firebaseio.com",
    projectId: "hayatcode-16825",
    storageBucket: "hayatcode-16825.appspot.com",
    messagingSenderId: "174405701783",
    appId: "1:174405701783:web:abe19a32b01e7cd080d9d2",
    measurementId: "G-2K5461Z8Q7"
  };
  useEffect(() => {
    const firebase = require("firebase/app");
    require("firebase/analytics");
    require("firebase/database");
    require("firebase/storage");
    require("firebase/auth");
    firebase.initializeApp(config);
    firebase.analytics();

    setDatabase(firebase.database());
    setStorage(firebase.storage());
    setAuth(firebase.auth());
  }, []);
  //Now we have our database ready

  /**
   * Function that gets fired on clicking submit button
   * @param {Object} data - Object containing id as key and data as value
   */
  const handleSubmit = data => {
    const sendData = email => {
      //Generate QR code
      const typeNumber = 4;
      const errorCorrectionLevel = "L";
      const qr = qrcode(typeNumber, errorCorrectionLevel);
      qr.addData("hayatcode.company/" + email);
      qr.make();
      //Data URL
      const dataURLQRCode = qr.createDataURL();
      setDone(dataURLQRCode);
      storage
        .ref()
        .child("qrcode/" + auth.currentUser.uid)
        .putString(dataURLQRCode, "data_url")
        .then(console.log, console.log);
    };
    auth.createUserWithEmailAndPassword(data.email, data.password).then(
      () => {
        sendData(data.email);
        const user = auth.currentUser;
        const {
          firstName,
          lastName: familyName,
          address: deliveryAddress,
          pin,
          idNumber: nationalId,
          phone,
          products,
          email
        } = data;
        console.log(data);
        database
          .ref("user")
          .child(user.uid)
          .set({
            firstName,
            familyName,
            email,
            pin,
            nationalId,
            deliveryAddress,
            phone,
            products: products.join("/")
          })
          .catch(console.log);
        const key = database
          .ref("order")
          .child("order")
          .push()
          .getKey();
        database
          .ref("order")
          .child(key)
          .set({
            UID: user.uid,
            created_at: Date.now(),
            items: products.join("/")
          });
      },

      ({ code }) =>
        code === "auth/email-already-in-use"
          ? auth
              .signInWithEmailAndPassword(data.email, data.password)
              .then(() => {
                const typeNumber = 4;
                const errorCorrectionLevel = "L";
                const qr = qrcode(typeNumber, errorCorrectionLevel);
                qr.addData("hayatcode.company/" + data.email);
                qr.make();
                //Data URL
                const dataURLQRCode = qr.createDataURL();
                setDone(dataURLQRCode);
                const user = auth.currentUser;
                const key = database
                  .ref("order")
                  .child("order")
                  .push()
                  .getKey();
                database
                  .ref("order")
                  .child(key)
                  .set({
                    UID: user.uid,
                    created_at: Date.now(),
                    items: data.products.join("/")
                  });
              }, console.log)
          : console.log(code)
    );
  };
  return (
    <div>
      {done === "" ? (
        <Form pages={data} onSubmit={handleSubmit} />
      ) : (
        <div>
          <h2>You order has been submitted successfully!</h2>
          <h4>You will be contacted soon to confirm your order</h4>
        </div>
      )}
    </div>
  );
};
