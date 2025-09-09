import React from 'react'

const Footer = () => {
  return (
    <footer className="mx-auto max-w-7xl px-2 py-6 sm:px-6 lg:px-8">
      <div className="flex justify-between">
        <div className="flex items-center space-x-2">
          <div className="font-mono font-semibold">
            <a target="_blank" href="https://og.indiehub.best/">
              Free Open Graph Generator
            </a>
          </div>
          <div>
            <a target="_blank" className="btn-link" href="https://indiehub.best/">
              🎉 IndieHub - best directory for indie makers
            </a>
            <a target="_blank" className="btn-link" href="https://mkdirs.com/">
              🔥 Mkdirs - best directory boilerplate
            </a>
          </div>
        </div>
        <div className="hidden items-center gap-x-2 md:inline-flex">
          <a target="_blank" className="btn-link" href="https://github.com/FadyMak/imgsrc-app">
            all credits to imgsrc-app
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer