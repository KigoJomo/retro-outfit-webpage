import React from 'react'

const Header: React.FC = () => {
  return (
    <header className="w-full h-16 flex-shrink-0 flex items-center justify-between">
      <div className="logo w-1/5"></div>
      <nav className="w-3/5"></nav>
      <div className="action-buttons w-1/5"></div>
    </header>
  )
}

export default Header
