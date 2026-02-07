import { useContext, useEffect, useState } from "react";
import BackgroundImg from "../../components/BackgroundImg";
import UserForm from "../../components/UserForm";
import { ContextProvider } from "../../context/YourContext";
import { useNavigate } from "react-router";

export default function Registration() {
  const { currentUser } = useContext(ContextProvider);
  const navigate = useNavigate();

  useEffect(() => {
    if (currentUser) {
      navigate("/dashboard");
    }
  }, [currentUser]);
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
