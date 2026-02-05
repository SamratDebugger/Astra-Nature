import BackgroundImg from "../../components/BackgroundImg";
import UserForm from "../../components/UserForm";

export default function Registration() {
  return (
    <main>
      <BackgroundImg image="bg-[url(/assets/img/services-hero.jpg)]">
        <h1 className="text-white text-7xl font-medium ">Registration</h1>
      </BackgroundImg>
      <section className="m-5">
        <UserForm isLogin={false} />
      </section>
    </main>
  );
}
