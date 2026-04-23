import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { mockVideos } from '../data/mockVideos'
import VideoCard from '../components/VideoCard'

const SWIPE_THRESHOLD = 60
const VELOCITY_THRESHOLD = 400

const slideVariants = {
  enter: (dir) => ({ y: dir > 0 ? '100%' : '-100%', opacity: 0.6 }),
  center: { y: 0, opacity: 1 },
  exit: (dir) => ({ y: dir > 0 ? '-100%' : '100%', opacity: 0.6 }),
}

export default function FeedPage() {
  const [activeTab, setActiveTab] = useState('for-you')
  const [[index, dir], setPage] = useState([0, 0])

  const navigate = (newDir) => {
    const next = index + newDir
    if (next >= 0 && next < mockVideos.length) {
      setPage([next, newDir])
    }
  }

  const handleDragEnd = (_, { offset, velocity }) => {
    if (offset.y < -SWIPE_THRESHOLD || velocity.y < -VELOCITY_THRESHOLD) {
      navigate(1)
    } else if (offset.y > SWIPE_THRESHOLD || velocity.y > VELOCITY_THRESHOLD) {
      navigate(-1)
    }
  }

  return (
    <>
      {/* 탭 헤더 */}
      <div
        className="absolute top-0 left-0 right-0 z-20 flex justify-center gap-8 pt-14 pb-3 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)' }}
      >
        {[
          { id: 'following', label: '팔로잉' },
          { id: 'for-you',   label: '추천' },
        ].map(({ id, label }) => {
          const isActive = activeTab === id
          return (
            <button
              key={id}
              className="pointer-events-auto flex flex-col items-center gap-1 transition-opacity active:opacity-60"
              onClick={() => setActiveTab(id)}
            >
              <span
                className="text-sm font-semibold tracking-tight transition-colors"
                style={{ color: isActive ? '#fff' : 'rgba(255,255,255,0.38)' }}
              >
                {label}
              </span>
              {isActive && (
                <div
                  className="h-[2px] w-5 rounded-full"
                  style={{ background: 'linear-gradient(90deg, #8b5cf6, #ec4899)' }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* 스와이프 피드 */}
      <div className="relative w-full h-[100dvh] overflow-hidden">
        <AnimatePresence custom={dir} initial={false}>
          <motion.div
            key={index}
            custom={dir}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{ type: 'tween', duration: 0.32, ease: [0.32, 0, 0.67, 0] }}
            drag="y"
            dragConstraints={{ top: 0, bottom: 0 }}
            dragElastic={0.08}
            dragMomentum={false}
            onDragEnd={handleDragEnd}
            className="absolute inset-0"
            style={{ touchAction: 'none' }}
          >
            <VideoCard video={mockVideos[index]} isActive={true} />
          </motion.div>
        </AnimatePresence>

        {/* 스와이프 힌트 인디케이터 */}
        {index < mockVideos.length - 1 && (
          <div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 pointer-events-none opacity-50">
            <motion.div
              animate={{ y: [0, 6, 0] }}
              transition={{ repeat: Infinity, duration: 1.4, ease: 'easeInOut' }}
              className="w-[1px] h-5 rounded-full"
              style={{ background: 'rgba(255,255,255,0.5)' }}
            />
          </div>
        )}
      </div>
    </>
  )
}
