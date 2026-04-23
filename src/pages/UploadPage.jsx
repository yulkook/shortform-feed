import { Video, ImageIcon, Sparkles } from 'lucide-react'

export default function UploadPage() {
  return (
    <div
      className="w-full h-[100dvh] flex flex-col items-center justify-center gap-5 pb-24 px-6"
      style={{ background: '#0a0a10' }}
    >
      {/* Gradient icon */}
      <div
        className="w-20 h-20 rounded-3xl flex items-center justify-center mb-1"
        style={{ background: 'linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)' }}
      >
        <Sparkles size={34} className="text-white" />
      </div>

      <div className="text-center">
        <p className="text-white text-xl font-bold mb-1.5 tracking-tight">콘텐츠 업로드</p>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>
          나만의 감성을 세상과 공유해보세요
        </p>
      </div>

      <div className="flex flex-col gap-2.5 w-full max-w-xs mt-1">
        <button
          className="flex items-center gap-3.5 rounded-2xl px-5 py-4 transition-all active:scale-[0.97]"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #8b5cf6, #ec4899)' }}
          >
            <Video size={16} className="text-white" />
          </div>
          <span className="text-white/85 font-semibold text-sm">갤러리에서 동영상 선택</span>
        </button>

        <button
          className="flex items-center gap-3.5 rounded-2xl px-5 py-4 transition-all active:scale-[0.97]"
          style={{
            background: 'rgba(255,255,255,0.06)',
            border: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
            style={{ background: 'linear-gradient(135deg, #06b6d4, #8b5cf6)' }}
          >
            <ImageIcon size={16} className="text-white" />
          </div>
          <span className="text-white/85 font-semibold text-sm">사진으로 슬라이드 만들기</span>
        </button>
      </div>

      <p className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.2)' }}>
        최대 10분 · 최대 4GB
      </p>
    </div>
  )
}
