import Hero from "./Hero";
import Navbar from "./Navbar";

export default function BackgroundImg() {
  return (
    <div className="bg-[url(/assets/img/header-hero.jpg)] bg-no-repeat bg-cover relative">
      <div className="size-full bg-black/30 absolute"></div>
      <Navbar />
      <Hero />
    </div>
  );
}
