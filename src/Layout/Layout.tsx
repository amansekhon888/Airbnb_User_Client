import { Link, Outlet } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import appstore from '../assets/images/appstore.png'
// import playstore from '../assets/images/playstore.png'
// import logo from '../assets/icons/logo.png'
import Header from '../components/Header/Header.tsx'
import Sidebar from '../components/Sidebar/Sidebar.tsx'
import { logo } from '../assets/images/index.ts'

const UserPanel = () => {
  const [isCollapse, setIsCollapse] = useState(false)
  const [isSidebarShow, setSideBarShow] = useState(false)

  const handleToggleSideBar = () => {
    setSideBarShow(!isSidebarShow)
  }

  const [isSmallWidth, setIsSmallWidth] = useState(false)

  useEffect(() => {
    const handleResize = () => {
      setIsSmallWidth(window.innerWidth < 600);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [])

  return (
    <div>
      {isSmallWidth ?
        <div className='min-h-screen flex items-center justify-center'>
          <div className='flex items-center justify-center'>
            <div>
              <div className='mb-10'>
                <Link to="/">
                  <img src={logo} className='h-10 mx-auto' />
                </Link>
              </div>
              <p className='text-xl font-bold'>For Better Experience Download Frankpoter App</p>
              <div className='mt-6 flex items-center justify-center gap-4'>
                {/* <Link to="/">
                  <img src={playstore} className='h-10' />
                </Link>
                <Link to="/">
                  <img src={appstore} className='h-10' />
                </Link> */}
              </div>
            </div>
          </div>
        </div>
        :
        <div className='flex h-screen max-w-[1800px] mx-auto overflow-x-hidden'>
          <div
            className={`h-screen duration-300 w-[230px] fixed z-[30] md:static ${isCollapse ? 'md:-ml-[230px]' : 'm-0'
              } ${isSidebarShow ? "translate-x-0" : "-translate-x-full md:translate-x-0"}`}>
            <Sidebar />
          </div>
          <div className={`fixed z-20 w-full h-full left-0 top-0 bg-black bg-opacity-45 md:hidden ${!isSidebarShow ? "opacity-0 invisible" : "opacity-100 visible"}`} onClick={handleToggleSideBar} ></div>
          <div
            className={`border-x border-primary duration-300 ${isCollapse ? "w-full" : "w-full md:w-[calc(100%_-_230px)]"}`}>
            <div>
              <Header isCollapse={isCollapse} setIsCollapse={setIsCollapse} isSidebarShow={isSidebarShow} setSideBarShow={setSideBarShow} />
            </div>
            <div className='px-4 md:px-6 h-[calc(100vh_-_102px)] overflow-auto py-4 bg-[#F4F4F4]'>
              <Outlet />
            </div>
            <footer className='border-t border-x border-border1 py-1 px-4 md:px-6 bg-gray-100'>
              <div>
                <p className=''>
                  <span>Copyright © {new Date().getFullYear()} <Link to="/" className='text-primary'>Frank Porter</Link>. All rights reserved</span>
                </p>
              </div>
            </footer>
          </div>
        </div>
      }
    </div >
  )
}

export default UserPanel
