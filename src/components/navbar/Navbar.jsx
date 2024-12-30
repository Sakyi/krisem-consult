import React, { useEffect, useState } from 'react'
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from 'react-icons/bi'
import { FaCaretDown } from 'react-icons/fa'
import { HiMenuAlt1, HiMenuAlt3 } from 'react-icons/hi';
import ResponsiveMenu from './ResponsiveMenu';

const Navbar = () => {
    // Check the local storage or user's preference for the initial theme
    const element = document.documentElement;
    const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const [theme, setTheme] = useState(
      localStorage.getItem("theme") ? localStorage.getItem("theme") : "system",
    );
    const [showMenu, setShowMenu] = useState(false);
    function onWindowMatch() {
        if (
          localStorage.theme === "dark" ||
          (!("theme" in localStorage) && darkQuery?.matches)
        ) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
      }
      
    onWindowMatch();
   
    useEffect(() => {
        switch (theme) {
          case "dark":
            {
              element.classList.add("dark");
              localStorage.setItem("theme", "dark");
              console.log("dark theme");
            }
            break;
          case "light":
            {
              element.classList.remove("dark");
              localStorage.setItem("theme", "light");
              console.log("light theme");
            }
            break;
          default: {
            localStorage.removeItem("theme");
            onWindowMatch();
            console.log("system theme");
          }
        }
      }, [theme]);
    
      darkQuery.addEventListener("change", onWindowMatch);
 // Function to handle theme change
 const handleThemeChange = (selectedTheme) => {
    if (selectedTheme === "dark" || selectedTheme === "light") {
      setTheme(selectedTheme);
    }
  };

//   Function to handle menu toggling
const handleMenuToggle = () => {
    setShowMenu(!showMenu);
}
  return (
    <>
    <header className="fixed top-0 left-0 right-0 z-[99] bg-navbar text-white shadow-lg border-b-[1px] border-primary/50"> 
        <nav className="container flex items-center justify-between h-[70px] py-2 px-2" >
            {/* Logo Section */}
            <div className='text-2xl md:text-3xl text-white'>
                <a href="#">KRI<span className='inline-block font-bold text-secondary'>SEM</span></a>
            </div>
            {/* Desktop menu section */}
            <div className='hidden md:block'>
                <ul className='flex items-center gap-10'> 
                    <li className='group relative cursor-pointer'> 
                        <a href="#" className='flex items-center gap-[2px] h-[72px]'>Home{" "} 
                            <span><FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/></span>
                        </a>
                        {/* dropdown section */}
                        <div className='absolute -left-9 z-[999999] hidden w-[150px] bg-white shadow-md p-2
                         text-black rounded-md group-hover:block '>
                            <ul className='space-y-3'>
                                <li className='p-1 hover:bg-blue-200'>Services</li>
                                <li className='p-1 hover:bg-blue-200'>About us</li>
                                <li className='p-1 hover:bg-blue-200'>Privacy Policy</li>
                            </ul>
                        </div>

                    </li>
                    <li className='group cursor-pointer'> 
                    <a href="#" className='flex items-center gap-[2px] h-[72px]'>Services{" "} 
                            <span><FaCaretDown className="transition-all duration-200 group-hover:rotate-180"/></span>
                        </a>
                        {/* dropdown full width section */} 
                        <div className='absolute -left-0 z-[999999] hidden w-full rounded-b-3xl bg-white
                         text-black group-hover:block shadow-md p-2'>
                            <div className='grid grid-cols-3 gap-5'>
                                <div className='overflow-hidden'>
                                    <img src="https://images.pexels.com/photos/2219024/pexels-photo-2219024.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="Not Found" className='max-h-[300px] w-full rounded-b-3xl object-fill' />
                                </div>
                                <div className="col-span-2">
                    <h1 className="pb-3 text-xl font-semibold">Best Selling</h1>
                    <p className="text-sm text-slate-600">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                      Aspernatur exercitationem delectus iusto animi aperiam
                      deleniti reprehenderit doloribus, numquam corporis quae.
                    </p>
                    <div className="grid grid-cols-3 ">
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Development
                        </h1>
                        <li className="cursor-pointer text-black/80 hover:text-secondary">
                          Web development
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-secondary">
                          IOS App Development
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-secondary">
                          App Development
                        </li>
                      </ul>
                      <ul className="mt-3 flex flex-col gap-2">
                        <h1 className="pb-1 text-xl font-semibold">
                          Other Services
                        </h1>
                        <li className="cursor-pointer text-black/80 hover:text-secondary">
                          Cloud Services
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-secondary">
                          Mobile App
                        </li>
                        <li className="cursor-pointer text-black/80 hover:text-secondary">
                          App Development
                        </li>
                      </ul>
                      <div>
                        <img src="https://picsum.photos/180" alt="no image" />
                      </div>
                    </div>
                  </div>
                            </div>
                        </div>
                    </li>
                    <li>Contact us</li>
                    <li> 
                        <div className='flex items-center gap-4'>
                            <div>
                                <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 
                                text-white bg-secondary hover:bg-primary/90"/>
                            </div>
                            <div>
                                <p>Call us on</p>
                                <p><a href="tel:+233 549817061">+233 549 87061</a>
                                </p>
                            </div>
                        </div> 
                    </li>   
                    {/* Light and Dark Mode Switcher */}
                    {
                        theme === "dark" ? (
                            <BiSolidSun onClick={() => handleThemeChange("light")} className="text-2xl" / >
                        ) : (
                            <BiSolidMoon   onClick={() => handleThemeChange("dark")}
                            className="text-2xl"/>)
                    }

                </ul>
            </div>
            {/* Mobile menu section Header */}
            <div className='flex items-center gap-4 md:hidden'>
             {/* Light and Dark Mode Switcher for mobile view */}
             {
                        theme === "dark" ? (
                            <BiSolidSun onClick={() => handleThemeChange("light")} className="text-3xl" / >
                        ) : (
                            <BiSolidMoon   onClick={() => handleThemeChange("dark")}
                            className="text-3xl"/>)
                    }
                    {/* Hamburger menu */}
                    {showMenu ? (
                        <HiMenuAlt1 onClick={handleMenuToggle} className="cursor-pointer transition-all text-3xl" />
                    ) : (
                        <HiMenuAlt3 onClick={handleMenuToggle} className="cursor-pointer transition-all text-3xl" />
                    )}
            </div>
        </nav> 
  </header>
    {/* Mobile menu section */}
    <ResponsiveMenu showMenu={showMenu} />
  </>

  )
}

export default Navbar