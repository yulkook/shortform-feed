import { useRef, useEffect, useState } from 'react'
import { Volume2, VolumeX } from 'lucide-react'
import ActionButtons from './ActionButtons'
import VideoOverlay from './VideoOverlay'

export default function VideoCard({ video, isActive }) {
  const videoRef = useRef(null)
  const [muted, setMuted] = useState(true)
  const [paused, setPaused] = useState(false)

  useEffect(() => {
    const el = videoRef.current
    if (!el) return
    if (isActive) {
      el.play().catch(() => {})
      setPaused(false)
    } else {
      el.pause()
      el.currentTime = 0
    }
  }, [isActive])

  const togglePlayPause = () => {
    const el = videoRef.current
    if (!el) return
    if (el.paused) {
      el.play()
      setPaused(false)
    } else {
      el.pause()
      setPaused(true)
    }
  }

  return (
    <div
      className="relative w-full h-full overflow-hidden"
      style={{ background: '#0a0a10' }}
    >
      <video
        ref={videoRef}
        src={video.videoUrl}
        loop
        muted={muted}
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        onClick={togglePlayPause}
      />

      {paused && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          <div
            className="w-14 h-14 rounded-full flex items-center justify-center"
            style={{
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(12px)',
              border: '1px solid rgba(255,255,255,0.2)',
            }}
          >
            <div className="w-0 h-0 border-t-[10px] border-t-transparent border-b-[10px] border-b-transparent border-l-[18px] border-l-white ml-1" />
          </div>
        </div>
      )}

      <div className="absolute right-3 bottom-28 flex flex-col items-center z-10">
        <ActionButtons video={video} />
      </div>

      <VideoOverlay video={video} />

      <button
        onClick={() => setMuted(m => !m)}
        className="absolute top-14 right-4 z-20 w-8 h-8 rounded-full flex items-center justify-center transition-transform active:scale-90"
        style={{
          background: 'rgba(0,0,0,0.35)',
          backdropFilter: 'blur(8px)',
          border: '1px solid rgba(255,255,255,0.12)',
        }}
      >
        {muted
          ? <VolumeX size={14} className="text-white/80" />
          : <Volume2 size={14} className="text-white/80" />}
      </button>
    </div>
  )
}
