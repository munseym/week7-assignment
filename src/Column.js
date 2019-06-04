import React from 'react';

class Column extends React.Component {
    

    render(){
        let val = this.props.id;
        val += 1;
        val *= 100;
        return (
            <div>
                <div className="card" dangerouslySetInnerHTML={{__html: this.props.question}} />
            </div>
        );
    }
}

export default Column;