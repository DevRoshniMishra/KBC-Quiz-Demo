import React from "react";
import {BrowserRouter as Router , Route} from 'react-router-dom';

import Home from './components/Home';
import QuizInstructions from "./components/quiz/Quizinstructions";
import Play from "./components/quiz/Play";
import QuizSummary from "./components/quiz/QuizSummary";
import Login from './components/Login';
import Register from './components/Register';





function App(){
    return(
        <Router>
            <Route path ="/" exact component={Home}/>
            <Route path ="/play/instructions" exact component={QuizInstructions}/>
            <Route path ="/play/Quiz" exact component={Play}/>
            <Route path ="/play/quizSummary" exact component={QuizSummary}/>
            <Route path ="/login" exact component={Login}/>
            <Route path ="/register" exact component={Register}/>
            
            

        </Router>
    );
}
export default App;
