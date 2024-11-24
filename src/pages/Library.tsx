import React from 'react'
import { PlayCircle } from 'lucide-react'

export default function Library() {
  const playlists = [
    {
      id: 1,
      title: "My Favorites",
      songCount: 25,
      image: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=300&h=300&fit=crop"
    },
    // Add more playlists as needed
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Your Library</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {playlists.map((playlist) => (
          <div 
            key={playlist.id}
            className="bg-secondary p-4 rounded-lg hover:bg-accent transition-colors group cursor-pointer relative"
          >
            <img 
              src={playlist.image} 
              alt={playlist.title}
              className="w-full aspect-square object-cover rounded-md mb-3"
            />
            <div className="absolute right-6 bottom-16 opacity-0 group-hover:opacity-100 transition-opacity">
              <PlayCircle className="h-12 w-12 text-primary" />
            </div>
            <h3 className="font-semibold">{playlist.title}</h3>
            <p className="text-sm text-foreground/60">{playlist.songCount} songs</p>
          </div>
        ))}
      </div>

      {playlists.length === 0 && (
        <div className="text-center text-foreground/60 py-12">
          No playlists yet. Create one to get started!
        </div>
      )}
    </div>
  )
}