export default function Card() {
  return (
    <div className="max-w-360 mx-auto  flex flex-col md:flex-row gap-10 lg:gap-20 items-center ">
      <img
        src="/assets/img/service-1.jpg"
        alt="service-1 img"
        className="w-full md:max-w-md"
      />
      <div className="flex flex-col gap-10 items-start">
        <h2 className="text-5xl font-forum text-main">Web Design</h2>
        <p className=" text-lg text-main">
          Tell your visitor how your service can improve their life. Connect
          with the problem that they&apos;re trying to solve and address any
          objections you think they might have.
        </p>
        <p className="text-main text-lg">
          What is the biggest benefit your customer will get from this? Keep
          your target audience in mind.
        </p>
        <h3 className="text-4xl text-main">From $99</h3>
        <button className="btn btn-lg btn-outline text-main border-main ">
          Start a Project
        </button>
      </div>
    </div>
  );
}
