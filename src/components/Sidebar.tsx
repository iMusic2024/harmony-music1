import { Link, useLocation } from 'react-router-dom'
import { Home, Search, Library, LogOut } from 'lucide-react'
import { useAuth } from '../contexts/AuthContext'
import { cn } from '../lib/utils'

export default function Sidebar() {
  const location = useLocation()
  const { logout } = useAuth()

  const navigation = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'Search', href: '/search', icon: Search },
    { name: 'Library', href: '/library', icon: Library },
  ]

  return (
    <div className="w-64 bg-secondary flex flex-col">
      <div className="p-6">
        <h1 className="text-2xl font-bold">Harmony</h1>
      </div>
      <nav className="flex-1">
        {navigation.map((item) => {
          const Icon = item.icon
          return (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                'flex items-center px-6 py-3 text-sm font-medium',
                location.pathname === item.href
                  ? 'bg-accent text-accent-foreground'
                  : 'text-foreground/60 hover:text-foreground'
              )}
            >
              <Icon className="h-5 w-5 mr-3" />
              {item.name}
            </Link>
          )
        })}
      </nav>
      <button
        onClick={() => logout()}
        className="flex items-center px-6 py-3 text-sm font-medium text-foreground/60 hover:text-foreground"
      >
        <LogOut className="h-5 w-5 mr-3" />
        Logout
      </button>
    </div>
  )
}