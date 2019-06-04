import React from 'react';
import PropTypes from 'prop-types';

class Tile extends React.Component {
    static propTypes = {
        category: PropTypes.string,
        type: PropTypes.string,
        difficulty: PropTypes.string,
        question: PropTypes.string,
        correct_answer: PropTypes.string,
        incorrect_answers: PropTypes.array
    }

    render(){
        return (
            <div>
                {this.props.question}
            </div>
        );
    }
}

export default Tile;
