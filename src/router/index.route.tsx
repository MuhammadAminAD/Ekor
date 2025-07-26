import AboutCompanyPage from "@/pages/AboutCompanyPage";
import ContactsPage from "@/pages/ContactsPage";
import DeliveryPage from "@/pages/DeliveryPage";
import Home from "@/pages/HomePage";
import PaymentPage from "@/pages/PaymentPage";
import { Route, Routes } from "react-router-dom";

export default function AppRouter() {
  return (
    <Routes >
        <Route path="/" element={<Home />} />
        <Route path="/delivery" element={<DeliveryPage/>}/>
        <Route path="/payment" element={<PaymentPage/>}/>
        <Route path="/contacts" element={<ContactsPage/>}/>
        <Route path="/aboutUs" element={<AboutCompanyPage/>}/>
        
      </Routes>
  )
}
