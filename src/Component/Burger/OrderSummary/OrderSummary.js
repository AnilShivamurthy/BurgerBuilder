import React from "react";
import Aup from '../../../Hoc/Aup';
import Button from '../../../Component/UI/Button/Button'


const OrderSummary=(props)=>{
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey => {
            return( 
            <li key={igKey}>
                <span style={{textTransform:"capitalize"}}>{igKey}</span>: {props.ingredients[igKey]}
            </li>)
        });
   return(
    <Aup>
        <h3>Your Order </h3>
        <p>A delicious burger with the following ingredients:</p>
        <ul style={{listStyle:'none'}}>
            {ingredientSummary}
        </ul>
        <p>Total Price : <strong>{props.price.toFixed(2)}</strong></p>
        <p>Continue to checkout?</p>
        <Button  clicked={props.cancel}>CANCEL</Button>
        <Button clicked={props.continue}>CONTINUE</Button>
    </Aup>
   ) 
}
export default OrderSummary;