import { Outlet } from "react-router-dom";
import Header from "../organisms/Header";
import Footer from "../organisms/Footer";

export default function BaseLayout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
