import "./App.css";
// import Login from "./Pages/Onboarding/Login.tsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Layout from "./Layout/Layout.tsx";
import Home from "./Pages/Home/Home.tsx";
import Store from "./Pages/Store/Store.tsx";
import Design from "./Pages/Design/Design.tsx";
import { Products, StoreSettings } from "./Types.tsx";
import Checkout from "./Pages/Checkout/Checkout.tsx";
import SingleProductPage from "./components/SingleProductPage/SingleProductPage.tsx";
// import DesignSideBar from "./components/DesignSideBar/DesignSideBar.tsx";
// import UserWebpage from "./components/UserWebpage/UserWebpage.tsx";
// import ProductCard from "./components/ProductCard/ProductCard.tsx";

import { productTestData } from "./ProductTestData.tsx";

export const UserContext = React.createContext<
  Products[] | StoreSettings | undefined | any
>(undefined);

export default function App() {
  function addNewProduct(item: Products) {
    setProductList((initial: Products[]) => [...initial, item]);
  }

  const [shoppingCart, setShoppingCart] = React.useState<Array<Products>>([]);

  const [siteSettings, setSiteSettings] = React.useState({
    header: true,
    logo: true,
    name: true,
    description: true,
    descriptionText:
      "Discover a world of digital treasures at our E-commerce store. Instantly download top-quality digital products for all your needs. Shop now!",
    subscribe: true,
    thumbnailSize: "string",
    details: true,
  });

  //Eventually get this data from backend
  const [productList, setProductList] =
    React.useState<Array<Products>>(productTestData);

  console.log(productList);

  return (
    <UserContext.Provider
      value={{
        siteSettings,
        setSiteSettings,
        productList,
        addNewProduct,
        shoppingCart,
        setShoppingCart,
      }}
    >
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
          <Route path="/product/:id" element={<SingleProductPage />}></Route>
          <Route path="/checkout" element={<Checkout />}></Route>
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
