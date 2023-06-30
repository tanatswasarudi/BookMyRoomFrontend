import React,{useState} from 'react'
import { Link,useNavigate  } from 'react-router-dom'
import { BiShowAlt, BiHide } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { toast } from "react-toastify"
import {BiSolidLockAlt} from 'react-icons/bi'
import {useDispatch, useSelector} from 'react-redux'
import {loginRedux} from '../redux/userSlice'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleShowPassword = () => {
        setShowPassword((preve) => !preve);
      };
      const [data, setData] = useState({
        email: "",
        password: ""
      });
      const userData = useSelector(state => state.user )
      const dispatch = useDispatch()
      const handleOnChange = (e)=>{
        const {name,value}=e.target
        setData((preve)=>{
            return{
                    ...preve,
                    [name] : value
            }})}
            const handleSubmit = async (e) => {
              e.preventDefault();
            
              const { email, password } = data;
            
              if (email && password) {
                try {
                  const response = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/login`, {
                    method: 'POST',
                    headers: {
                      'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                  });
            
                  const responseData = await response.json();
                  if (response.ok) {
                    // If the response was successful (status code 200), show success message
                    toast.success(responseData.message);
                    dispatch(loginRedux(responseData ))
                    // Navigate to the home page
                    navigate('/account');
                    console.log(userData)

                  } else {
                    // If the response was not successful, show error message
                    toast.error(responseData.message);
                    
                  }
                } catch (error) {
                  console.error(error);
                  // Show error message for internal server error
                  toast.error('Internal server error');
                }
              } else {
                // Show error message for missing fields
                toast.error('Enter missing fields');
                alert('Enter missing fields');
              }
            };
            
  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className="mb-64">
        <h1 className='text-4xl text-center mb-4'>Login</h1>
      <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <MdEmail className="text-md " />
              </span>
              <input type='email' name='email' placeholder='johndoe@gmail.com' className=' w-full outline-none'value={data.email} onChange={handleOnChange}/>  
         </div>
        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
        <span>
          <BiSolidLockAlt/>
        </span> 
            <input   type={showPassword ? "text" : "password"} name='password' placeholder='*******' className=' w-full outline-none' value={data.password}onChange={handleOnChange}/>   
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShowAlt /> : <BiHide />}
            </span>
            </div>
       
        <button className='primary'>Login</button>
        <p className='mt-4 px-2'>Don't Have an Account ? <Link to='/register' className='text-blue-500'>Register</Link> </p>
      </form>
      </div>
    </div>
  )
}

export default Login
