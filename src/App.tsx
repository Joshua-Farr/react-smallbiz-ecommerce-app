import "./App.css";
// import Login from "./Pages/Onboarding/Login.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Layout/Layout.tsx";
import Home from "./Pages/Home/Home.tsx";
import Store from "./Pages/Store/Store.tsx";
import Design from "./Pages/Design/Design.tsx";
import { Products, StoreSettings } from "./Types.tsx";
// import DesignSideBar from "./components/DesignSideBar/DesignSideBar.tsx";
// import UserWebpage from "./components/UserWebpage/UserWebpage.tsx";
// import ProductCard from "./components/ProductCard/ProductCard.tsx";

export const UserContext = React.createContext<
  Products[] | StoreSettings | undefined | any
>(undefined);

export default function App() {
  function addNewProduct(item: Products) {
    setProductList((initial: Products[]) => [...initial, item]);
  }

  const [storeSettings, setStoreSettings] = React.useState<
    StoreSettings | undefined
  >(undefined);

  const [productList, setProductList] = React.useState<Array<Products>>([
    {
      name: "Dog Bone",
      description: "A dog bone",
      price: 233,
      taxCategory: "exempt",
      productImages: [""],
      status: "Active",
      files: ["hello"],
      sales: 12,
      revenue: 23,
    },
  ]);

  return (
    <UserContext.Provider value={{ storeSettings, productList, addNewProduct }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="store" index element={<Store />}></Route>
          </Route>
          <Route
            path="design"
            element={
              <Design
              // setStoreSettings={() =>
              //   setStoreSettings((settings: StoreSettings) => settings)
              // }
              />
            }
          ></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
