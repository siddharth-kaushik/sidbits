import React from 'react'
import Logo from './Logo'

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto border-b-2 border-b-stone-100 h-12 flex items-center">
        <Logo />
      </div>
    </header>
  )
}

export default Header
