import React, { useState } from "react";

function Home() {
  const [email, setEmail] = useState("");
  const [isValid, setIsValid] = useState(true);
  const [showSubscription, setShowSubscription] = useState(false);

  const handleEmailChange = (event) => {
    const newEmail = event.target.value;
    setEmail(newEmail);
    validateEmail(newEmail);
  };

  const validateEmail = (email) => {
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    setIsValid(emailPattern.test(email));
  };

  const handleSubscribe = (event) => {
    event.preventDefault();
    if (isValid && !showSubscription) {
      setShowSubscription(true);
    }
  };

  return (
    <div className="main">
      <div className="card">
        <div className="part1">
          <h1>Stay updated!</h1>
          <p>Join 60,000+ product managers receiving monthly updates on:</p>
          <ul>
            <li>
              <i className="fa-solid fa-circle-check"></i>Product discovery
              and building what matters
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>Measuring to ensure
              updates are a success
            </li>
            <li>
              <i className="fa-solid fa-circle-check"></i>And much more!
            </li>
          </ul>
          <form action="">
            <label htmlFor="email">Email address</label>
            <div id="error">
              {!isValid && (
                <p style={{ color: "red" }}>
                  Please enter a valid email address
                </p>
              )}
            </div>
            <input
              type="email"
              className="email"
              name="email"
              placeholder="email@company.com"
              required
              value={email}
              onChange={handleEmailChange}
            />
            <button
              onClick={handleSubscribe}
              disabled={!isValid || showSubscription} // Disable the button if email is not valid or subscription is shown
            >
              Subscribe to monthly newsletter
            </button>
          </form>
        </div>
        <div className="part2"></div>
      </div>
      {showSubscription && (
        <div className="subs">
          <i class="fa-solid fa-circle-check"></i>
          <h1>Thanks for subscribing!</h1>
          <p>
            A confirmation email has been sent to your email. Please open it
            and click the button inside to confirm subscription.
          </p>
          <button>Dismiss message</button>
        </div>
      )}
    </div>
  );
}

export default Home;
