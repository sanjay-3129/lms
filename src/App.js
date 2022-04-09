import { Routes, Route } from "react-router-dom";
import UserPortfolio from "./pages/UserPortfolio";
import PageNotFound from "./pages/404";
import SignInUp from "./pages/SignInUp";

import UserAboutUs from "./pages/UserAboutUs";
import UserCourses from "./pages/UserCourses";
import UserContactUs from "./pages/UserContactUs";
// enduser dashbaord
import UserProfile from "./components/User/UserProfile";
import UserMyCourses from "./components/User/UserMyCourses";
import UserBookmarks from "./components/User/UserBookmarks";
import UserCart from "./components/User/UserCart";
import UserOrders from "./components/User/UserOrders";
import UserSettings from "./components/User/UserSettings";
import User from "./pages/Enduser/User";
import UserHome from "./pages/UserHome";
import Admin from "./pages/Admin/Admin";
import Admincourses from "./components/Admin/AdminCourses";
import AdminDashboard from "./components/Admin/AdminDashboard";
import AdminPayment from "./components/Admin/AdminPayment";
import AdminSettings from "./components/Admin/AdminSettings";
import AdminNotification from "./components/Admin/AdminNotification";
import AdminReviews from "./components/Admin/AdminReviews";
import AdminProfile from "./components/Admin/AdminProfile";
import AdminFaculty from "./components/Admin/AdminFaculty";
import AdminContent from "./components/Admin/AdminContent";
import AdminAddNewCourse from "./components/Admin/AdminAddNewCourse";
import CourseContent from './components/User/CourseContentView';
export default function App() {
  return (
    <div className="App">
      <Routes>
        {/* admin - faculty/institution */}
        <Route path="/admin" element={<Admin />}>
          <Route index element={<AdminDashboard />} />
          <Route path="profile" element={<AdminProfile />} />
          <Route path="courses" element={<Admincourses />} />
          <Route path="add-new-course" element={<AdminAddNewCourse />} />
          <Route path="notification" element={<AdminNotification />} />
          <Route path="reviews" element={<AdminReviews />} />
          <Route path="payment" element={<AdminPayment />} />
          <Route path="faculties" element={<AdminFaculty />} />
          <Route path="content" element={<AdminContent />} />
          <Route path="settings" element={<AdminSettings />} />
        </Route>
        {/* enduser dashbaord */}
        <Route path="/user" element={<User />}>
          <Route index path="profile" element={<UserProfile />} />
          <Route path="courses" element={<UserMyCourses />} />
          <Route path="bookmarks" element={<UserBookmarks />} />
          <Route path="cart" element={<UserCart />} />
          <Route path="orders" element={<UserOrders />} />
          <Route path="settings" element={<UserSettings />} />
          <Route path="courseContent/:courseId" element={<CourseContent />} />
        </Route>

        {/* login, signup, portfolio */}
        <Route path="/signin" element={<SignInUp />} />
        <Route path="/" element={<UserPortfolio />}>
          <Route index element={<UserHome />} />
          <Route path="about" element={<UserAboutUs />} />
          <Route path="courses" element={<UserCourses />} />
          <Route path="contactus" element={<UserContactUs />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
}
