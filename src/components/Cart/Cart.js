import React from 'react';
import { Link } from 'react-router-dom';
const Cart = (props) => {
    const cart = props.cart;
    // console.log(cart);
    //const totalPrice = cart.reduce((total,prd) => total+prd.price,0);
    let total = 0;
    for(let i=0;i<cart.length;i++){
        const product = cart[i];
        total = total+product.price;
    }
    let shipping = 0;
    if(total >35){
        shipping = 0;
    }
    else if(total>25){
        shipping=4.99;
    }
    else if(total>0){
        shipping=12.99;
    }
    

    const tax = Math.round(total/10);
    const grandTotal = (total+tax+shipping).toFixed(2);
    const formateNumber = num =>{
        const precision = num.toFixed(2);
        return Number(precision);
    }
    return (
        <div>
            <h4 className='text-primary'>Order Summary</h4>
            <p>Items Ordered: {cart.length}</p>
            <p>Product Price:{formateNumber(total)}</p>
            <p><small> Shipping Cost:{shipping}</small></p>
            <p><small>Tax + Vat :{tax}</small></p>
            <p>Total Price:{grandTotal}</p>
            <br />
            <Link to="/review">
            <button className="main-button">Review Order</button>
            </Link>
        </div>
    );
};

export default Cart;