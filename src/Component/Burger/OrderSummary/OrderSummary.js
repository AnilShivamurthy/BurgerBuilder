import React from "react";
import Aup from '../../../Hoc/Aup';

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
        <ul>
            {ingredientSummary}
        </ul>
        <p>Continue to checkout?</p>
    </Aup>
   ) 
}
export default OrderSummary;