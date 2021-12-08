import { Navigate, Route, Routes } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Landpads from "./pages/Landpads";
import NextLaunches from "./pages/NextLaunches";
import PastLaunches from "./pages/PastLaunches";

function App() {
  return (

    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="pastlaunches" element={<PastLaunches />} />
        <Route path="nextlaunches" element={<NextLaunches />} />
        <Route path="landpads" element={<Landpads />} />
        <Route path="*" element={<Navigate to='/' />} />
      </Route>
    </Routes>
  );
}

export default App;
