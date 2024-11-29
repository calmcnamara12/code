"use client"
import Nav from "../nav";
import { useEffect, useState } from "react";
import Credit from "./card";
import { Card, CardContent } from "@material-ui/core";
import UserCartComponent from "../search/usercartcomponent";

export default function Payment() {

    
    const obj = JSON.parse(localStorage.getItem("cart"))
    const [cartCourses, setCartCourses] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    


    const deleteCourseFromCartFunction = (GFGCourse) => {
        const updatedCart = cartCourses
                            .filter(item => item.product.id !== GFGCourse.id);
        setCartCourses(updatedCart);
    };

    const totalAmountCalculationFunction = () => {
        return cartCourses
            .reduce((total, item) => 
                        total + item.product.price * item.quantity, 0);
    };
      useEffect(() => {
        if (typeof window !== 'undefined') {
         
          setCartCourses(obj)
          }
          console.log(cartCourses)

          
          setIsLoading(false);
        
        }, []);
return (
    
    <div>
        {isLoading ?(
            <p>Loading....</p>
        ) : (
            <div>
                <Nav/>
        <Card>
           
        </Card>
        
        <UserCartComponent
        cartCourses={cartCourses}
        deleteCourseFromCartFunction={deleteCourseFromCartFunction}
                totalAmountCalculationFunction={
                    totalAmountCalculationFunction}
                    needbutton={false}/>

        <Credit/>
    
    </div>
            
        )}

    </div>
        
)

}