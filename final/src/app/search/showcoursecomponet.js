import React from 'react';

function ShowCourseComponent({ courses, 
    filterCourseFunction, 
    addCourseToCartFunction }) {
    return (
        <div className="product-list">
            {filterCourseFunction.length === 0 ? (
                <p className="no-results">
                    Sorry, No matching Product found.
                </p>
            ) : (
                filterCourseFunction.map((product) => (
                    <div className="product" key={product.id}>
                        <img src={product.image} alt={product.name} />
                        <h2>{product.name}</h2>
                        <h4>{product.description}</h4>
                        <p>Price: ${product.price}</p>
                        <button
                            className="add-to-cart-button"
                            onClick={() => addCourseToCartFunction(product)}
                            
                        >
                            Add to Shopping Cart
                        </button>
                    </div>
                ))
            )}
        </div>
    );
}

export default ShowCourseComponent;