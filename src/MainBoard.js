import React from 'react';
import Tile from './Tile'
import q1 from './cannedQuestions/1.json';
import q2 from './cannedQuestions/2.json';
import q3 from './cannedQuestions/3.json';
import q4 from './cannedQuestions/4.json';
import q5 from './cannedQuestions/5.json';
import q6 from './cannedQuestions/6.json';

class MainBoard extends React.Component {
    constructor() {
        super();
        this.state = {
            USE_WEB_SERVICE: true,
            isLoading: true,
            hasError: false,
            score: 0,
            category: []
        }
        this.adjustScore = this.adjustScore.bind(this);
    }

    adjustScore(amount) {
        const stateCopy = this.state;
        stateCopy.score += amount;
        this.setState(stateCopy);
    }

    //Copied from https://javascript.info/task/shuffle
    shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
            [array[i], array[j]] = [array[j], array[i]]; // swap elements
        }
    }

    componentDidMount() {
        const stateCopy = this.state;
        if (this.state.USE_WEB_SERVICE) {
            //Pick 6 unique categories
            let categoryChoices = [9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32];
            this.shuffle(categoryChoices);
            categoryChoices = categoryChoices.slice(0, 6);

            //For each category, asynchronously fetch a batch of 5 questions
            const promises = categoryChoices.map(categoryId =>
                fetch(`https://opentdb.com/api.php?amount=5&type=multiple&category=${categoryId}`)
                    .then(result => result.json()))
            Promise.all(promises)
                .then(results => {
                    stateCopy.category = results;
                    stateCopy.isLoading = false;
                    this.setState(stateCopy);
                })
                .catch(error => {
                    this.setState({
                        hasError: true,
                        isLoading: false
                    });
                });
        } else {
            //Use hard coded questions for test purposes only
            stateCopy.category.push(q1);
            stateCopy.category.push(q2);
            stateCopy.category.push(q3);
            stateCopy.category.push(q4);
            stateCopy.category.push(q5);
            stateCopy.category.push(q6);
            stateCopy.isLoading = false;
            this.setState(stateCopy);
        }
    }

    render() {
        if (this.state.isLoading) {
            return <div>Loading...</div>;
        }

        if (this.state.hasError) {
            return <div>ERROR, please reload and try again</div>;
        }

        return (
            <div>
                <div><h2>Jeopardy</h2></div>
                <div><h3>${this.state.score}</h3></div>
                <table>
                    <tbody>
                        <tr>
                            <th className="columnHeader">{this.state.category[0].results[0].category}</th>
                            <th className="columnHeader">{this.state.category[1].results[0].category}</th>
                            <th className="columnHeader">{this.state.category[2].results[0].category}</th>
                            <th className="columnHeader">{this.state.category[3].results[0].category}</th>
                            <th className="columnHeader">{this.state.category[4].results[0].category}</th>
                            <th className="columnHeader">{this.state.category[5].results[0].category}</th>
                        </tr>
                        <tr>
                            <td>{this.state.category[0].results.map((column, i) => <Tile key={i} id={i} adjustScore={this.adjustScore} {...column} />)}</td>
                            <td>{this.state.category[1].results.map((column, i) => <Tile key={i} id={i} adjustScore={this.adjustScore} {...column} />)}</td>
                            <td>{this.state.category[2].results.map((column, i) => <Tile key={i} id={i} adjustScore={this.adjustScore} {...column} />)}</td>
                            <td>{this.state.category[3].results.map((column, i) => <Tile key={i} id={i} adjustScore={this.adjustScore} {...column} />)}</td>
                            <td>{this.state.category[4].results.map((column, i) => <Tile key={i} id={i} adjustScore={this.adjustScore} {...column} />)}</td>
                            <td>{this.state.category[5].results.map((column, i) => <Tile key={i} id={i} adjustScore={this.adjustScore} {...column} />)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );

    }
}

export default MainBoard;