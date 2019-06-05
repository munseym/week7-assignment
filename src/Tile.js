import React from 'react';

class Tile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentState: 'dollars' 
        };
    }

    render() {
        let val = this.props.id;
        val += 1;
        val *= 100;
        
        if(this.state.currentState === 'dollars'){
            return (
                <div className="card">
                    {val}
                </div>
            )
        }
        else return (
            <div>
                <div className="card" dangerouslySetInnerHTML={{ __html: this.props.question }} />
            </div>
        );
    }
}

export default Tile;

