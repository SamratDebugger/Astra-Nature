import Mission from "../components/about/Mission";
import Result from "../components/about/result";
import Testimonials from "../components/about/Testimonials";
import BackgroundImg from "../components/BackgroundImg";

export default function About() {
  return (
    <>
      <BackgroundImg image="bg-[url(/assets/img/about-hero.jpg)]">
        <h1 className="text-white text-8xl font-medium ">about us</h1>
      </BackgroundImg>
      <Result />
      <Mission />
      <Testimonials />
    </>
  );
}
