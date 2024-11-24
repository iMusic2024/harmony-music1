import { Outlet } from 'react-router-dom'
import Sidebar from './Sidebar'
import Player from './Player'

export default function Layout() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex-1 flex overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-background">
          <div className="container mx-auto px-4 py-6">
            <Outlet />
          </div>
        </main>
      </div>
      <Player />
    </div>
  )
}