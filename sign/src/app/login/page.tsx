"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import toast from "react-hot-toast";


export default function LoginPage(){
      const router=useRouter();
      const[user,setUser]=React.useState({
        email:"",
        password:"",
        
      })
      const [buttonDisabled,setButtonDisabled]=React.useState(false);
       const [loading,setLoading]=React.useState(false);
    
      const onLogin=async()=>{
        try {
          setLoading(true);
          const response=await axios.post("/api/users/login",user);
          router.push("/profile");
          console.log("Login success",response.data);
          toast.success("Login success");
          //window.location.href='/profile';

         } catch (error:any) {
          console.log("Login failed",error)
          //router.push("/profile");
          toast.error(error.message)
         }finally{
          setLoading(false);
         }
      }

      useEffect(()=>{
        if(user.email.length>0 && user.password.length>0){
          setButtonDisabled(false);
        }else{
          setButtonDisabled(true);
        }
       },[user])












    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1>{loading ? "Processing":"Login"}</h1>
            <hr/>
            
             <label className="block text-sm font-bold text-white mb-1 mt-4 w-1/3" htmlFor="email">email</label>
            <input
             className="block w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm  text-black font-bold"
             id="email" 
             type="text"
             value={user.email}
             onChange={(e)=>setUser({...user,email:e.target.value})}
             placeholder="email"
             
             />
             <label className="block text-sm font-bold text-white mb-1 mt-4 w-1/3"
             htmlFor="password">password</label>
            <input
             className="block w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm bg-black "
             id="password" 
             type="password"
             value={user.password}
             onChange={(e)=>setUser({...user,password:e.target.value})}
             placeholder="password"
             
             />
             <button
              onClick={onLogin}
              className="bg-green-600 hover:bg-yellow-200 hover:text-black text-white font-bold py-2 px-5 mt-6 rounded-lg transition duration-300 ease-in-out">
             {buttonDisabled ? "No Login":"Login"}
            </button>
            <Link className="mt-3 bg-blue-500 p-2 rounded-lg font-bold hover:bg-blue-800 transition duration-300 ease-in-out" href="/signup">Sign Up page</Link>
            

           
        </div>
    )
}