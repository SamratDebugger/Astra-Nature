import Avatar from "./Avatar";
import About from "./components/About";
import BackgroundImg from "./components/BackgroundImg";
import Footer from "./components/Footer";
import Question from "./components/Question";
import Services from "./components/Services";

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
