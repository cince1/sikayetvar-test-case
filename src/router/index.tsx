import { Dashboard, Home, Login } from "@/pages";
import DBHome from "@/pages/Dashboard/DBHome";
import Student from "@/pages/Dashboard/Student";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const BaseRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route index element={<DBHome />} />
          <Route path="students" element={<Student />} />
        </Route>
        <Route index element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};

export default BaseRouter;
