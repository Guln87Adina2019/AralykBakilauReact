import React, { useContext, useState } from 'react'
import CardContext from './components'
   let shop=[
    {id:1,name:"Book",price:2000},
    {id:2,name:"Laptop",price:150000},
    {id:3,name:"Iphone",price:12000}
   ]
//   console.log(Shop.map((fr.)=>{

//   }));
  
export default function ProductList() {
    //  let [card,user]= useState('')

    let {dispatch, state}=useContext (CardContext) 

  return (
   <div>

       <h1>Cart manager</h1> 
    </div>

    <h3>Products</h3>
    <div>
     {Shop.map(zat)=>{
        <> 
        <h3>{zat.name}-{zat.price}T</h3>
        <button onClick={dispatch({type:"ADD_ITEM"payload:zat.id})}>Add to Card</button>
</>
  ))
}</div>
</div>
</div>
)