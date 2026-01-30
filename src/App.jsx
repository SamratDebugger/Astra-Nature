import Avatar from "./Avatar";
import About from "./components/About";
import BackgroundImg from "./components/BackgroundImg";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Question from "./components/Question";
import Services from "./components/services";

function App() {
  return (
    <>
      <BackgroundImg />
      <Services />
      <Avatar />
      <About />
      <Question />
      <Footer />
    </>
  );
}

export default App;
