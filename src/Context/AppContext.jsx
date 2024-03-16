import React from "react";
import { useState } from "react";
import { createContext } from "react";

//context created as AppCtx
export const AppCtx=createContext(null);

export default function AppContext({children}){

    //necessary values for the cart
    const productImg="https://photographylife.com/wp-content/uploads/2019/08/iPhone-X.jpg";
    const productName="iPhone X";
    const productDescription="SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...";
    const productRating="4.44";
    const productPrice=899;
    const productDiscount=17.94;
    
    //necessary states for the cart
    const [cartCount,setCartCount]=useState(0);
    const [productStock,setProductStock]=useState(94);
    const [subTotal,setSubTotal]=useState(0);
    const [total,setTotal]=useState(0);
    const [saved,setSaved]=useState(0);
    

    return(
       
        //context values and states is passed
           <AppCtx.Provider 
            value={{
                productImg,
                productName,
                productDescription,
                productRating,
                productPrice,
                productDiscount,
                cartCount,
                setCartCount,
                productStock,
                setProductStock,
                subTotal,
                setSubTotal,
                total,
                setTotal,
                saved,
                setSaved
            }}
           >
            {/* children property used to use the context for all the childrens */}
            {children}
           </AppCtx.Provider>
       
    )
}