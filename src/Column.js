import React from 'react';
import PropTypes from 'prop-types';
import Tile from './Tile'

class Column extends React.Component {
    static propTypes = {
        response_code: PropTypes.number,
        results: PropTypes.arrayOf(PropTypes.instanceOf(Tile))
    }

    render(){
        let val = this.props.id;
        val += 1;
        val *= 100;
        return (
            <div>
                {val} {this.props.question}
            </div>
        );
    }
}

export default Column;