import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
export default function MainLayout() {
  return (
    <div>
      <NavBar />
      <main className="flex flex-col gap-y-[64px] xl:gap-y-[128px]">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
}
