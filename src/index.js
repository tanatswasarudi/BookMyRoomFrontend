import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,Route,createRoutesFromElements,RouterProvider } from 'react-router-dom';
import { store } from "./redux/index";
import { Provider } from "react-redux";
import Login from './pages/Login';
import IndexPage from './pages/IndexPage';
import Register from './pages/Register'; 
import AccountPage from './pages/AccountPage';
import PlacesPage from './pages/PlacesPage';
import Booking from "./pages/Booking";
import Places from './pages/places';
 
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='' element={<App/>}>
    <Route index element={<IndexPage/>}/>
    <Route path='login' element={<Login/>}/>
    <Route path='register' element={<Register/>}/>
    <Route path='/account/:subpage?' element={<AccountPage/>}/> 
    <Route path='placespage' element={<PlacesPage/>}/>
    <Route path='/places/:id' element={<Places/>}/>
    <Route path='/account/:id' element={<AccountPage/>}/>
    <Route path="/booking/:filterby" element={<Booking />} />
    </Route>
  )
) 



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <RouterProvider router={router} />
</Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
