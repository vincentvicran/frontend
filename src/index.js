import React from 'react';
import ReactDOM from 'react-dom';


//* component named app
const App = () => {
    return (
        <div>
            Hi there!
        </div>
    )
}


//* renderer
ReactDOM.render(
    <App />,
    document.querySelector('#root')
)