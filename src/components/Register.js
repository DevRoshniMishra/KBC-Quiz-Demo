import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Register = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Quiz App - Register</title>
      </Helmet>
      <div id="home">
        <section className="section-one">
        <div style={{textAlign:'center'}}>
           <img src= "https://vignette.wikia.nocookie.net/millionaire/images/2/22/Kaun_Banega_Crorepati_2019_Logo.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/1032/window-height/1032?cb=20200217190935" className="img-two"></img>
          </div>
          <h1 className="login-header">Register</h1>
          
          <div className="play-button-container">
            <ul>
              <li>
                <input type="text" className="input-feild" placeholder="Enter Your Full Name" autoComplete="off"/>
                <input type="text" className="input-feild"  placeholder="Enter Your Email Id" autoComplete="off"/>
                <input type="password" className="input-feild" placeholder="Enter Your Password" autoComplete="off"/>
                <input type="password" className="input-feild" placeholder="Enter Your Confirm Password" autoComplete="off"/>
                <input type="number" className="input-feild" placeholder="Enter Your Mobile Number" autoComplete="off"/>
               
               
              </li>
            </ul>
          </div>
          <div>
              <input type="text" value="SignUp" className="submit-button"/>
         </div>
        </section>
      </div>
    </Fragment>
  );
};
export default Register;
