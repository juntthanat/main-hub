import { useEffect, useState } from "react";

export default function NavBar() {
  const [showMenu, setShowMenu] = useState(false);

  const handleClickHamburgerMenu = () => {
    setShowMenu((prev) => !prev);
  };

  return (
    <div className="h-full w-full">
      <div
        onClick={handleClickHamburgerMenu}
        className="absolute h-[40px] w-[40px] z-20 bg-[#122030] rounded top-12 left-6 shadow-hamburger cursor-pointer"
      >
        {[
          [
            "1",
            "top",
            "30%",
            showMenu ? "rotate-45 translate-y-2" : "-translate-y-1/2",
          ],
          ["2", "mid", "50%", showMenu ? "hidden" : ""],
          [
            "3",
            "bot",
            "70%",
            showMenu ? "-rotate-45 -translate-y-2" : "translate-y-1/2",
          ],
        ].map(([id, idName, topDistance, r]) => (
          <span
            style={{ top: topDistance }}
            key={id}
            id={idName}
            className={
              "h-[6%] w-[60%] bg-white absolute rounded ease duration-300 left-[50%] transform -translate-x-1/2 " +
              r
            }
          ></span>
        ))}
      </div>
      <div
        className={`absolute z-10 h-full transition-all duration-200  bg-[#122030] overflow-hidden shadow-black shadow-2xl ${
          showMenu ? "w-1/6" : "w-0"
        }`}
      >
        <div className=" flex shrink-0 w-full text-5xl font-extrabold justify-start ml-16 overflow-hidden p-10 pointer-events-none">
          MENU
        </div>
        <ul>
          {[
            ["1", "/", "fas fa-tv", "DashBoard"],
            ["2", "profile", "far fa-user", "Profile"],
            ["3", "game", "fa-solid fa-gamepad", "Game"],
            ["4", "calculator", "fa-solid fa-calculator", "Calculator"],
            [
              "5",
              "portfolio",
              "far fa-address-book",
              "Portfolio",
            ],
            ["6", "setting", "fas fa-cogs", "Setting"],
          ].map(([id, url, icon, title]) => (
            <li key={id} className="hover:bg-sky-900 text-xl">
              <a
                href={url}
                className="font-medium p-5 block capitalize ease-out duration-200 flex items-center shrink-0"
              >
                <i className={icon + " shrink-0 w-10 text-center"}></i> {title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
