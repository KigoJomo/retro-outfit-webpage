import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import CartIcon from './CartIcon'
import SearchIcon from './SearchIcon'

const links = ['about', 'women', 'men', 'collections']

const Header: React.FC = () => {
  return (
    <header className="w-full h-16 flex-shrink-0 flex items-center justify-between px-6 sticky top-0 backdrop-blur-3xl z-20">
      <div className="logo w-1/5">
        <Image alt='logo' height={1000} width={1000} src={"/images/logo.webp"} className='h-6 w-auto' />
      </div>
      <nav className="w-3/5 flex items-center justify-center gap-20">
        {links.map((link) =>(
          <Link href={`/${link}`} key={link} className='uppercase font-bold text-black h-4 flex items-center justify-center'>{link}</Link>
        ))}
      </nav>
      <div className="action-buttons w-1/5 flex items-center justify-end gap-4">
        <button className='aspect-square w-10'>
          <SearchIcon/>
        </button>
        <button className='aspect-square w-10'>
          <CartIcon />
        </button>
      </div>
    </header>
  )
}

export default Header
