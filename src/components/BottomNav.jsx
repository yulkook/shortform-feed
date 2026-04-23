import { Home, Search, Plus, User } from 'lucide-react'

const tabs = [
  { id: 'home',    Icon: Home,   label: '홈' },
  { id: 'explore', Icon: Search, label: '탐색' },
  { id: 'upload',  Icon: Plus,   label: null },
  { id: 'profile', Icon: User,   label: '프로필' },
]

export default function BottomNav({ activeTab, onTabChange }) {
  return (
    <nav
      className="fixed bottom-5 left-1/2 -translate-x-1/2 z-50 flex items-center"
      style={{
        width: 'calc(100% - 40px)',
        maxWidth: '440px',
        background: 'rgba(15, 15, 22, 0.75)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        borderRadius: '20px',
        padding: '6px',
        boxShadow: '0 8px 32px rgba(0,0,0,0.6), 0 0 0 0.5px rgba(255,255,255,0.04) inset',
      }}
    >
      {tabs.map(({ id, Icon, label }) => {
        const isActive = activeTab === id
        const isUpload = id === 'upload'

        if (isUpload) {
          return (
            <button
              key={id}
              onClick={() => onTabChange(id)}
              className="flex-1 flex justify-center items-center py-1"
            >
              <div
                className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform active:scale-90"
                style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }}
              >
                <Icon size={20} className="text-white" strokeWidth={2.5} />
              </div>
            </button>
          )
        }

        return (
          <button
            key={id}
            onClick={() => onTabChange(id)}
            className="flex-1 flex flex-col items-center gap-1 py-2 rounded-2xl transition-all active:scale-95"
            style={isActive ? { background: 'rgba(139, 92, 246, 0.12)' } : {}}
          >
            <Icon
              size={21}
              strokeWidth={isActive ? 2.5 : 1.5}
              style={{ color: isActive ? '#a78bfa' : 'rgba(255,255,255,0.35)' }}
            />
            {label && (
              <span
                className="text-[10px] font-semibold leading-none"
                style={{ color: isActive ? '#a78bfa' : 'rgba(255,255,255,0.35)' }}
              >
                {label}
              </span>
            )}
          </button>
        )
      })}
    </nav>
  )
}
