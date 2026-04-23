import { useState } from 'react'
import { Settings, Grid3X3, Heart } from 'lucide-react'

const myVideos = Array.from({ length: 12 }, (_, i) => ({
  id: i + 1,
  img: `https://picsum.photos/seed/profile${i + 1}/200/300`,
}))

export default function ProfilePage() {
  const [tab, setTab] = useState('videos')

  return (
    <div
      className="w-full h-[100dvh] overflow-y-scroll hide-scrollbar pb-28"
      style={{ background: '#0a0a10' }}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 pt-14 pb-2">
        <span className="text-white font-bold text-lg tracking-tight">@my_channel</span>
        <button
          className="w-8 h-8 rounded-full flex items-center justify-center"
          style={{ background: 'rgba(255,255,255,0.07)' }}
        >
          <Settings size={17} style={{ color: 'rgba(255,255,255,0.6)' }} />
        </button>
      </div>

      {/* Profile section */}
      <div className="flex flex-col items-center px-4 pb-5">
        {/* Avatar with gradient ring */}
        <div
          className="w-24 h-24 rounded-full p-[2.5px] mb-3"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
        >
          <img
            src="https://i.pravatar.cc/150?img=10"
            alt="my avatar"
            className="w-full h-full rounded-full object-cover"
            style={{ border: '2.5px solid #0a0a10' }}
          />
        </div>

        <p className="text-white font-bold text-[17px] mb-0.5 tracking-tight">My Channel</p>
        <p className="text-xs mb-4" style={{ color: 'rgba(255,255,255,0.38)' }}>
          ✨ 일상을 감성으로 기록하는 중
        </p>

        {/* Stats */}
        <div className="flex gap-9 mb-4">
          {[['142', '팔로잉'], ['38.4K', '팔로워'], ['1.2M', '좋아요']].map(([val, label]) => (
            <div key={label} className="flex flex-col items-center">
              <span className="text-white font-bold text-[15px]">{val}</span>
              <span className="text-[11px] mt-0.5" style={{ color: 'rgba(255,255,255,0.38)' }}>
                {label}
              </span>
            </div>
          ))}
        </div>

        {/* Edit button */}
        <button
          className="text-white/85 text-sm font-semibold rounded-2xl px-8 py-2 transition-all active:scale-95"
          style={{
            background: 'rgba(255,255,255,0.07)',
            border: '1px solid rgba(255,255,255,0.1)',
          }}
        >
          프로필 편집
        </button>
      </div>

      {/* Tabs */}
      <div
        className="flex mx-0"
        style={{ borderBottom: '1px solid rgba(255,255,255,0.07)' }}
      >
        {[
          { id: 'videos', Icon: Grid3X3 },
          { id: 'likes',  Icon: Heart },
        ].map(({ id, Icon }) => {
          const isActive = tab === id
          return (
            <button
              key={id}
              onClick={() => setTab(id)}
              className="flex-1 flex justify-center py-3 relative transition-opacity active:opacity-60"
            >
              <Icon
                size={19}
                strokeWidth={isActive ? 2 : 1.5}
                style={{ color: isActive ? '#a78bfa' : 'rgba(255,255,255,0.28)' }}
              />
              {isActive && (
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-8 h-[2px] rounded-full"
                  style={{ background: 'linear-gradient(90deg, #8b5cf6, #ec4899)' }}
                />
              )}
            </button>
          )
        })}
      </div>

      {/* Video grid */}
      <div className="grid grid-cols-3 gap-0.5 px-0.5 mt-0.5">
        {myVideos.map(v => (
          <div
            key={v.id}
            className="relative aspect-[3/4] overflow-hidden"
            style={{ background: '#1a1a24' }}
          >
            <img src={v.img} alt="" className="w-full h-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  )
}
