import Footer from "./components/footer";
import HomeServices from "./components/Homepage/Banner";
import { ChatWidget } from "./components/Homepage/ChatWidget";
import DeviderBanner from "./components/Homepage/DevierBanner";
import HomeRepairAndInstallation from "./components/Homepage/HomeRepair";
import MostBookedServices from "./components/Homepage/MostBooked";
import RepairService from "./components/Homepage/RepairService";
import StatsBar from "./components/Homepage/Stats";

export default function Home() {
  return (
    <div className="">
      <HomeServices />
      <StatsBar />
      <MostBookedServices />
      <RepairService />
      <HomeRepairAndInstallation />
      <DeviderBanner />
      <ChatWidget />
    </div>
  );
}
