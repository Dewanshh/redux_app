import React from 'react'
import { useSelector } from 'react-redux'
import {Alert} from '@mui/material'
import { useDispatch } from 'react-redux';
import { uiActions } from '../store/uiSlice';
function Notifications({message,type}) {
  const dispatch=useDispatch();
  const notification=useSelector(state=>state.ui.notifications);
  const handleClose=()=>{
    dispatch(uiActions.showNotification({open:false}));
  }
  return (
    <div>
    {notification.open&&<Alert onClose={handleClose}>{message}</Alert>}
    </div>
  )
}

export default Notifications