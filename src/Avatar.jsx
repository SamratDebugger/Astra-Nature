export default function Avatar() {
  return (
    <div className=" bg-green-100 py-15 px-5">
      <div className="max-w-360 mx-auto">
        <h2 className="text-center text-6xl text-warning"> “</h2>
        <p className="max-w-150 text-warning text-center text-3xl font-forum mx-auto">
          “Original and with an innate understanding of their customer’s needs,
          the team at Love Nature are always a pleasure to work with.”
        </p>
        <div className="flex justify-center items-center flex-col mt-5">
          <div className="avatar">
            <div className=" ring-offset-base-100 w-15 rounded-full ">
              <img src="/assets/img/avatar_on_home.png" />
            </div>
          </div>
          <p>Jane Miller</p>
        </div>
      </div>
    </div>
  );
}
