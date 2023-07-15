export default function UserProfile({params}:any){
    return(
        <div className="flex flex-col items-center justify-center min-h-screen py-2">
            <h1 className="text-4xl">Profile
              <span className=" ml-rounded p-2 rounded ml-2 bg-orange-500">
                {params.id}
                </span>
            </h1>
        </div>
    )
}