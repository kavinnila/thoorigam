import Image from "next/image";
import Footer from "./pages/Footer";
import Hero from "./pages/Hero";
import Landing from "./pages/Landing";
import CursorTrail from "./components/CursorTrail";
export default function Home() {
  return (
    <main>
      <div className="fixed inset-0 -z-10 min-h-screen w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
      <CursorTrail/>
      <Hero/>
      <Landing/>
      <Footer/>
    </main>
  );
}
