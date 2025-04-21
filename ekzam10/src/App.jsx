import React,{} from 'react'
import './App.css'
import ProductList from './components/ProductList'
import Cart from './components/Cart'
import Context from './components/Cart'
import CardContext from './components/context'

  // const [count, setCount] = useState(0)
  let initialState = {
    cart:[]
  }
  function App() {
    
  
  function reducer(state.action) {
  switch (action.type) {
    case "Add_Item":
      return{
        ...state
      }
      case "REMOVE_Item":
      return{
        ...state
      }
      case "CLear_Item":
      return{
        ...state
      }
    
  
    default:
      }
  return (
    <div>
      <CardProvider>
        <ProductList/>
        <Cart/>
      </CardProvider>
         </div>
        )}
      export default App()