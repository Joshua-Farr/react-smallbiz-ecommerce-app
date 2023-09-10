import "./App.css";
// import Login from "./Pages/Onboarding/Login.tsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Layout from "./Layout/Layout.tsx";
import Home from "./Pages/Home.tsx";
import Store from "./Pages/Store/Store.tsx";
import Analytics from "./Pages/Analytics.tsx";
import AddProductPopout from "./Pages/Store/Add ProductPopout/AddProductPopout.tsx";

export default function App() {
  // return <Login />;
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<Layout />}>
    //       <Route index element={<Home />}></Route>
    //       <Route path="store" index element={<Store />}></Route>
    //       <Route path="analytics" index element={<Analytics />}></Route>
    //     </Route>
    //   </Routes>
    // </BrowserRouter>
    <AddProductPopout />
  );
}
