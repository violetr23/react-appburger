import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Button from '../../UI/Button/Button';

class OrderSummary extends Component {

    /*Esta la comprobacion la hicimos para ver cuando este
    componente se actualizaba, y por ello lo convertimos en
    un stateFul Component, solo aclarar que puede ser un 
    stateLess y quitamos este CycleHooks*/
    componentWillUpdate() {
        console.log('[OrderSummary] WillUpdate');
    }
    
    render () {
        const ingredientSummary = Object.keys(this.props.ingredients)
        .map(igKey => {
            return (
              <li key={igKey}>
                  <span style={{textTransform: 'capitalize'}}>{igKey}</span>: {this.props.ingredients[igKey]}
             </li>);
        });

        return (
            <Aux>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p><strong>Total Price: {this.props.price.toFixed(2)}</strong></p>
            <p>Continue to CheckOut?</p>
            <Button btnType="Danger" clicked={this.props.purchaseCancelled}>CANCEL</Button>
            <Button btnType="Success" clicked={this.props.purchaseContinued}>CONTINUE</Button>
        </Aux>
        );
    }
} 

export default OrderSummary;