// @ts-nocheck
import React from 'react';
import useForm from './useForm';
import validateInfo from './validateInfo';
import useStyles from './styles';

const LoginSignUp = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useForm(
    submitForm,
    validateInfo
  );

  //Styles
  const classes = useStyles();

  return (
    <div className={classes.contentRight}>
      <form className={classes.form} onSubmit={handleSubmit}>
        <h1 className={classes.formTitle}>
          Get Started with us today! Create your account by filling out the
          information below.
        </h1>
        <div className={classes.formInputs}>
          <label htmlFor="username" className={classes.formLabel}>
            Username
          </label>
          <input
            id="username"
            type="text"
            name="username"
            className={classes.formInput}
            placeholder="Enter your username"
            value={values.username}
            onChange={handleChange}
          />
          {errors.username && (
            <p className={classes.formInputsP}>{errors.username}</p>
          )}
        </div>
        <div className={classes.formInputs}>
          <label htmlFor="email" className={classes.formLabel}>
            Email
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className={classes.formInput}
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className={classes.formInputsP}>{errors.email}</p>
          )}
        </div>
        <div className={classes.formInputs}>
          <label htmlFor="password" className={classes.formLabel}>
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            className={classes.formInput}
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
          />
          {errors.password && (
            <p className={classes.formInputsP}>{errors.password}</p>
          )}
        </div>
        <div className={classes.formInputs}>
          <label htmlFor="password2" className={classes.formLabel}>
            Confirm your Password
          </label>
          <input
            id="password2"
            type="password"
            name="password2"
            className={classes.formInput}
            placeholder="Confirm your password"
            value={values.password2}
            onChange={handleChange}
          />
          {errors.password2 && (
            <p className={classes.formInputsP}>{errors.password2}</p>
          )}
        </div>
        <button className={classes.formInputBtn} type="submit">
          Login
        </button>
        <span className={classes.formInputLogin}>
          Do not have an account? SignUp{''}
          <a href="/" className={classes.formInputLoginLink}>
            {' '}
            here
          </a>
        </span>
      </form>
    </div>
  );
};

export default LoginSignUp;
