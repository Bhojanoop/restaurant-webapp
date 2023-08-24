import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Slide, toast, ToastContainer } from "react-toastify";
import { setErrorMessageAction } from "../../redux/action/message/messageAction";


function ErrorToaster({ message}) {
  const dispatch=useDispatch();

  useEffect(() => {
    if(message!=='')
    {toast.error(message, {
      theme: "dark",
      autoClose: 800,
      transition: Slide,
      hideProgressBar: true,
      position: "bottom-left",
      onClose:()=>dispatch(setErrorMessageAction({message:''}))
    });}

  }, [message]);
  
  return (
    <div>
      <ToastContainer />
    </div>
  );
}

export default ErrorToaster;