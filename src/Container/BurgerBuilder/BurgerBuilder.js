import React, {Component} from 'react';
import Aux from '../../Hoc/Aux';
import Burger from '../../Component/Burger/Burger';
import BuildControls from '../../Component/Burger/BuildControls/BuildControls';
import Modal from '../../Component/UI/Modal/Modal';
import OrderSummary from '../../Component/Burger/OrderSummary/OrderSummary';

const INGREDIENTS_PRICES ={
    salad: 0.5,
    bacon: 0.7,
    cheese: 0.4,
    meat: 1.3,
   
};

class BurgerBuilder extends Component{
    state={
        ingredients :{
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0
        },
        totalPrice: 4,
        purchasable: false
    }

    updatePurchaseState(ingredients){
        const sum= Object.keys(ingredients)
        .map(igkey=>{
            return ingredients[igkey];
        })
        .reduce((sum, el)=>{
            return sum +el;
        }, 0);
        
        this.setState({purchasable: sum > 0 })

    }



    addIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        // console.log(oldCount);
        const updatedCount =oldCount + 1;
        // console.log(updatedCount);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceAddition = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    }

    removeIngredientHandler=(type)=>{
        const oldCount = this.state.ingredients[type];
        // console.log(oldCount);
        if (oldCount <= 0){
            return;
        }
        const updatedCount =oldCount - 1;
        // console.log(updatedCount);
        const updatedIngredients = {
            ...this.state.ingredients
        };
        updatedIngredients[type] = updatedCount;

        const priceDeduction = INGREDIENTS_PRICES[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction ;
        
        this.setState({
            totalPrice: newPrice, ingredients: updatedIngredients
        })
        this.updatePurchaseState(updatedIngredients);
    } 

    render(){
        const disabledInfo={
            ...this.state.ingredients
        }
         for (let key in disabledInfo){
             disabledInfo[key] =disabledInfo[key] <= 0
         }
        return(
            <Aux>
                <Modal>
                    <OrderSummary ingredients={this.state.ingredients} />
                </Modal>
                <Burger ingredients={this.state.ingredients}/>
                <BuildControls
                ingredientsAdded={this.addIngredientHandler}
                ingredientsRemoved={this.removeIngredientHandler}
                disabled={disabledInfo}
                purchasable={this.state.purchasable}
                price={this.state.totalPrice}/>
            </Aux>   

        )
    }
}

export default BurgerBuilder;