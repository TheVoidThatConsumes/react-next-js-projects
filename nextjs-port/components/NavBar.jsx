import React, {useState} from 'react'
import Image from 'next/image'
import Link from 'next/link';
import {AiOutlineClose, AiOutlineMenu} from 'react-icons/ai'
import {FaDiscord, FaGithub, FaLinkedinIn, FaMailBulk, FaTwitter} from 'react-icons/fa'

const NavBar = () => {

  const [nav, setNav] = useState(false)
  const handleNav = () => {
    setNav(!nav)
  }

  return (
    <div className='fixed w-full h-20 shadow-xl z-[100]'>
        <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
            <Image src="/yashi.png" alt="/" width={'65'} height={'65'} />

            <div>
                <ul className='hidden md:flex flex-row'>
                    <Link href={'/'}>
                      <li className='ml-10 text-sm uppercase hover:border-b'>Home</li>
                    </Link>

                    <Link href={'/'}>
                      <li className='ml-10 text-sm uppercase hover:border-b'>About</li>
                    </Link>

                    <Link href={'/'}>
                      <li className='ml-10 text-sm uppercase hover:border-b'>Stacks</li>
                    </Link>

                    <Link href={'/'}>
                      <li className='ml-10 text-sm uppercase hover:border-b'>Projects</li>
                    </Link>

                    <Link href={'/'}>
                      <li className='ml-10 text-sm uppercase hover:border-b'>Contact</li>
                    </Link>
                </ul>

                <div className='md:hidden' onClick={handleNav}>
                  <AiOutlineMenu size={'25'} className='cursor-pointer'/>
                </div>
            </div>
        </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
          <div className={
            nav 
              ? 'md:hidden fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' 
              : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
          }>

          <div>
            <div className='flex w-full items-start justify-center relative'>
              <Image src={'/yashi.png'} alt='/' width={'125'} height={'125'}className='mt-16 rounded-full border border-black'/>
              <div className='rounded-full shadow-lg p-2 flex absolute top-0 right-0' onClick={handleNav}>
                <AiOutlineClose size={25} className='cursor-pointer'/>
              </div>
            </div> 

            <div className='border-b border-gray-300 my-4 py-1'>
              <p className='italic text-center mx-2'>"Whatever you imagine, Yashi brings to life."</p>
            </div>
          </div>

          <div className='py-4 flex flex-col'>
            <ul className='uppercase'>
              <Link href='/'>
                <li className='py-4 text-sm'>Home</li>
              </Link>

              <Link href='/'>
                <li className='py-4 text-sm'>About</li>
              </Link>

              <Link href='/'>
                <li className='py-4 text-sm'>Stacks</li>
              </Link>

              <Link href='/'>
                <li className='py-4 text-sm'>Projects</li>
              </Link>

              <Link href='/'>
                <li className='py-4 text-sm'>Contact</li>
              </Link>
            </ul>

            <div className='pt-20'>
              <p className='uppercase tracking-widest text-neutral-500 text-center'>Let's Connect.</p>

              <div className='flex flex-row justify-evenly items-center mt-2'> 
                <div className='rounded-full shadow p-2 cursor-pointer hover:scale-105 hover:shadow-lg ease-in duration-300'>
                  <FaGithub />
                </div>

                <div className='rounded-full shadow p-2 cursor-pointer hover:scale-105 hover:shadow-lg ease-in duration-300'>
                  <FaLinkedinIn />
                </div>

                <div className='rounded-full shadow p-2 cursor-pointer hover:scale-105 hover:shadow-lg ease-in duration-300'>
                  <FaTwitter />
                </div>

                <div className='rounded-full shadow p-2 cursor-pointer hover:scale-105 hover:shadow-lg ease-in duration-300'>
                  <FaDiscord />
                </div>

                <div className='rounded-full shadow p-2 cursor-pointer hover:scale-105 hover:shadow-lg ease-in duration-300'>
                  <FaMailBulk />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default NavBar;