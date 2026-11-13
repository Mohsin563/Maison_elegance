import { BagProvider } from "./context/BagContext";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Ticker from "./components/Ticker";
import Collections from "./components/Collections";
import Editorial from "./components/Editorial";
import BestSellers from "./components/BestSellers";
import ObjectOfDesire from "./components/ObjectOfDesire";
import Craftsmanship from "./components/Craftsmanship";
import BehindDesign from "./components/BehindDesign";
import StyleYourWay from "./components/StyleYourWay";
import Story from "./components/Story";
import Exclusive from "./components/Exclusive";
import Newsletter from "./components/Newsletter";
import Footer from "./components/Footer";
import BagDrawer from "./components/BagDrawer";

export default function App() {
  return (
    <BagProvider>
      <Navbar />
      <main>
        <Hero />
        <Ticker />
        <Collections />
        <Editorial />
        <BestSellers />
        <ObjectOfDesire />
        <Craftsmanship />
        <BehindDesign />
        <StyleYourWay />
        <Story />
        <Exclusive />
        <Newsletter />
      </main>
      <Footer />
      <BagDrawer />
    </BagProvider>
  );
}
