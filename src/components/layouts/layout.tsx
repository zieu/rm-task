import { FC, PropsWithChildren } from 'react'
import { Link } from 'react-router-dom'

const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex flex-col h-screen justify-between bg-slate-50">
      <header className="bg-slate-200">
        <div className="h-10 container mx-auto flex items-center px-4">
          <Link to="/">
            <span className="text-lg font-bold text-slate-700">Task</span>
          </Link>
        </div>
      </header>
      <main className="mb-auto mx-auto container py-6 px-4">{children}</main>
      <footer className="bg-slate-200 flex justify-center items-center min-h-8 text-sm mt-2">
        Task @ {new Date().getFullYear()}
      </footer>
    </div>
  )
}

export default Layout
