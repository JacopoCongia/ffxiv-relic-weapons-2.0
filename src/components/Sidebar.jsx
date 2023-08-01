import { Link } from "react-router-dom";

function Sidebar({ isVisible }) {
  const activeStyle =
    "underline underline-offset-[5px] decoration-2 hover:opacity-80";
  const inactiveStyle = "hover:opacity-80";

  return (
    <div
      className={`fixed z-10 flex min-h-[100vh] min-w-[250px] translate-x-[-100%] flex-col gap-5 bg-neutral-700 p-7 text-center font-bold text-white duration-[0.5s] min-[1000px]:fixed min-[1000px]:min-w-[250px] min-[1000px]:translate-x-[0] ${
        isVisible && "translate-x-[0]"
      }`}
    >
      <div className="flex flex-col gap-2">
        <Link to="/endwalker">Endwalker</Link>
        <ul className="ml-2 text-[0.8rem]">
          <li>DoW / DoM</li>
          <li>
            <Link to="endwalkerdoldoh">DoH / DoL</Link>
          </li>
        </ul>
      </div>
      <Link to="/shadowbringers">Shadowbringers</Link>
      <Link to="/stormblood">Stormblood</Link>
      <h1 className={inactiveStyle}>Heavensward</h1>
      <h1 className={inactiveStyle}>A Realm Reborn</h1>
    </div>
  );
}

export default Sidebar;
