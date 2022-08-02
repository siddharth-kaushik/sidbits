import React from 'react'

import PrimaryHeader from './PrimaryHeader'
import SecondaryHeader from './SecondaryHeader'

const Header = () => {
  return (
    <header className="w-full">
      <div className="max-w-7xl mx-auto">
        <SecondaryHeader />
        <PrimaryHeader />
      </div>
    </header>
  )
}

export default Header
