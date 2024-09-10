import Footer from "@/components/atom/footer";
import Navbar from "@/components/atom/navbar";
import HeroSection from "@/components/hero-section";
import AboutUs from "@/components/molecules/home/about-us/about-us";
import KeyFeatures from "@/components/molecules/home/features/features";
import UserData from "@/components/molecules/home/userdata";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <HeroSection />
      <KeyFeatures />
      <AboutUs />
      <UserData />
      <Footer />
    </div>
  );
}
