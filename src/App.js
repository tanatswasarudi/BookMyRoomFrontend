import { Outlet } from "react-router-dom"; 
import "./App.css";
import Header from './Components/Header';
import { ToastContainer,toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useEffect } from 'react';
import { setDataProduct } from './redux/productSlide';
import { useDispatch} from 'react-redux';
import Footer from './Components/Footer'


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/places`);
        // Check if the response was successful
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data);
        dispatch(setDataProduct(data));
      } catch (error) {
        // Handle the error
        console.error('Error:', error); 
      }
    })();
  }, []);

  const toastOptions = {
    position: toast.POSITION.TOP_RIGHT,
    autoClose: 3000,
    hideProgressBar: true,
    closeButton: false,
    // Add custom styling for the toast messages
    toastStyle: {
      fontSize: '14px',
      fontWeight: 'bold',
      borderRadius: '4px',
      // Add any other styles you want
    },
    // Add custom class name for the toast container
    toastClassName: 'custom-toast-container',
  };
  return (
  <div >
    <Header/>
    <main className="min-h-screen pt-20" >
      <Outlet/>
     <ToastContainer{...toastOptions} /> 
    <Footer/> 
    </main>     
    
  </div>
  );
}

export default App;
