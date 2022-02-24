import React, { useState } from "react";
import { db } from "./firebase";

const SubscribeForm = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    db.collection("Newsletter Subscriber")
      .add({
        email: email,
      })
      .then(() => {
        alert("Thank you for Subscribe With Us");
      })
      .catch((error) => {
        alert("error.message");
      });

    setEmail("");
  };

  return (
    <div>
      <form method="POST" onSubmit={handleSubmit}>
        <div class="subscribe_form">
          <input
            type="email"
            placeholder="Type your Email Address"
            onChange={(e) => setEmail(e.target.value)}
          />
          <button class="bubscribe_btn">Subscribe</button>
        </div>
      </form>
    </div>
  );
};

export default SubscribeForm;
