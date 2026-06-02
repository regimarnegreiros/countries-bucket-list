import { Navigate, Route, Routes } from 'react-router-dom'
import AddDestination from '../pages/AddDestination'
import BucketList from '../pages/BucketList'
import Home from '../pages/Home'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/adicionar" element={<AddDestination />} />
      <Route path="/lista" element={<BucketList />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  )
}

export default AppRoutes
