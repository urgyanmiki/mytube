import { Route, Routes } from "react-router-dom";

import { MusicPlayer } from './components/MusicPlayer'
import { Navbar } from './components/Navbar';
import { Portal } from './components/portal/Portal';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { Playlists } from './pages/Playlists';
import Playlist from './pages/Playlist';
import { useAppSelector } from './store/hook';
import { Genre } from './pages/Genre';
import { Artist } from './pages/Artist';
import { Search } from "./pages/Search";

function App() {
  const { isPlayerActive } = useAppSelector((state) => state.musicPlayer);

  return (
    <>
      <div className="wrapper">
        <Sidebar />
        <Navbar />

        <div className="page-content">
          <img src="/bg.png" alt="" className="bg-img" />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/search/:searchTerm" element={<Search />} />
            <Route path="/artist/:artistId" element={<Artist />} />
            <Route path="/genre/:transformedUrl" element={<Genre />} />
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
