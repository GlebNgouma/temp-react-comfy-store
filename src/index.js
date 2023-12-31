import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import { ProductsProvider } from "./context/products_context";
import { FilterProvider } from "./context/filter_context";
import { CartProvider } from "./context/cart_context";
import { UserProvider } from "./context/user_context";
import { Auth0Provider } from "@auth0/auth0-react";

// dev-ehdguyczdfd4ikjz.us.auth0.com
//client id : WRse34tyEs21KjRfhqyDlwJmPyXlRgJK

const domain = process.env.REACT_APP_AUTH_DOMAIN;
const clientID = process.env.REACT_APP_AUTH_CLIENT_ID;

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientID}
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
);
