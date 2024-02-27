import React from 'react'

function Counters() {
    var [count,setcount] = React.useState(0)
    function inc() {
        setcount(count +1)
    }
    function dec() {
        setcount(count -1)
    }
  return (
    <div>
        <h1>Counter{count}</h1>
        <button onClick={inc}>INC</button>
        <button onClick={dec}>DEC</button>
    </div>
  )
}

export default Counters