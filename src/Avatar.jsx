export default function Avatar() {
  return (
    <div className="max-w-360 mx-auto my-30 ">
      <h2 className="text-center text-6xl text-warning"> “</h2>
      <p className="text-warning text-center text-3xl  mx-auto">
        “Original and with an innate understanding of their customer’s needs,
        the team at Love Nature are always a pleasure to work with.”
      </p>
      <div className="avatar ">
        <div>
          <div className=" mx-auto ring-offset-base-100 w-15 rounded-full ">
            <img src="/public/assets/img/avatar_on_home.png" />
          </div>
          <p>Jane Miller</p>
        </div>
      </div>
    </div>
  );
}
