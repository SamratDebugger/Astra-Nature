import Avatar from "../Avatar";
import About from "../components/About";
import BackgroundImg from "../components/BackgroundImg";
import Question from "../components/Question";
import Services from "../components/Services";

export default function Home() {
  return (
    <>
      <BackgroundImg image="bg-[url(/assets/img/header-hero.jpg)]">
        <h3 className=" text-4xl sm:text-5xl text-white">we all love</h3>
        <h1 className="text-7xl sm:text-9xl text-white">nature</h1>
        <p className="py-6 max-w-70 mx-auto text-white">
          Look deep into nature, and you will understand everything better.
        </p>
        <button className="btn btn-warning px-8 py-6">Get Started</button>
      </BackgroundImg>
      <Services />
      <Avatar />
      <About />
      <Question />
    </>
  );
}
