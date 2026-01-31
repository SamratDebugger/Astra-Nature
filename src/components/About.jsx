export default function About() {
  return (
    // <div className="flex max-w-360 mx-auto p-5 justify-evenly items-center">
    //   <div>
    //     <h3>ABOUT US</h3>
    //     <h2 className="text-4xl w-120">
    //       Tell website visitors who you are and why they should choose your
    //       business.
    //     </h2>
    //     <p className="w-130">
    //       Because when a visitor first lands on your website, you're a stranger
    //       to them. They have to get to know you in order to want to read your
    //       blog posts, subscribe to your email newsletter, or buy what you're
    //       selling.
    //     </p>
    //     <button>Find Out More</button>
    //   </div>
    //   <div>
    //     <img src="/public/assets/img/about-img.jpg" alt="leaf" />
    //   </div>
    // </div>
    <div className="hero max-w-360 mx-auto place-items-stretch py-10">
      <div className=" gap-15 hero-content max-w-full flex-col lg:flex-row-reverse justify-between p-5  ">
        <img
          src="/public/assets/img/about-img.jpg"
          alt="leaf"
          className="lg:max-w-sm w-full"
        />
        <div>
          <h3>ABOUT US</h3>
          <h2 className="text-4xl  lg:max-w-120">
            Tell website visitors who you are and why they should choose your
            business.
          </h2>
          <p className="py-6 lg:max-w-130">
            Because when a visitor first lands on your website, you're a
            stranger to them. They have to get to know you in order to want to
            read your blog posts, subscribe to your email newsletter, or buy
            what you're selling.
          </p>
          <button className="btn btn-lg border bg-transparent">
            Find Out More
          </button>
        </div>
      </div>
    </div>
  );
}
