import { Outlet } from 'react-router-dom';
import AdminNavbar from '../../components/Admin/AdminNavbar';
import AdminSidebar from '../../components/Admin/AdminSidebar';
// import "../../styles/Astyle.css";
import './Admin.css';
import { getDoc, getDocs, doc, collection, db } from '../../services/firebase';
import { useEffect, useState } from 'react';

const Admin = () => {
  const [details, setDetails] = useState({});
  useEffect(() => {
    fetch();
  }, []);

  const fetch = async () => {
    const domain = 'asdf.domain.com';
    const collectionRef = collection(db, 'secondary', domain, 'category');
    const querySnapshot = await getDocs(collectionRef);
    let categories = [];
    querySnapshot.forEach(async (doc) => {
      // doc.data() is never undefined for query doc snapshots
      // console.log('category =>', doc.id, ' => ', doc.data());
      const collRef = collection(
        db,
        'secondary',
        domain,
        'category',
        doc.id,
        'course'
      );
      const Snapshot = await getDocs(collRef);
      let courses = [];
      await Snapshot.forEach((doc) => {
        // console.log('course =>', doc.id, ' => ', doc.data());
        courses.push(doc.data());
      });
      categories.push({ ...doc.data(), courses: courses });
    });
    // console.log(categories);
    setDetails(categories);
  };

  return (
    <>
      <div className="dashboard-main-wrapper">
        <div className="dashboard-header">
          <AdminNavbar />
        </div>
        <div className="nav-left-sidebar sidebar-white">
          <AdminSidebar />
        </div>
        <Outlet context={[details, setDetails]} />
      </div>
    </>
  );
};

export default Admin;
