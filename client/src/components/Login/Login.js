import React, { useState } from 'react';
import LoginSignUp from './LoginSignUp';
import LoginSuccess from './LoginSuccess';
// @ts-ignore
import Image from '../../images/memories.png';
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
          <h1 className={classes.formHeading}>MOMENTS</h1>
          <img src={Image} alt="spaceship" className={classes.formImg} />
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
