import BackgroundImg from "../components/BackgroundImg";
import Card from "../components/services/Card";

export default function Services() {
  return (
    <main>
      <BackgroundImg image="bg-[url(/assets/img/services-hero.jpg)]">
        <h1 className="text-white text-7xl font-medium ">our services</h1>
      </BackgroundImg>
      <section className="p-5">
        <Card />
      </section>
    </main>
  );
}
