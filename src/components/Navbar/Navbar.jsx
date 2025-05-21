import React from 'react'
import Logo from "../../assets/Logo.png"

const NavLinks = [
    {
      id: 1,
      title: "About",
      link: "#",
    },
    {
      id: 2,
      title: "Services",
      link: "#",
    },
    {
      id: 3,
      title: "Project",
      link: "#",
    },
    {
      id: 4,
      title: "Contact",
      link: "#",
    },
  ];

const Navbar = () => {
  return (
   <>
   <div className='container py-4 flex justify-between items-center'>
    <div className='flex items-center gap-3'>
    <img src={Logo} alt="logo" className='w-10' />
    <span className='text-2xl font-bold'>Interior</span>
    </div>
    <div className='hidden md:block'>
        {NavLinks.map((link) =>{
            return(
                <a href={link.link} className='mx-4'>
                    {link.title}
                </a>
            )
        })}
    </div>
    <div>
        <button className='text-sm lg:text-base border-[1px] border-black px-4 py-2 shadow-[5px_5px_0_0_#000] hover:shadow-none transition-all duration-300'>Try for free</button>
    </div>
   </div>
   </>
  )
}

export default Navbar
