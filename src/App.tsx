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

// What kind of context to keep here?
// Site Settings
// All Products

export const UserContext = React.createContext<Array<Products>>([]);

export default function App() {
  const [storeSettings, setStoreSettings] = React.useState<
    Array<StoreSettings>
  >({
    header: true,
    logo: true,
    name: true,
    description: true,
    descriptionText: "THIS IS THE DESCRIPTION",
    subscriberForm: true,
    thumbnailSize: "small",
    showProductDetails: true,
  });
  // return <Login />;
  const [productList, setProductList] = React.useState<Array<Products>>([]);

  function addNewProduct(item: Products) {
    setProductList((initial) => [...initial, item]);
  }

  return (
    <UserContext.Provider value={{ addNewProduct }}>
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
