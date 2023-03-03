import AromaticSection from "./components/AromaticSection";
import Cards from "./components/Cards";
import EthiopiaSection from "./components/EthiopiaSection";
import MasterOrigins from "./components/MasterOrigins";
import NavBar from "./components/NavBar";
import SecondSection from "./components/SecondSection";
import SectionCapsulas from "./components/SectionCapsulas";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <SectionCapsulas/>
      <SecondSection/>
      <EthiopiaSection/>
      <AromaticSection/>
      <MasterOrigins/>
    </div>
  );
}

export default App;
