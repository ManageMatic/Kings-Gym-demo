import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import BranchesPage from './pages/Branches'
import ProgramsPage from './pages/Programs'
import MembershipPage from './pages/Membership'
import GalleryPage from './pages/Gallery'
import ContactPage from './pages/Contact'
import './index.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/programs" element={<ProgramsPage />} />
        <Route path="/membership" element={<MembershipPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </Router>
  )
}

export default App
