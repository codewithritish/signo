"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import {useRouter} from "next/navigation";
import axios from "axios";
import { toast } from "react-hot-toast";


export default function SignUpPage(){
      const router=useRouter();

      const[user,setUser]=React.useState({
        email:"",
        password:"",
        username:"",
      })
       const [buttonDisabled,setButtonDisabled]=React.useState(false);
       const [loading,setLoading]=React.useState(false);
       
      
      
       const onSignup=async()=>{
         try {
          setLoading(true);
          const response=await axios.post("/api/users/signup",user);
          console.log("signup success",response.data);
          router.push("/login");
         } catch (error) {
          console.log("Signup failed",error)
          //toast.error(error.message)
         }finally{
          setLoading(false);
         }
      }

     useEffect(()=>{
          if(user.email.length>0 && user.password.length>0 && user.username.length>0){
            setButtonDisabled(false);
          }else{
            setButtonDisabled(true);
          }
     },[user])









    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2 ">
            <h1>{loading ? "Processing" : "Signup"
            }</h1>
            <hr/>
            <label className="block text-sm font-bold text-white mb-1 w-1/3" htmlFor="username">username</label>
            <input
            className="block w-1/3 px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 text-black font-bold sm:text-sm "
             id="username" 
             type="text"
             value={user.username}
             onChange={(e)=>setUser({...user,username:e.target.value})}
             placeholder="username"
             
             />
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
              onClick={onSignup}
              className="bg-green-600 hover:bg-yellow-200 hover:text-black text-white font-bold py-2 px-5 mt-6 rounded-lg transition duration-300 ease-in-out">
              {buttonDisabled ? "No signup":"Signup"}
            </button>
            <Link className="mt-3 bg-blue-500 p-2 rounded-lg font-bold hover:bg-blue-800 transition duration-300 ease-in-out" href="/login">login page</Link>

           
        </div>
    )
}