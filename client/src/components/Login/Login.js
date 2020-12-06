import React, { useState } from 'react';
import LoginSignUp from './LoginSignUp';
import LoginSuccess from './LoginSuccess';
import useStyles from './styles';

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  //Styles
  const classes = useStyles();

  function submitForm() {
    setIsSubmitted(true);
  }

  return (
    <React.Fragment>
      <div className={classes.formContainer}>
        <span className={classes.closeBtn}></span>
        <div className={classes.contentLeft}>
          <img
            src="images/img-2.svg"
            alt="spaceship"
            className={classes.formImg}
          />
        </div>
        {!isSubmitted ? (
          <LoginSignUp submitForm={submitForm} />
        ) : (
          <LoginSuccess />
        )}
      </div>
    </React.Fragment>
  );
};

export default Login;
