"use client"
import Nav from "../nav";
import { useEffect, useState } from "react";
import Credit from "./card";
import { Card } from "@material-ui/core";

export default function Payment() {
    const obj = JSON.parse(localStorage.getItem("cart"))
    //const [item1,setItem1] = useState({name:"string"});
    var item1 = {}
    var item2 = {}
    var item3 = {}
    const [item1name,setitem1name] = useState("")
    const [item1quantity,setitem1quantity] = useState("")
    const [item1price,setitem1price] = useState("")


    const [isLoading, setIsLoading] = useState(true);
      useEffect(() => {
        if (typeof window !== 'undefined') {
            
          if(obj[0] !== 'undefined'){
            item1 =( obj[0])
            setitem1name(item1.product.name);
            setitem1price(item1.product.price);
            setitem1quantity(item1.quantity);
          }
          if(obj[1] !== 'undefined'){
            item2 = (obj[1])
          }
          if(obj[2] !== 'undefined'){
            item3 = (obj[2])
          }
          
          }
          console.log(item1.product.price)
          
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
            <div>
                <h1> Your Cart </h1>
                <li>{item1name} - {item1quantity} - {item1quantity * item1price}</li>
            </div>
        </Card>

        <Credit/>
    
    </div>
            
        )}

    </div>
        
)

}