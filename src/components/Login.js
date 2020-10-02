import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Login = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Quiz App - Login</title>
      </Helmet>
      <div id="home">
        <section className="section-two">
        <div style={{textAlign:'center'}}>
           <img src= "https://vignette.wikia.nocookie.net/millionaire/images/2/22/Kaun_Banega_Crorepati_2019_Logo.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/1032/window-height/1032?cb=20200217190935" className="img-one"></img>
          </div>
          <h1 className="login-header">Login</h1>
          
          <div className="play-button-container">
            <ul>
              <li>
                <input type="text" className="input-feild" placeholder="Enter Your Name" autoComplete="off"/>
                <input type="text" className="input-feild"  placeholder="Enter Your Email Id" autoComplete="off"/>
                <input type="password" className="input-feild" placeholder="Enter Your Password" autoComplete="off"/>
                
               
              </li>
            </ul>
          </div>
          <div className="auth-container">
          <input type="text" value="Login" className="submit-button"/>
          </div>
          <div className="auth-container">
         
            <p className="account-para"> If You Don't have an account then</p>
            <Link to="/register" className="register-button" id="login-button" >Register</Link>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
export default Login;
