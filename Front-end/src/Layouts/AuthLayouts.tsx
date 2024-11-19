import { Outlet } from "react-router-dom"


const AuthLayouts = () => {
  return (
    <div className="h-screen flex items-center justify-center ">
        <div className="w-full max-w-md bg-white p-6 rounded-md shadow-md">
        <Outlet /> {/* Renders child routes */}
      </div>
      
    </div>
  )
}

export default AuthLayouts
