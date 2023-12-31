import { useNavigate } from 'react-router-dom';
import StudentLoginImg from '../images/Student-Login-Img.png'
import { IoHome } from "react-icons/io5";
import { useContext, useState } from "react";
import { ContextApi } from "../context/ContextApi";

const StudentLogin = () => {
    const navigate = useNavigate();
    const { setIsLogedIn} = useContext(ContextApi);
    const [formData, setFormData] = useState({ email: "", password: "" });
    
    const handleChange = (event) =>{
        const {name, value} = event.target;
        setFormData((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
        })
    }

    const submitHandler=(event)=>{
        event.preventDefault();
        setIsLogedIn(true);
        navigate('/studentInfo');
        console.log(formData);
    }


    return (
        <div className='flex  justify-between bg-gray-800 items-center'>
            <div className='flex w-[480px] mx-auto  flex-col gap-5'>
                <h1 className='font-bold text-white text-4xl'>Login As Student</h1>
                <div >
                    <form onSubmit={submitHandler} action="" method="get" className='flex flex-col gap-3'>
                        <div className='flex flex-col'>
                            <label htmlFor="email" className='text-white'>Enter Email :<span className='text-red-700'>*</span></label>
                            <input value={formData.email} onChange={handleChange} type="email" name="email" id="email"  className='outline-none border-none bg-white py-2 px-2 rounded-lg' placeholder='Enter Your Email Address' required/>
                        </div>
                        <div className='flex flex-col'>
                            <label htmlFor="pass" className='text-white'>Enter Password :<span className='text-red-700'>*</span></label>
                            <input type="password" id='pass' value={formData.password} onChange={handleChange}  name='password' className='outline-none border-none bg-white py-2 px-2 rounded-lg' placeholder='Enter Password' required/>
                        </div>
                        <button className='bg-yellow-500 py-2 rounded-lg font-sans text-xl font-bold'>Log In</button>
                        <button onClick={()=>navigate('/')} className='bg-yellow-500 py-2 rounded-lg font-sans text-xl font-bold flex justify-center items-center gap-2'>Back to Home <span><IoHome /></span></button>
                    </form>
                </div>
            </div>
            <div>
                <img src={StudentLoginImg} alt="" className='w-[43.7rem]'/>
            </div>
        </div>
    );
}

export default StudentLogin;
