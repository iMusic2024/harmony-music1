import { useState } from 'react'
import { Play, Pause, SkipBack, SkipForward, Volume2 } from 'lucide-react'

export default function Player() {
  const [isPlaying, setIsPlaying] = useState(false)

  return (
    <div className="h-20 bg-secondary border-t border-accent flex items-center px-4">
      <div className="flex-1 flex items-center">
        <img
          src="https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=50&h=50&fit=crop"
          alt="Album art"
          className="w-12 h-12 rounded"
        />
        <div className="ml-4">
          <div className="text-sm font-medium">Song Title</div>
          <div className="text-xs text-foreground/60">Artist</div>
        </div>
      </div>
      
      <div className="flex-1 flex flex-col items-center">
        <div className="flex items-center space-x-4">
          <button className="text-foreground/60 hover:text-foreground">
            <SkipBack className="h-5 w-5" />
          </button>
          <button
            onClick={() => setIsPlaying(!isPlaying)}
            className="w-8 h-8 flex items-center justify-center rounded-full bg-primary text-primary-foreground"
          >
            {isPlaying ? (
              <Pause className="h-5 w-5" />
            ) : (
              <Play className="h-5 w-5" />
            )}
          </button>
          <button className="text-foreground/60 hover:text-foreground">
            <SkipForward className="h-5 w-5" />
          </button>
        </div>
        <div className="w-full max-w-md mt-2 flex items-center">
          <div className="text-xs text-foreground/60">0:00</div>
          <div className="mx-2 flex-1 h-1 bg-accent rounded-full">
            <div className="w-1/3 h-full bg-primary rounded-full" />
          </div>
          <div className="text-xs text-foreground/60">3:45</div>
        </div>
      </div>

      <div className="flex-1 flex justify-end items-center">
        <Volume2 className="h-5 w-5 text-foreground/60" />
        <div className="w-24 h-1 bg-accent rounded-full ml-2">
          <div className="w-2/3 h-full bg-primary rounded-full" />
        </div>
      </div>
    </div>
  )
}