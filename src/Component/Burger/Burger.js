import React from 'react';
import './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient'

const burger=(props)=>{

    let transformedIngredients =Object.keys(props.ingredients).map(igKey =>{
        console.log("----------"+igKey+"----------");

        return [...Array(props.ingredients[igKey])].map((_, i) => {
            return <BurgerIngredient key={igKey+i} type={igKey}/>;
            
            console.log("----------"+i+"----------")
        });

        console.log("----------"+igKey+"----------");   console.log("----------"+transformedIngredients+"----------");
    })
.reduce((arr,el)=>{
        console.log("----------"+arr+"----------");
        console.log("----------"+el+"----------");
        return arr.concat(el)
    }, []);

    if (transformedIngredients.length===0){
        transformedIngredients =<p>Please add ingredients!</p>
    }
    
    return(
        <div className="Burger">
            <BurgerIngredient type="bread-top"/>
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom"/>
        </div>
    )
}

export default burger;