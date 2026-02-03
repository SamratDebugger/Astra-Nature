export default function Card({ service }) {
  return (
    <div className="max-w-360 mx-auto  flex flex-col md:flex-row gap-10 lg:gap-20 items-center ">
      <img
        src={service.img}
        alt={service.title}
        className="w-full md:max-w-md"
      />
      <div className="flex flex-col gap-10 items-start">
        <h2 className="text-5xl font-forum text-main">{service.title}</h2>
        <p className="text-lg text-main">{service.description}</p>
        <p className="text-lg text-main">{service.shortDescription}</p>
        <h3 className="text-4xl text-main">From ${service.price}</h3>
        <button className="btn btn-lg btn-outline text-main border-main ">
          Start a Project
        </button>
      </div>
    </div>
  );
}
