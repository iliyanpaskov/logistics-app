import { Flip, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const successNotification = (message) => {
    toast.success((message), {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Flip,
        theme: "dark",
    });
}

export const errorNotification = (message) => {
    toast.error((message), {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        transition: Flip,
        theme: "dark",
        });
}