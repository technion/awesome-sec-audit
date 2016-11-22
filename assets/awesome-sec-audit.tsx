import * as React from "react";
import * as ReactDOM from "react-dom";

interface IstartProps {
    menu : number;
    days? : string;
}

class Start extends React.Component<{}, IstartProps> {
    "use strict";
    constructor(props) {
        super(props);
        this.state = {menu: 0};
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
            <div><button onClick={this.getStarted.bind(this)}>test</button>
            </div>
            )
        } else if (this.state.menu === 1) {
            return (
            <div><form><input ref="answer" />
            <button onClick={this.checkAnswer.bind(this)}>test2</button>
            </form>
            </div>
            )
        }

        // State must == 2 - quiz completed
        return (
            <div>Finished{this.state.days}</div>
        );
    }
};

ReactDOM.render(
    <Start />,
    document.getElementById("content")
);
