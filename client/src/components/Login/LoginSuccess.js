import React from 'react';
// @ts-ignore
import Image from '../../images/img-3.svg';
import useStyles from './styles';

const LoginSuccess = () => {
  //Styles
  const classes = useStyles();

  return (
    <div className={classes.contentRight}>
      <div className={classes.formSuccess}>We have received your request!</div>
      <img src={Image} alt="success" className={classes.formImg2} />
    </div>
  );
};

export default LoginSuccess;
