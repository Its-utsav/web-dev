import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Header() {
  return (
    <>
      <header className="shodow sticky z-10 top-c">
        <nav className="bg-white  border-gray-200 px-4 lg:px-6  py-2.5">
          <div className="flex flex-wrap">
            <Link href="#">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="logo"
              />
            </Link>

            <div>
              <Link> </Link>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}
