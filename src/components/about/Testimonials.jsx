export default function Testimonials() {
  return (
    <section className=" bg-green-100 py-15 px-5">
      <div className="max-w-360 mx-auto">
        <h2 className="text-center text-6xl text-warning"> “</h2>
        <p className="max-w-150 text-warning text-center text-3xl font-forum mx-auto">
          “Love Nature has an amazing team of hard working professionals. It has
          been a pleasure to meet them.”
        </p>
        <div className="flex justify-center items-center flex-col mt-5">
          <div className="avatar">
            <div className=" ring-offset-base-100 w-15 rounded-full ">
              <img src="/assets/img/avatar-about.png" />
            </div>
          </div>
          <p>Emily Davis</p>
        </div>
      </div>
    </section>
  );
}
