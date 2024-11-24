import React from 'react'
import { Music } from 'lucide-react'

export default function Home() {
  const featuredPlaylists = [
    {
      id: 1,
      title: "Today's Hits",
      image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=300&h=300&fit=crop",
      description: "The biggest hits of today."
    },
    {
      id: 2,
      title: "Chill Vibes",
      image: "https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=300&h=300&fit=crop",
      description: "Relaxing beats for your day."
    },
    // Add more playlists as needed
  ]

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome to Harmony</h1>
      
      <section>
        <h2 className="text-2xl font-semibold mb-4">Featured Playlists</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredPlaylists.map((playlist) => (
            <div 
              key={playlist.id}
              className="bg-secondary p-4 rounded-lg hover:bg-accent transition-colors cursor-pointer"
            >
              <img 
                src={playlist.image} 
                alt={playlist.title}
                className="w-full aspect-square object-cover rounded-md mb-3"
              />
              <h3 className="font-semibold">{playlist.title}</h3>
              <p className="text-sm text-foreground/60">{playlist.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}