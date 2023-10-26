import React from 'react'

function Shape({color}) {

    let styles = {
        width: randomNumber(),
        height: randomNumber(),
        backgroundColor: color,
    }

    function randomNumber(){
        return `${Math.floor(Math.random() * 900)}px`;
    }
  return (
    <div className="shape" style={styles}>
    </div>
  )
}

export default Shape