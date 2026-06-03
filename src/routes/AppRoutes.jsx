import { Navigate, Route, Routes } from "react-router-dom";
import AddDestination from "../pages/AddDestination/AddDestination";
import BucketList from "../pages/BucketList/BucketList";
import Home from "../pages/Home/Home";
import Navbar from "../components/Navbar/Navbar";

function AppRoutes() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/adicionar" element={<AddDestination />} />
        <Route path="/lista" element={<BucketList />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default AppRoutes;
