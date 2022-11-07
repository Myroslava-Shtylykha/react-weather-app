import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

import City from "./City";
import Card from "./Card";
import Search from "./Search";
import Link from "./Link";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <div className="cont">
    <StrictMode>
      <Search />
      <Card />
      <City />
      <Link />
    </StrictMode>
  </div>
);
