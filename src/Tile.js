import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: 'dollars'
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
    };

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
                    <div className="card">
                        {val}
                    </div>
                </a>
            )
        }
        else return (
            <div>
                <div className="card" dangerouslySetInnerHTML={{ __html: this.props.question }} />
                <div>
                    <ul>
                        {this.answers.map(incorrectAnswer => <li>{incorrectAnswer}</li>)}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Tile;

