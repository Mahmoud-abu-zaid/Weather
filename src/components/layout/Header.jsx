import { Link, NavLink } from "react-router";
export default function Header() {
  return (
    <>
      <div>
        <nav className=" flex justify-evenly items-center p-3 bg-[#1B262C] text-white">
          <div>
            <Link to="/" className="text-[35px]">
              Dark Weather
            </Link>
          </div>
          <ul className="flex list-none decoration-none gap-8">
            <li>
              <NavLink to="/" className="text-[20px]">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-[20px]">
                Download App
              </NavLink>
            </li>
            <li>
              <NavLink to="/" className="text-[20px]">
                Contact us
              </NavLink>
            </li>
          </ul>
          <div>
            <button className="bg-[#3A5E72] text-[20px] p-2 rounded-xl">Sign up</button>
          </div>
        </nav>
      </div>
    </>
  );
}
