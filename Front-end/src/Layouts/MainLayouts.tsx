import { Outlet } from "react-router-dom"
import Footer from "../components/Footer/Footer"
import SideBar from "../components/SideBar"


const MainLayouts = () => {
  return (
    
      <>
      <div className=" relative  flex-row w-fit h-screen">
          <div className="flex flex-row">
              <SideBar />

              <div className="w-full bg-red-300 p-4">
                  <Outlet />
              </div>
          </div>
          <Footer />
      </div>
      
    </>
  )
}

export default MainLayouts
