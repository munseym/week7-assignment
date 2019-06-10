import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: 'dollars',
        };

        this.answers = this.props.incorrect_answers;
        this.answers.push(this.props.correct_answer);
    }

    handleClick = (e) => {
        if (this.state.currentState === 'dollars') {
            this.setState({
                currentState: 'answerQuestion'
            });
        }
    }

    qaHandleClick = (e) => {
        const val = (this.props.id + 1) * 100;
        if (e.target.textContent.includes(this.props.correct_answer)) {
            this.props.adjustScore(val);
            this.setState({
                currentState: 'correct'
            });
        } else {
            this.props.adjustScore(-1 * val);
            this.setState({
                currentState: 'incorrect'
            });
        }
    };

    //Copied from https://javascript.info/task/shuffle
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
    }

    render() {
        const val = (this.props.id + 1) * 100;
        this.shuffle(this.answers);

        if (this.state.currentState === 'dollars') {
            return (
                <a href onClick={this.handleClick}>
                    <div className="dollars card">
                        ${val}
                    </div>
                </a>
            )
        }
        else if (this.state.currentState === 'answerQuestion') {
            return (
                <a href onClick={this.qaHandleClick}>
                    <div>
                        <div className="card" dangerouslySetInnerHTML={{ __html: this.props.question }} />
                        <div>
                            <ul>
                                {this.answers.map((answer, index) =>
                                    <li key={index}>
                                        <div dangerouslySetInnerHTML={{
                                            __html: answer
                                        }} />
                                    </li>)}
                            </ul>
                        </div>
                    </div>
                </a>
            );
        }
        else if ((this.state.currentState === 'correct')) {
            return (
                <div className="card">
                    {this.props.correct_answer} is Correct!
                </div>
            );
        }
        else {
            return (
                <div className="card">
                    Sorry, the correct answer was {this.props.correct_answer}.
                </div>
            );
        }
    }
}

export default Tile;

