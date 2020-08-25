import React from 'react';
import Aup from '../../Hoc/Aup';
import './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';

const layout =(props)=>{
    return(
        <Aup>
            <Toolbar/>
            <main className="content">{props.children}</main>
        </Aup>
    )
}

export default layout;