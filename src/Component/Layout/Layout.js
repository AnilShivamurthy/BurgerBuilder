import React from 'react';
import Aup from '../../Hoc/Aup';
import './Layout.css';

const layout =(props)=>{
    return(
        <Aup>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className="content">{props.children}</main>
        </Aup>
    )
}

export default layout;