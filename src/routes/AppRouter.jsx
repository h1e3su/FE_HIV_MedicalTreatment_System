import { Routes, Route } from "react-router-dom";

// Navbar
import NavBar from "../components/Navbar/Navbar";
import { useLocation } from "react-router-dom";

// Guest
import Home from "../features/Website/Home";
import Login from "../features/auth/Login";
import Register from "../features/auth/Register";
import BlogList from "../features/Blog/BlogList";
import BlogDetail from "../features/Blog/BlogDetail";
import ChatSupport from "../features/Website/Chatsupport";
import HivSurvey from "../features/Website/HivSurvey";

// Customer
import CustomerDashboard from "../features/Customer/CustomerDashboard";
import TestConsultation from "../features/Customer/TestConsultation";
import TestRegistration from "../features/Customer/TestRegistration";
import TestResults from "../features/Customer/TestResults";
import TreatmentPlan from "../features/Customer/TreatmentPlan";
import MedicalHistory from "../features/Customer/MedicalHistory";
import Notifications from "../features/Customer/Notifications";
import CustomerProfile from "../features/Customer/Profile";

// Doctor
import DoctorDashboard from "../features/Doctor/DoctorDashboard";
import DoctorPatients from "../features/Doctor/DoctorPatients";
import UpdateRecord from "../features/Doctor/UpdateRecord";
import TreatmentSelection from "../features/Doctor/TreatmentSelection";
import DoctorProfile from "../features/Doctor/Profile";
import DoctorAppointments from "../features/Doctor/Appointments";

// Admin
import AdminDashboard from "../features/Admin/AdminDashboard";
import ManageDoctors from "../features/Admin/ManageDoctors";
import ManageStaff from "../features/Admin/ManageStaff";
import ManagePatients from "../features/Admin/ManagePatients";
import SystemSettings from "../features/Admin/SystemSettings";
import ManageBlogs from "../features/Admin/ManageBlogs";

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
