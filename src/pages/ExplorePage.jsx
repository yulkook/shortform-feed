import { useState } from 'react'
import { Search } from 'lucide-react'

const categories = ['전체', '요리', '음악', '댄스', '여행', '게임', '운동', '패션']

const trendingItems = [
  { id: 1, views: '312K' }, { id: 2, views: '89K' },  { id: 3, views: '156K' },
  { id: 4, views: '234K' }, { id: 5, views: '78K' },  { id: 6, views: '445K' },
  { id: 7, views: '123K' }, { id: 8, views: '567K' }, { id: 9, views: '91K' },
].map(item => ({
  ...item,
  img: `https://picsum.photos/seed/explore${item.id}/200/300`,
}))

export default function ExplorePage() {
  const [activeCategory, setActiveCategory] = useState(0)

  return (
    <div
      className="w-full h-[100dvh] overflow-y-scroll hide-scrollbar pb-28"
      style={{ background: '#0a0a10' }}
    >
      {/* Sticky header */}
      <div
        className="sticky top-0 z-10 px-4 pt-14 pb-3"
        style={{
          background: 'rgba(10,10,16,0.88)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          borderBottom: '1px solid rgba(255,255,255,0.05)',
        }}
      >
        {/* Search bar */}
        <div
          className="flex items-center gap-2.5 rounded-2xl px-4 py-3"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <Search size={15} style={{ color: 'rgba(255,255,255,0.35)' }} />
          <input
            type="text"
            placeholder="검색"
            className="bg-transparent text-white text-sm flex-1 outline-none placeholder:text-white/30"
          />
        </div>

        {/* Category pills */}
        <div className="flex gap-2 mt-3 overflow-x-auto hide-scrollbar pb-0.5">
          {categories.map((cat, i) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(i)}
              className="shrink-0 px-3.5 py-1.5 rounded-full text-xs font-semibold transition-all active:scale-95"
              style={
                i === activeCategory
                  ? { background: 'linear-gradient(135deg, #8b5cf6, #ec4899)', color: '#fff' }
                  : {
                      background: 'rgba(255,255,255,0.06)',
                      color: 'rgba(255,255,255,0.5)',
                      border: '1px solid rgba(255,255,255,0.08)',
                    }
              }
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Trending label */}
      <div className="px-4 pt-4 pb-2 flex items-center gap-1.5">
        <span className="text-[13px] font-bold text-white/80">🔥 트렌딩</span>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 gap-0.5 px-0.5">
        {trendingItems.map(item => (
          <div key={item.id} className="relative aspect-[3/4] overflow-hidden" style={{ background: '#1a1a24' }}>
            <img src={item.img} alt="" className="w-full h-full object-cover" />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 50%)' }}
            />
            <span className="absolute bottom-1.5 left-2 text-white text-[10px] font-semibold drop-shadow">
              ▶ {item.views}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
