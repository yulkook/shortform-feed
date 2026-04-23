import { useState } from 'react'
import BottomNav from './components/BottomNav'
import FeedPage from './pages/FeedPage'
import ExplorePage from './pages/ExplorePage'
import UploadPage from './pages/UploadPage'
import ProfilePage from './pages/ProfilePage'

export default function App() {
  const [activeTab, setActiveTab] = useState('home')

  const renderPage = () => {
    switch (activeTab) {
      case 'home':     return <FeedPage />
      case 'explore':  return <ExplorePage />
      case 'upload':   return <UploadPage />
      case 'profile':  return <ProfilePage />
      default:         return <FeedPage />
    }
  }

  return (
    <div className="relative w-full h-full bg-black">
      {renderPage()}
      <BottomNav activeTab={activeTab} onTabChange={setActiveTab} />
    </div>
  )
}
