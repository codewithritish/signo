"use client"
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
export default function ProfilePage(){
    const router=useRouter();
    const logout=async ()=>{
         try {
            axios.get('/api/users/logout');
            console.log('logout successful');
            router.push('/login');
         } catch (error:any) {
            console.log(error.message);
         }
    }
    return(

        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1>Profile Page</h1>
            <hr/>
            <button
              onClick={logout}
              className="bg-green-600 hover:bg-yellow-200 hover:text-black text-white font-bold py-2 px-5 mt-6 rounded-lg transition duration-300 ease-in-out">
              Logout
            </button>
        </div>
    )
}