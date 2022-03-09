import React from "react";

const Recovery = () => (
  <div>
    <h2>Reset Password</h2>

    <p>Follow this link to reset the password for your account:</p>
    <p>
      <a href="{{ .ConfirmationURL }}">Reset Password</a>
    </p>
  </div>
);

export default Recovery;
