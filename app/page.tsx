import Banner from "./components/Banner";
import Course from "./components/Course";
import Header from "./components/Header";
import Footer from "./components/Footer"

export default function Home() {
  return (
    <div className="bg-[#3d3d3d] text-white text-center">
       <Header/>
       <Banner/>
       <Course/>
       <Footer/>
    </div>
  );
}
