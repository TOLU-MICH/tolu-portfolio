import { ReactNode } from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../common/NavBar";
import SideBar from "../common/SideBar";
import Footer from "../common/Footer";

interface GuestLayoutProps {
  children?: ReactNode;
}

const GuestLayout = ({ children }: GuestLayoutProps) => {
  return (
    <div className="relative">
      <NavBar />
      <SideBar />
      {children ? children : <Outlet />}
      <Footer />
    </div>
  );
};

export default GuestLayout;
