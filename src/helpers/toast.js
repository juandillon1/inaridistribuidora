import { toast } from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
export const toastMsg = (mensaje, tipo) => {
    switch(tipo){
        case "success":
            return toast.success(mensaje, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        case "error":
            return toast.error(mensaje, {
                position: "bottom-center",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        case "warning":
            return toast.warning(mensaje, {
                position: "bottom-center",
                hideProgressBar: false,
                closeOnClick: true,
                autoClose: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });

        case "cerrar":
            return toast.dismiss();
        default:
            return;
    }
}