import React,{useState} from 'react'
import { Link, useNavigate} from 'react-router-dom'
import { BiShowAlt, BiHide } from "react-icons/bi";
import { MdEmail } from "react-icons/md";
import { toast } from "react-hot-toast";
import {FaUserTie} from 'react-icons/fa'
import {BiSolidLockAlt} from 'react-icons/bi'
const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const handleShowPassword = () => {
        setShowPassword((preve) => !preve);
      };
      const [data, setData] = useState({
        name: "",
        email: "",
        password: ""
      });
      const handleOnChange = (e)=>{
        const {name,value}=e.target
        setData((preve)=>{
            return{
                    ...preve,
                    [name] : value
            }})}
            const handleSubmit = async (e) => {
              e.preventDefault();
              
              const { name, email, password } = data;
              
              if (name && email && password) {
                try {
                  const response = await fetch(`${process.env.REACT_APP_SERVER_DORMIN}/register`, {
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
                    // Navigate to the login page
                    navigate('/login');
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
                toast.error('Enter missing fields');
              }
            };
            

  return (
    <div className='mt-4 grow flex items-center justify-around'>
        <div className="mb-64">
        <h1 className='text-4xl text-center mb-4'>Register</h1>
      <form className='max-w-md mx-auto' onSubmit={handleSubmit}>
        <div className="flex items-center w-full border my-1 py-2 px-3 rounded-full">
            <span className=''><FaUserTie/></span>
            <input type='text' name='name' placeholder='John Doe' className='w-full outline-none' value={data.name} onChange={handleOnChange}/>
        </div>
        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'>
              <span>
              <MdEmail className="text-md " />
              </span>
              <input type='email' name='email' placeholder='johndoe@gmail.com' className=' w-full outline-none' value={data.email} onChange={handleOnChange}/>  
         </div>
        <div className='flex items-center w-full border my-1 py-2 px-3 rounded-full'> 
        <span>
          <BiSolidLockAlt/>
        </span>
            <input id='password'  name="password"   type={showPassword ? "text" : "password"} placeholder='*******' className=' w-full outline-none' value={data.password} onChange={handleOnChange}/>   
            <span className="flex text-xl" onClick={handleShowPassword}>
              {showPassword ? <BiShowAlt /> : <BiHide />}
            </span>
            </div>
       
        <button className='primary'>Register</button>
        <p className='mt-4 px-2'>Already Have an Account ? <Link to='/login' className='text-blue-500'>Login</Link> </p>
      </form>
      </div>
    </div>
  )
}

export default Register
