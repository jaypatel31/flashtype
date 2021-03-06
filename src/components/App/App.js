import './App.css';
import Nav from "../Nav/Nav";
import Landing from "../Landing/Landing";
import Footer from "../Footer/Footer"
import ChallengeSection from "../ChallengeSection/ChallengeSection"

function App() {
  return (
    <div className="app">
      <Nav/>
      <Landing/>
      <ChallengeSection/>
      <Footer/>
    </div>
  );
}

export default App;
