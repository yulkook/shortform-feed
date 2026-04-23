import { useState } from 'react'
import { MessageCircle, Share2, Bookmark } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { formatCount } from '../data/mockVideos'

export default function ActionButtons({ video, onShare }) {
  const [amened, setAmened] = useState(false)
  const [saved, setSaved] = useState(false)
  const [amenCount, setAmenCount] = useState(video.likes)

  const handleAmen = () => {
    setAmened(prev => !prev)
    setAmenCount(prev => amened ? prev - 1 : prev + 1)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({ title: video.title, text: `${video.title} - ${video.pastorName}` }).catch(() => {})
    } else {
      onShare?.()
    }
  }

  return (
    <div className="flex flex-col items-center gap-5 pb-2">
      {/* Avatar */}
      <div className="relative mb-1">
        <div
          className="w-[50px] h-[50px] rounded-full p-[2px]"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
        >
          <img
            src={video.user.avatar}
            alt={video.user.username}
            className="w-full h-full rounded-full object-cover"
            style={{ border: '2px solid #0a0a10' }}
          />
        </div>
        <div
          className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
        >
          +
        </div>
      </div>

      {/* 아멘(좋아요) */}
      <motion.button
        onClick={handleAmen}
        whileTap={{ scale: 0.82 }}
        className="flex flex-col items-center gap-1"
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={amened ? 'amened' : 'not'}
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20 }}
            className="w-7 h-7 flex items-center justify-center text-2xl"
          >
            {amened ? '🙏' : '🤲'}
          </motion.div>
        </AnimatePresence>
        <span
          className="text-xs font-semibold"
          style={{ color: amened ? '#a78bfa' : 'rgba(255,255,255,0.75)' }}
        >
          아멘
        </span>
        <span className="text-white/60 text-[10px] -mt-1">{formatCount(amenCount)}</span>
      </motion.button>

      {/* 댓글 */}
      <button className="flex flex-col items-center gap-1 transition-transform active:scale-90">
        <MessageCircle size={28} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.88)' }} />
        <span className="text-white/75 text-xs font-semibold">{formatCount(video.comments)}</span>
      </button>

      {/* 저장 */}
      <button
        onClick={() => setSaved(p => !p)}
        className="flex flex-col items-center gap-1 transition-transform active:scale-90"
      >
        <Bookmark
          size={28}
          strokeWidth={saved ? 0 : 1.5}
          style={{
            color: saved ? '#fbbf24' : 'rgba(255,255,255,0.88)',
            fill: saved ? '#fbbf24' : 'transparent',
            transition: 'color 0.15s, fill 0.15s',
          }}
        />
        <span className="text-white/75 text-xs font-semibold">저장</span>
      </button>

      {/* 공유 */}
      <button
        onClick={handleShare}
        className="flex flex-col items-center gap-1 transition-transform active:scale-90"
      >
        <Share2 size={28} strokeWidth={1.5} style={{ color: 'rgba(255,255,255,0.88)' }} />
        <span className="text-white/75 text-xs font-semibold">공유</span>
      </button>

      {/* 바이닐 */}
      <div
        className="w-9 h-9 rounded-full p-[2px] spin-slow"
        style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
      >
        <div
          className="w-full h-full rounded-full flex items-center justify-center"
          style={{ background: '#1a1020' }}
        >
          <div className="w-2 h-2 rounded-full" style={{ background: 'rgba(255,255,255,0.6)' }} />
        </div>
      </div>
    </div>
  )
}
