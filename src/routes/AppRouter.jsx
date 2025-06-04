import { Routes, Route } from "react-router-dom";

// Navbar
import NavBar from "../components/layout/Navbar";
import { useLocation } from "react-router-dom";

// Guest
import Home from "../features #unnessecary/Website/Home";
import Login from "../features #unnessecary/auth/Login";
import Register from "../features #unnessecary/auth/Register";
import BlogList from "../features #unnessecary/Blog/BlogList";
import BlogDetail from "../features #unnessecary/Blog/BlogDetail";
import ChatSupport from "../features #unnessecary/Website/Chatsupport";
import HivSurvey from "../features #unnessecary/Website/HivSurvey";

// Customer
import CustomerDashboard from "../features #unnessecary/Customer/CustomerDashboard";
import TestConsultation from "../features #unnessecary/Customer/TestConsultation";
import TestRegistration from "../features #unnessecary/Customer/TestRegistration";
import TestResults from "../features #unnessecary/Customer/TestResults";
import TreatmentPlan from "../features #unnessecary/Customer/TreatmentPlan";
import MedicalHistory from "../features #unnessecary/Customer/MedicalHistory";
import Notifications from "../features #unnessecary/Customer/Notifications";
import CustomerProfile from "../features #unnessecary/Customer/Profile";

// Doctor
import DoctorDashboard from "../features #unnessecary/Doctor/DoctorDashboard";
import DoctorPatients from "../features #unnessecary/Doctor/DoctorPatients";
import UpdateRecord from "../features #unnessecary/Doctor/UpdateRecord";
import TreatmentSelection from "../features #unnessecary/Doctor/TreatmentSelection";
import DoctorProfile from "../features #unnessecary/Doctor/Profile";
import DoctorAppointments from "../features #unnessecary/Doctor/Appointments";

// Admin
import AdminDashboard from "../features #unnessecary/Admin/AdminDashboard";
import ManageDoctors from "../features #unnessecary/Admin/ManageDoctors";
import ManageStaff from "../features #unnessecary/Admin/ManageStaff";
import ManagePatients from "../features #unnessecary/Admin/ManagePatients";
import SystemSettings from "../features #unnessecary/Admin/SystemSettings";
import ManageBlogs from "../features #unnessecary/Admin/ManageBlogs";

export default function AppRouter() {
  const location = useLocation(); // Ẩn Navbar ở các trang login, register
  const hideNavbar = ["/login", "/register"].includes(location.pathname);
  return (
    <>
      {!hideNavbar && <NavBar />}
      <Routes>
        {/* Guest */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/blogs" element={<BlogList />} />
        <Route path="/blogs/:id" element={<BlogDetail />} />
        <Route path="/chat" element={<ChatSupport />} />
        <Route path="/survey" element={<HivSurvey />} />

        {/* Customer */}
        <Route path="/customer" element={<CustomerDashboard />}>
          <Route path="test-consult" element={<TestConsultation />} />
          <Route path="test-register" element={<TestRegistration />} />
          <Route path="results" element={<TestResults />} />
          <Route path="treatment-plan" element={<TreatmentPlan />} />
          <Route path="medical-history" element={<MedicalHistory />} />
          <Route path="notifications" element={<Notifications />} />
          <Route path="profile" element={<CustomerProfile />} />
        </Route>

        {/* Doctor */}
        <Route path="/doctor" element={<DoctorDashboard />}>
          <Route path="patients" element={<DoctorPatients />} />
          <Route path="update-record" element={<UpdateRecord />} />
          <Route path="treatment" element={<TreatmentSelection />} />
          <Route path="profile" element={<DoctorProfile />} />
          <Route path="appointments" element={<DoctorAppointments />} />
        </Route>

        {/* Admin */}
        <Route path="/admin" element={<AdminDashboard />}>
          <Route path="doctors" element={<ManageDoctors />} />
          <Route path="staff" element={<ManageStaff />} />
          <Route path="patients" element={<ManagePatients />} />
          <Route path="system" element={<SystemSettings />} />
          <Route path="blogs" element={<ManageBlogs />} />
        </Route>
      </Routes>
    </>
  );
}
