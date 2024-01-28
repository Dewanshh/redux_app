import { uiActions } from "./uiSlice";
import{cartActions} from './cartSlice'
export const fetchData=()=>{
    return async(dispatch)=>{
        const fetchHandler=async()=>{
            const res=await fetch("https://react-blog-157b8-default-rtdb.firebaseio.com/cartItems.json");
            const data=await res.json();
            return data;
        }

        try{
            const cartData=await fetchHandler();
            dispatch(cartActions.replaceData(cartData));
        }catch(er){ dispatch(uiActions.showNotification({message:"Error",type:"Success",open:true}))}
    }
}
export const sendCartData=(cart)=>{
    return async (dispatch)=>{
        dispatch(uiActions.showNotification({message:"Sending Request",type:"Success",open:true}))
        const sendRequest=async ()=>{
            // send state sending request
            const res=await fetch("https://react-blog-157b8-default-rtdb.firebaseio.com/cartItems.json",
            {
              method:"PUT",
              body:JSON.stringify(cart)
            });
            const data=await res.json();
            // send state as request is successfull
            dispatch(uiActions.showNotification({message:"Succesfull",type:"Success",open:true}))
      
          };
          try{
            await sendRequest();
          } catch(err){
            // Send State as error
            dispatch(uiActions.showNotification({message:"Error",type:"Success",open:true}))
          }
    }
}