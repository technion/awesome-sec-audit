import * as React from "react";
import * as ReactDOM from "react-dom";

interface IstartProps {
    menu : number; // Represents which stage of the quiz user is in
    days? : string; // Days entered as answer by user
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
        this.setState({menu: 2, days: answernode.value.trim()});
    }

    public render() {
        if (this.state.menu === 0) {
            return (
            <div>
            <button onClick={this.getStarted}>
            Click to get started!
            </button>
            </div>
            );
        } else if (this.state.menu === 1) {
            return (
            <div><input ref="answer" />
            <button onClick={this.checkAnswer}>test2</button>
            </div>
            );
        }

        // State must == 2 - quiz completed
        return (
            <div>Finished {this.state.days}</div>
        );
    }
};

