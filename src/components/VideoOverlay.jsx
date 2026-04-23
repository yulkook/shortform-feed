import { Music2 } from 'lucide-react'

const renderCaption = (caption) => {
  const parts = caption.split(/(#[^\s#]+)/g)
  return parts.map((part, i) =>
    part.startsWith('#')
      ? <span key={i} style={{ color: '#c4b5fd' }}>{part}</span>
      : part
  )
}

export default function VideoOverlay({ video }) {
  return (
    <div
      className="absolute bottom-0 left-0 right-0 pb-28 px-4 pt-20 pointer-events-none"
      style={{
        background: 'linear-gradient(to top, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.45) 60%, transparent 100%)',
      }}
    >
      {/* 설교 제목 */}
      <p className="text-white font-bold text-[18px] mb-0.5 drop-shadow-lg tracking-tight leading-snug">
        {video.title}
      </p>

      {/* 목회자 이름 */}
      <p
        className="text-sm font-semibold mb-2 drop-shadow"
        style={{ color: '#c4b5fd' }}
      >
        {video.pastorName}
      </p>

      {/* 캡션 */}
      <p className="text-white/80 text-sm leading-snug mb-3 drop-shadow line-clamp-2">
        {renderCaption(video.caption)}
      </p>

      {/* 음악 */}
      <div className="flex items-center gap-2 pointer-events-auto">
        <div
          className="w-5 h-5 rounded-full flex items-center justify-center shrink-0"
          style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
        >
          <Music2 size={10} className="text-white" />
        </div>
        <div className="overflow-hidden flex-1">
          <p className="text-white/75 text-xs whitespace-nowrap animate-[marquee_9s_linear_infinite]">
            {video.music}
          </p>
        </div>
      </div>
    </div>
  )
}
