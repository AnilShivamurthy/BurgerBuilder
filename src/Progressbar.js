import React, {useState} from 'react';
import './Progressbar.css';


const Progressbar= ()=>{
    const[countstate, setcountstate]=useState({
        count: 0
    });

    const increase=()=>{
        setcountstate({
            count : countstate.count + 1
        });
    }

    const decrease=()=>{
        setcountstate({
            count : countstate.count - 1
        });
    }


    return(
        <div>
            <h1>This is a Counter app</h1>
            <div>{countstate.count}</div>
            <button onClick={increase} className="button">+</button>
            <button onClick={decrease} className="button">-</button>
        </div>
    )
}

export default Progressbar;

