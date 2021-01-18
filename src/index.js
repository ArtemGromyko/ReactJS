import React from 'react';
import ReactDOM from 'react-dom';

const styles = {
    Header: {
        padding: "10px 20px",
        textAlign: "center",
        color: "blue",
        fontSize: "30px",
        fontWeight: "bold" 
    },
    Card: {
        textAlign: "Center",
        fontWeight: "normal"
    }
};

function Card(props) {
    return (
        <div style={styles.Card}>
            <h2 style={{color: "orange", fontSize: "35px"}}>Caption</h2>
            <p>Hello world</p>            
        </div>);
}

function Task(props) {
    return (
        <div>
            <header style={styles.Header}>
                <h1>This is the header</h1>
            </header>
            <Card/>
        </div>
    );
}

ReactDOM.render(
    <Task/>,
    document.getElementById('root')
  );