import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";


const Home = () => {
  return (
    <Fragment>
      <Helmet>
        <title>Quiz App - Home</title>
      </Helmet>
      <div id="home">
        <section>
          <div style={{textAlign:'center'}}>
           <img src= "https://vignette.wikia.nocookie.net/millionaire/images/2/22/Kaun_Banega_Crorepati_2019_Logo.png/revision/latest/window-crop/width/200/x-offset/0/y-offset/0/window-width/1032/window-height/1032?cb=20200217190935" className="img"></img>
          </div>
          <h1> KBC Quiz</h1>
          
          <div className="play-button-container">
            <ul>
              <li>
                <Link  className="play-button" to="/play/instructions">Play</Link>
              </li>
            </ul>
          </div>
          <div className="auth-container">
            <Link to="/login" className="auth-buttons" id="login-button">Login</Link>
            <Link to="/register" className="auth-buttons" id="signup-button">Register</Link>
          </div>
        </section>
      </div>
    </Fragment>
  );
};
export default Home;
