import React, { Component, Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

class QuizSummary extends Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      numberOfQuestions: 5,
      numberOfAnsweredQuestions: 0,
      correctAnswers: 0,
      wrongAnswers: 0,
      hintsUsed: 0,
      fiftyFiftyUsed: 0,
    };
  }
  componentDidMount() {
    const { state } = this.props.location;
    if (state) {
      this.setState({
        score: (state.score / state.numberOfQuestions) * 100,
        numberOfQuestions: state.numberOfQuestions,
        numberOfAnsweredQuestions: state.numberOfAnsweredQuestions,
        correctAnswers: state.correctAnswers,
        wrongAnswers: state.wrongAnswers,
        hintsUsed: state.hintsUsed,
        fiftyFiftyUsed: state.fiftyFiftyUsed,
      });
    }
  }
  render() {
    const { state, score } = this.props.location;
    let stats, remark;
   
    if (state !== undefined) {
      stats = (
        <Fragment>
          
          <div className="container">
            <h4>{remark}</h4>
            <h2>Your score Ammount: {this.state.score.toFixed(0)} rupees</h2>
            <table>
              <tr>
                <th> <span className=" stat left">Total number of questions : </span></th>
                <td> <span className="right">{this.state.numberOfQuestions}</span></td>
              </tr>
              <tr>
                <th> <span className=" stat left">Number Of attempted Questions :</span></th>
                <td> <span className="right">{this.state.numberOfAnsweredQuestions}</span></td>
              </tr>
              <tr>
                <th><span className=" stat left">Number of Correct Answer </span></th>
                <td> <span className="right">{this.state.correctAnswers}</span></td>
              </tr>
              <tr>
                <th> <span className=" stat left">Number of wrong Answers : </span></th>
                <td><span className="right">{this.state.wrongAnswers}</span></td>
                </tr>
                <tr>
                  <th><span className=" stat left">Hints Used : </span></th>
                  <td> <span className="right">{this.state.hintsUsed}</span></td>
                 </tr>
                 <tr>
                   <th>  <span className=" stat left">50-50 used : </span></th>
                   <td> <span className="right">{this.state.usedFiftyFifty}</span></td>
                   </tr>

            </table>
          </div>
          <section>
            <ul>
              <li>
                <Link classname="link1" to="/">Back to Home </Link>
              </li>
              <li>
                <Link className="link2" to="/play/quiz">Play again</Link>
              </li>
            </ul>
          </section>
        </Fragment>
      );
    } else {
      stats = (
        <section>
          <h1 className="no-stats">No Statistics Availble</h1>
          <ul>
            <li>
              <Link className="link1" to="/">Back to Home </Link>
            </li>
            <li>
              <Link className="link2" to="/play/quiz">Take a Quiz</Link>
            </li>
          </ul>
        </section>
      );
    }
    return (
      <Fragment>
        <Helmet>
          <title>Quiz App - Summary</title>
        </Helmet>
        {stats}
      </Fragment>
    );
  }
}
export default QuizSummary;
