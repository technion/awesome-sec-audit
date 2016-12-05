import * as React from "react";
import * as ReactDOM from "react-dom";

interface IstartProps {
    readonly menu: number; // Represents which stage of the quiz user is in
    readonly days?: number; // Days entered as answer by user
}

export default class Start extends React.Component<{}, IstartProps> {
    "use strict";
    constructor(props) {
        super(props);
        this.state = {menu: 0};
        this.getStarted = this.getStarted.bind(this); // Just Javascript things
        this.checkAnswer = this.checkAnswer.bind(this);
    }

    public getStarted() {
        this.setState({menu: 1});
    }

    public checkAnswer() {
        const answernode = ReactDOM.findDOMNode<HTMLInputElement>(this.refs["answer"]);
        const answer = answernode.value.trim();
        if (!answer.match(/^\d+$/)) {
            console.log("Invalid data entered");
            console.log(answer);
            return;
        }
        this.setState({menu: 2, days: Number(answer)});
    }

    public render() {
        if (this.state.menu === 0) {
            return (
            <div>
            <button className="btn btn-info" onClick={this.getStarted}>
            Click to get started!
            </button>
            </div>
            );
        } else if (this.state.menu === 1) {
            return (
            <div>
            Question one: Please enter the maximum password lifetime allowed in your policy in days:
            <input ref="answer" />
            <button className="btn btn-info" onClick={this.checkAnswer} >
                Submit answer
            </button>
            </div>
            );
        }

        // State must == 2 - quiz completed
        return (
            <div>
            <button className="btn btn-danger">
            You have failed and will get hacked.
            </button>
            Maximum acceptable password lifetime is {this.state.days - 1} days<br />
            No but seriously, this app has been a great template for React/Typescript/Jest applications. 
            <br /><a href="https://github.com/technion/awesome-sec-audit" className="btn btn-info">Get source here.</a>

            <br />Also, this is less satyrical than you think and heavily reflects most vulnerability assessments I've sat through.
            </div>
        );
    }
};

