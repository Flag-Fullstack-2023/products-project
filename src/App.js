import { useEffect, useState } from "react";
import { products } from "./components/product-list/data";

import Popup from "./components/popup/popup";
import ProductList from "./components/product-list/product-list";
import FilterMenu from "./components/filter-menu/FilterMenu";
import { TopMenu } from "./components/top-menu/TopMenu";
import axios from "axios";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./components/products/Products";
import { Layout } from "./components/layout/Layout";
import { Product } from "./components/product/Product";

// jsx uma maneira de termos javascript mas estruturado de uma forma html-esca

// no jsx, quando temos um componente de React (button) o que seriam attrs em html,
// é um acrescento ao objeto de propriedas que o nosso componente(Funciontal Component) recebe

// jsx
// props de um componente
// css vs css modules vs sass vs styled components
// state (react hooks)
// conditional rendering
// map; list; keys

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      { path: "/", element: <Home /> },
      { path: "/about", element: <About /> },
      { path: "/products", element: <Products /> },
      {
        path: "/products/:id",
        loader: async (props) => {
          const {
            params: { id },
          } = props;

          const productData = await axios.get(
            `https://flag-2023.proxy.beeceptor.com/products/${id}`
          );

          return productData.data
        },
        element: <Product />,
      },
    ],
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

/**
 * App.js (gere o estado do popup)
 *  Popup
 *  ProductList // passa a gestao do estado de popup
 *    ProductCard // passa a gestao do estado de popup
 */

export default App;
