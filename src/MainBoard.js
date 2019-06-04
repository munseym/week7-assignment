import React from 'react';
import Column from './Column'
import q1 from './cannedQuestions/1.json';
import q2 from './cannedQuestions/2.json';
import q3 from './cannedQuestions/3.json';
import q4 from './cannedQuestions/4.json';
import q5 from './cannedQuestions/5.json';
import q6 from './cannedQuestions/6.json';

class MainBoard extends React.Component {
    render() {
        console.log();
        return (
            <div>
                <div>Jeopardy</div>
                <table>
                    <tbody>
                        <tr>
                            <th>{q1.results[0].category}</th>
                            <th>{q2.results[0].category}</th>
                            <th>{q3.results[0].category}</th>
                            <th>{q4.results[0].category}</th>
                            <th>{q5.results[0].category}</th>
                            <th>{q6.results[0].category}</th>
                        </tr>
                        <tr>
                            <td>{q1.results.map((column, i) => <Column key={i} id={i} {...column}/>)}</td>
                            <td>{q2.results.map((column, i) => <Column key={i} id={i} {...column}/>)}</td>
                            <td>{q3.results.map((column, i) => <Column key={i} id={i} {...column}/>)}</td>
                            <td>{q4.results.map((column, i) => <Column key={i} id={i} {...column}/>)}</td>
                            <td>{q5.results.map((column, i) => <Column key={i} id={i} {...column}/>)}</td>
                            <td>{q6.results.map((column, i) => <Column key={i} id={i} {...column}/>)}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        );
    }
}

export default MainBoard;