import { Outlet } from "react-router";
import Sidebar from "../components/Sidebar";

const Layout = () => (
  <div className="container-fluid">
    <div className="row">
      <Sidebar />
      <main className="col-md-9">
        <Outlet />
      </main>
    </div>
  </div>
);
export default Layout;
