import Hero from "./Hero";
import Navbar from "./Navbar";

export default function BackgroundImg({ image, children }) {
  return (
    <section className={`${image} bg-no-repeat bg-cover bg-center relative`}>
      <div className="size-full bg-black/30 absolute"></div>
      <Navbar />
      <Hero>{children}</Hero>
    </section>
  );
}
