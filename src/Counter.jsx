// Counter.jsx
import React from 'react';
import { connect } from 'react-redux';

function Counter(props) {
    console.log(props);
    return (
        <div className='mybox'>
            <h1>Counter: {props.count}</h1> 
            <button onClick={()=> {props.dispatch({type:'INCREMENT'})}}>INC</button>
            <button onClick={()=> {props.dispatch({type:'DECREMENT'})}}>DEC</button>

        </div>
    );
}

const mapStateToProps = (state) => ({
    count: state.counter.count 
});

export default connect(mapStateToProps)(Counter);
