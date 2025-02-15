import { Route, Routes } from "react-router-dom"

import { MusicPlayer } from "./components/MusicPlayer/MusicPlayer"
import { Navbar } from "./components/Navbar"
import { Portal } from "./components/portal/Portal"
import { Sidebar } from "./components/Sidebar"
import { Home } from "./pages/Home"
import { Playlists } from "./pages/Playlists"
import Playlist from "./pages/Playlist"
import { useAppSelector } from "./store/hook"
import { Genre } from "./pages/Genre"

function App() {
  const { isPlayerActive } = useAppSelector((state) => state.musicPlayer);

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Navbar />

        <div className="page-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/genre/:genreId" element={<Genre />} />
            <Route path="/playlists" element={<Playlists />} />
            <Route path="/playlists/:playlistId" element={<Playlist />} />
            <Route path="*" element={<Home />} />
          </Routes>
          <Portal />
        </div>
        {isPlayerActive ? <MusicPlayer /> : null}
      </div>
    </>
  )
}

export default App
