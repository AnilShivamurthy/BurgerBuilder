import React from 'react';
import './Modal.css';
import Aup from '../../../Hoc/Aup';
import BackDrop from '../BackDrop/BackDrop';

const modal =(props)=>(
    <Aup>
     <BackDrop show={props.show} clicked={props.modalClosed}/>   
    <div className="Modal" style={{ display : props.show ? 'block' : 'none',
                                    opacity : props.show ? '1': '0',
                                    transition: 'all 0.3s ease-out' }}>
        {props.children}
    </div>
    </Aup>
)

export default modal;