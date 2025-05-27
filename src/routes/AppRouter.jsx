import { Routes, Route } from "react-router-dom";

// Guest
import Home from "../pages/Guest/Home";
import Login from "../pages/Guest/Login";
import Register from "../pages/Guest/Register";
import BlogList from "../pages/Guest/BlogList";
import BlogDetail from "../pages/Guest/BlogDetail";
import ChatSupport from "../pages/Guest/ChatSupport";
import HivSurvey from "../pages/Guest/HivSurvey";

// Customer
import CustomerDashboard from "../pages/Customer/CustomerDashboard";
import TestConsultation from "../pages/Customer/TestConsultation";
import TestRegistration from "../pages/Customer/TestRegistration";
import TestResults from "../pages/Customer/TestResults";
import TreatmentPlan from "../pages/Customer/TreatmentPlan";
import MedicalHistory from "../pages/Customer/MedicalHistory";
import Notifications from "../pages/Customer/Notifications";
import CustomerProfile from "../pages/Customer/Profile";

// Staff
import StaffDashboard from "../pages/Staff/StaffDashboard";
import ManageSchedule from "../pages/Staff/ManageSchedule";
import PatientRecords from "../pages/Staff/PatientRecords";

// Manager
import ManagerDashboard from "../pages/Manager/ManagerDashboard";
import ApproveAccounts from "../pages/Manager/ApproveAccounts";
import ReportDashboard from "../pages/Manager/ReportDashboard";
import ManagerOverview from "../pages/Manager/ManagerOverview";

// Doctor
import DoctorDashboard from "../pages/Doctor/DoctorDashboard";
import DoctorPatients from "../pages/Doctor/DoctorPatients";
import UpdateRecord from "../pages/Doctor/UpdateRecord";
import TreatmentSelection from "../pages/Doctor/TreatmentSelection";
import DoctorProfile from "../pages/Doctor/Profile";
import DoctorAppointments from "../pages/Doctor/Appointments";

// Admin
import AdminDashboard from "../pages/Admin/AdminDashboard";
import ManageDoctors from "../pages/Admin/ManageDoctors";
import ManageStaff from "../pages/Admin/ManageStaff";
import ManagePatients from "../pages/Admin/ManagePatients";
import SystemSettings from "../pages/Admin/SystemSettings";
import ManageBlogs from "../pages/Admin/ManageBlogs";

export default function AppRouter() {
  return (
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

      {/* Staff */}
      <Route path="/staff" element={<StaffDashboard />}>
        <Route path="schedule" element={<ManageSchedule />} />
        <Route path="patients" element={<PatientRecords />} />
      </Route>

      {/* Manager */}
      <Route path="/manager" element={<ManagerDashboard />}>
        <Route path="accounts" element={<ApproveAccounts />} />
        <Route path="reports" element={<ReportDashboard />} />
        <Route path="overview" element={<ManagerOverview />} />
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
  );
}
