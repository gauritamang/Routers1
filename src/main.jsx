import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import Invoices from "./Components/Invoices/Invoices.jsx";
import Expences from "./Components/Expences/Expences.jsx";
import Bills from "./Components/Bills.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>

          <Route path="/invoices" element={<Invoices />}>
          <Route index element={<div>i am index Route like a default child </div>} />
            <Route path=":invoiceid" element={<Bills/>}/>
          </Route>

            {/* if you do this then the chield of invoices is opened in new tab without parent only childre so i think it will be better  */}
          {/* <Route path="/invoices" element={<Invoices/>} />
          <Route path="/invoices/:invoiceid" element={<Bills/>}/> */}

          <Route path="/expences" element={<Expences />} />
          <Route path="*" element={<div>error no page found </div>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);

// if you want  to render its child then you have to call the outlet component from react-router-dom in parent component so you have to call theis outlet in parent compone
