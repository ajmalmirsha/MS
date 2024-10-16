import Banner from "@/components/banner/Banner";
import Footer from "@/components/footer/Footer";
import InfoContainer from "@/components/infoContainer/InfoContainer";
import Insights from "@/components/Insights/Insights";
import ServiceSection from "@/components/serviceSection/ServiceSection";
import SuccessCard from "@/components/SuccessCard/SuccessCard";
import VideoPlayer from "@/components/videoPlayer/VideoPlayer";

export default function Home() {
  return (
    <div>
      <Banner />
      <VideoPlayer />
      <ServiceSection />
      <SuccessCard />
      <InfoContainer />
      <Insights />
      <Footer />
    </div>
  );
}
