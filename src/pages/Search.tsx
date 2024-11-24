import React, { useState } from 'react'
import { Search as SearchIcon } from 'lucide-react'

export default function Search() {
  const [query, setQuery] = useState('')

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Search</h1>
      
      <div className="relative">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-foreground/60" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for songs, artists, or playlists"
          className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg border border-accent focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>

      <div className="text-center text-foreground/60 py-12">
        {query ? 'No results found' : 'Start typing to search'}
      </div>
    </div>
  )
}