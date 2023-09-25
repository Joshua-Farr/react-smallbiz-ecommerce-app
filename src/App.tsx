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
  const [productList, setProductList] = React.useState<Array<Products>>([
    {
      name: "The Ultimate Digital Arsenal",
      description:
        "Unlock limitless possibilities with 'The Ultimate Digital Arsenal' – your gateway to unparalleled productivity and creativity.",
      price: 159,
      taxCategory: "exempt",
      productImages: [""],
      status: "Published",
      files: ["hello"],
      sales: 24,
      revenue: 3816,
    },
    {
      name: "Profit Powerhouse Playbook",
      description:
        "Supercharge your financial success with the 'Profit Powerhouse Playbook' – your guide to maximizing profits and business growth.",
      price: 237,
      taxCategory: "exempt",
      productImages: [""],
      status: "Published",
      files: ["hello"],
      sales: 37,
      revenue: 8769,
    },
    {
      name: "DesignMaven Masterclass",
      description:
        "Elevate your design skills with the 'DesignMaven Masterclass' – the ultimate creative journey for aspiring design experts.",
      price: 35,
      taxCategory: "exempt",
      productImages: [""],
      status: "Published",
      files: ["hello"],
      sales: 49,
      revenue: 1715,
    },
  ]);

  return (
    // <UserContext.Provider
    //   value={{ siteSettings, setSiteSettings, productList, addNewProduct }}
    // >
    //   <BrowserRouter>
    //     <Routes>
    //       <Route path="/" element={<Layout />}>
    //         <Route index element={<Home />}></Route>
    //         <Route path="store" index element={<Store />}></Route>
    //       </Route>
    //       <Route
    //         path="design"
    //         element={
    //           <Design
    //           // setStoreSettings={() =>
    //           //   setStoreSettings((settings: StoreSettings) => settings)
    //           // }
    //           />
    //         }
    //       ></Route>
    //     </Routes>
    //   </BrowserRouter>
    // </UserContext.Provider>

    <Checkout />
  );
}
