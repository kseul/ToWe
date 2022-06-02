import React from 'react';

const SignUpComponent = ({ input, handleInput }) => {
  const { name, value } = input;

  return (
    <div className="row">
      <span className="inputTitle">{input.title} *</span>
      <input
        className="signUpInputBox"
        type={input.type}
        value={value}
        name={name}
        onChange={handleInput}
      />
    </div>
  );
};

export default SignUpComponent;
