import React from 'react'
import { Sun, Menu } from 'lucide-react'

const Header = () => {
  return (
    <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-4">
        <div className="w-9 h-9 bg-primary text-primary-foreground rounded-md flex items-center justify-center font-bold">
          OG
        </div>
        <h1 className="text font-semibold">Free Open Graph Generator</h1>
      </div>
      
      <div className="hidden space-x-2 sm:flex">
        <button className="btn-link">
          <a target="_blank" href="https://indiehub.best/">🎉 IndieHub</a>
        </button>
        <button className="btn-link">
          <a target="_blank" href="https://mkdirs.com/">🔥 Mkdirs</a>
        </button>
        <button className="btn-link">
          <a target="_blank" href="https://x.com/javay_hu">👨‍💻 @javay_hu</a>
        </button>
        <button className="btn-outline w-9 h-9 p-0">
          <Sun className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </button>
      </div>
      
      <div className="flex space-x-2 sm:hidden">
        <button className="btn-outline w-9 h-9 p-0">
          <Sun className="h-4 w-4" />
          <span className="sr-only">Toggle theme</span>
        </button>
        <button className="btn-outline w-9 h-9 p-0">
          <Menu className="h-6 w-6" />
        </button>
      </div>
    </nav>
  )
}

export default Header