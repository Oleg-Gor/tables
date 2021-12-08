import { Outlet } from "react-router"
import Sidebar from "../components/Sidebar"

const Layout = () => (<div class="container-fluid">
    <div class="row">
        <Sidebar />
        <main class="col-md-9">
          <Outlet/>
        </main>

    </div>
</div>)
export default Layout