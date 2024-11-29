
import React from 'react';
import Link from 'next/link'

function UserCartComponent({
    cartCourses,
    deleteCourseFromCartFunction,
    totalAmountCalculationFunction,
    setCartCourses,
    needbutton,
})



{
return (
<div className={`cart ${cartCourses.length > 0 ? 'active' : ''}`}>
    {console.log(cartCourses)}
    <h2>My Cart</h2>
    {cartCourses.length === 0 ? (
    <p className="empty-cart">Book Store Catalog</p>
    ) : (
<div>
    <ul>
        {cartCourses.map((item) => (
            <li key={item.product.id} className="cart-item">
                <div>
                    <div className="item-info">
                        <div className="item-image">
                            <img src={item.product.image} 
                                alt={item.product.name} />
                        </div>
                        <div className="item-details">
                            <h3>{item.product.name}</h3>
                            <p>Price: ${item.product.price}</p>
                        </div>
                    </div>
                    <div>
                        <div className="item-actions">
                            <button
                                className="remove-button"
                                onClick={() => 
                                deleteCourseFromCartFunction(item.product)}>
                                Remove Product
                            </button>
                            <div className="quantity">
                                <button style={{ margin: "1%" }} 
                                    onClick={(e) => {
                                    setCartCourses((prevCartCourses) => {
                                        const updatedCart = prevCartCourses.map(
                                        (prevItem) =>
                                        prevItem.product.id === item.product.id
                                                ? { ...prevItem, quantity: 
                                                item.quantity + 1 }
                                                : prevItem
                                        );
                                        return updatedCart;
                                    })
                                }}>+</button>
                                <p className='quant'>{item.quantity} </p>
                                <button 
                                    onClick={(e) => {
                                    setCartCourses((prevCartCourses) => {
                                        const updatedCart = prevCartCourses.map(
                                        (prevItem) =>
                                        prevItem.product.id === item.product.id
                                                ? { ...prevItem, quantity:
                                                Math.max(item.quantity - 1, 0) }
                                                : prevItem
                                        );
                                        return updatedCart;
                                    })
                                }}>-</button>
                            </div>
                        </div>
                    </div>
                </div>
            </li>
        ))}
    </ul>
    <div className="checkout-section">
        <div className="checkout-total">
            <p className="total">Total Amount: 
                ${totalAmountCalculationFunction()}
            </p>
        </div>
        {needbutton ? (<button
            className="checkout-button"
            disabled={cartCourses.length === 0 || 
            totalAmountCalculationFunction() === 0}
            
        >
            {localStorage.setItem("cart",JSON.stringify(cartCourses))}
            <Link href="payment"> Proceed to Payment </Link>
            
        </button>) :
        
        <div>
            <button
            className="checkout-button"
            disabled={cartCourses.length === 0 || 
            totalAmountCalculationFunction() === 0}
            
        >{localStorage.setItem("order",JSON.stringify(cartCourses))}
            <Link href="/home"> Submit Payment </Link></button></div>}
        
        </div>
</div>
            )}
</div>
    );
}

export default UserCartComponent;