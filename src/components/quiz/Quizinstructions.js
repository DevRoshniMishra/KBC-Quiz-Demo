import React,{Fragment}from "react";
import {Link} from 'react-router-dom';
import {Helmet} from 'react-helmet';




const QuizInstructions = () =>(
    <Fragment>
        <Helmet><title>Quiz Instructions -Quiz App</title></Helmet>
       
       
        <div className="rules box">
            <h2>Instruction List Of  KBC Quiz Game</h2>
            <p>Ensure that you read all the rules and instruction well then start the game</p>
            <p>1. The game KBC is based on General Knowledge followed by tv show Kaun Banega Crorepati</p>
            <p>2. KBC has 3 levels in the game every level contains 5 questions.</p>
            <p>3. Every question will have 4 options to choose the right answer.</p>
            <p>4. Contenstant has to choose the right answers to proceed to the next question and level.</p>
            <p>5. Single wrong answer will finish the game, Only right answers for continuing the game.</p>
            <p>6. Contenstant also have 4 lifelines in the game which will be used in his dificult situation. </p>
            <p> 7. Liflines are as follows</p>
            <ul>
                <li>a. 50-50 - By using this lifeline 2 wrong options will be removed. And you will have only 2 options to choose one is correct and other one is incorrect.</li>
                <li> b. Audience Pole will suggest you the correct option in bar graph.</li>
                <li>c. Phone a friend will dial animated number radomly and suggest you correct answer</li>
                <li>d. Flip the question will change the question for you if we are unable to answer the question </li>
                
            </ul>
            <p>8. Quit the game option is there for you to leave the game on cuurent level with respect to corresponding amount.</p>
           
            
            <div>
              <span className="left link"><Link to="/">No take me back</Link></span>
              <span className="right link"><Link to="/play/quiz">Start the game</Link></span>
            </div>
        </div>
        
    </Fragment>
    
);
export default QuizInstructions;

