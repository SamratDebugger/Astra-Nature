export default function Mission() {
  return (
    <section className="max-w-360 mx-auto px-5">
      <div>
        <img
          className="mx-auto w-full"
          src="/assets/img/about-deer.jpg"
          alt="deer"
        />
      </div>
      <div className="text-center flex-col md:flex-row flex justify-center gap-10 mt-10">
        <div className="">
          <h3 className="text-5xl">Our Mission</h3>
          <p className="text-xl">
            Build the best product that creates the most value for our
            customers, use business to inspire and implement environmentally
            friendly solutions.
          </p>
        </div>
        <div className="">
          <h3 className="text-5xl">Our Values</h3>
          <p className="text-xl">
            We strive to go above and beyond for our clients no matter the
            challenge. We aim to deliver our very best work every single day
            across our services.
          </p>
        </div>
      </div>
    </section>
  );
}
