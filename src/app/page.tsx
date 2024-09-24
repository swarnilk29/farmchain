
import FeaturedCourses from "@/components/FeaturedCourses";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructors from "@/components/Instructors";
import LearnMore from "@/components/FeaturedCourses";



export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">
      <HeroSection />
      <LearnMore />
      {/* <WhyChooseUs /> */}
      {/* <MusicSchoolTestimonials /> */}
      {/* <UpcomingWebinars /> */}
      <Instructors />
      <Footer />
    </main>
  );
}
