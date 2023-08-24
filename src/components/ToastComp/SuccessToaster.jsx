import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Slide, toast, ToastContainer } from "react-toastify";
import { setSuccessMessageAction } from "../../redux/action/message/messageAction";


const SuccessToaster = ({message}) => {
  const dispatch=useDispatch();

    useEffect(() => {
      if(message!=='')
        {toast.success(message, {
          theme: "dark",
          autoClose: 700,
          transition: Slide,
          hideProgressBar: true,
          position: "bottom-left",
          onClose:()=>dispatch(setSuccessMessageAction({message:''}))
        });
      }
      }, [message]);
    
      return (
        <div>
          <ToastContainer />
        </div>
      );
    }

export default SuccessToaster