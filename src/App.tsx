import "./App.css";
import Login from "./Pages/Onboarding/Login.tsx";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import React from "react";
import Layout from "./Layout/Layout.tsx";
import Home from "./Pages/Home/Home.tsx";
import Store from "./Pages/Store/Store.tsx";
import Design from "./Pages/Design/Design.tsx";
// import DesignSideBar from "./components/DesignSideBar/DesignSideBar.tsx";
import UserWebpage from "./components/UserWebpage/UserWebpage.tsx";
import ProductCard from "./components/ProductCard/ProductCard.tsx";

type Products = {
  name: string;
  description: string;
  price: number;
  taxCategory: string;
  productImages: string[];
  files: string[];
};

type StoreSettings = {
  header: boolean;
  logo: boolean;
  name: boolean;
  description: boolean;
  descriptionText: string;
  subscriberForm: boolean;
  thumbnailSize: string;
  showProductDetails: boolean;
};

export const UserContext = React.createContext();

export default function App() {
  // return <Login />;
  const [productList, setProductList] = React.useState<Array<Products>>([]);
  // const [storeSettings, setStoreSettings] = React.useState<
  //   <StoreSettings>();

  return (
    <UserContext.Provider value={{ productList }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="store" index element={<Store />}></Route>
          </Route>
          <Route path="design" element={<Design />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    // <ProductCard />
  );
}
