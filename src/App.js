import React, { useEffect } from "react";
import "./App.css";
import Auth from "./components/Auth";
import Layout from "./components/Layout";
import { useSelector,useDispatch} from "react-redux";
import Notifications from './components/Notifications'
import {uiActions} from './store/uiSlice'
import {sendCartData,fetchData} from './store/cart-actions'
let isFirstRender=true;
function App() {
  const cart=useSelector(state=>state.cart);
  const isLoggedIn=useSelector(state=>state.auth.isLoggedIn);
  const notifications=useSelector(state=>state.ui.notifications);
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(fetchData())
  },[dispatch])
  useEffect(()=>{
    if(isFirstRender)
    {
      isFirstRender=!isFirstRender;
      return;
    }
    // const sendRequest=async ()=>{
    //   // send state sending request
    //   dispatch(uiActions.showNotification({message:"Sending Request",type:"Success",open:true}))
    //   const res=await fetch("https://react-blog-157b8-default-rtdb.firebaseio.com/cartItems.json",
    //   {
    //     method:"PUT",
    //     body:JSON.stringify(cart)
    //   });
    //   const data=await res.json();
    //   // send state as request is successfull
    //   dispatch(uiActions.showNotification({message:"Succesfull",type:"Success",open:true}))

// All comment out code is without using redux thunk. But it is recommended that 
// redux thunk should be use because it provides all code in redux and makes componenets clean


    // };
    // sendRequest().catch(err=>{
    //   // Send State as error
    //   dispatch(uiActions.showNotification({message:"Error",type:"Success",open:true}))
    // })
    dispatch(sendCartData(cart));
  },[cart,dispatch])  
  return (
    <div className="App">
{    notifications&&<Notifications type="Success" message={notifications.message} />
}
      {isLoggedIn?<Layout />:<Auth /> }
    </div>
  );
}

export default App;
