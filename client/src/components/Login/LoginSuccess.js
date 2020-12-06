import React from 'react';
import useStyles from './styles';

const LoginSuccess = () => {
  //Styles
  const classes = useStyles();

  return (
    <div className={classes.contentRight}>
      <div className={classes.formSuccess}>We have received your request!</div>
      <img
        src="images/memories.png"
        alt="success"
        className={classes.formImg2}
      />
    </div>
  );
};

export default LoginSuccess;
