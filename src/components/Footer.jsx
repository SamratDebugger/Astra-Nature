import NavMenus from "./NavMenus";

export default function Footer() {
  return (
    // <footer className="footer  footer-center bg-base-200 text-base-content rounded p-10 max-w-360 mx-auto">
    //   <nav className="grid grid-flow-col gap-4">
    //     <a className="link link-hover">About us</a>
    //     <a className="link link-hover">Contact</a>
    //     <a className="link link-hover">Jobs</a>
    //     <a className="link link-hover">Press kit</a>
    //   </nav>
    //   <div>
    //     <img src="/assets/img/logo-green.svg" alt="" />
    //   </div>
    //   <aside>
    //     <p>Love Nature by Tyler Moore</p>
    //   </aside>
    // </footer>
    <footer className="navbar  py-10 max-w-360 mx-auto">
      <div className="navbar-start">
        <ul className="menu menu-horizontal px-1">
          <NavMenus />
        </ul>
      </div>
      <div className="navbar-center hidden lg:flex">
        <a>
          <img src="/assets/img/logo-green.svg" alt="logo green" />
        </a>
      </div>
      <div className="navbar-end">
        <p>Love Nature by Tyler Moore</p>
      </div>
    </footer>
  );
}
