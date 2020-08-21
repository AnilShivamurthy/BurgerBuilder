import React from 'react';
import Aux from '../../Hoc/Aux';
import './Layout.css';

const layout =(props)=>{
    return(
        <Aux>
        <div>Toolbar, Sidedrawer, Backdrop</div>
        <main className="content">{props.children}</main>
        </Aux>
    )
}

export default layout;