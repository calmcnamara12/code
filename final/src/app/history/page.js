"use client"
import Nav from "../nav";
import { useEffect, useState } from "react";

export default function History() {

    const obj = JSON.parse(localStorage.getItem("cart"))
    const [cartCourses, setCartCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        if (typeof window !== 'undefined') {
         
          setCartCourses(obj)
          }
          console.log(obj)

          
          setIsLoading(false);
        
        }, []);
    return(
        
        <div>
            {isLoading ?(
            <p>Loading....</p>
        ) : (

            
            
            <div>
                <Nav/>
                {cartCourses.map((item) => 
                <div>
                    <h1> Your Previous Order </h1>
                    
                    <div className="cart">
                    <div className="item-info">
                        <div className="item-details">
                            <h3>{item.product.name}</h3>
                            <p>Price: ${item.product.price}</p>
                        </div>
                
                    </div>
                    </div>
                    
                </div>
            )}
            </div>
        )}
        </div>
    )
}