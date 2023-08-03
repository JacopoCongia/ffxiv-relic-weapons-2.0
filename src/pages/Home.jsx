export default function Home() {
  return (
    <div className="min-[1000px]:pl-[250px] duration-[0.5s] pb-[3em] flex flex-col text-center font-bold text-white">
      <img
        className="max-w-[800px] w-[100%] m-auto p-[0.8em]"
        src="/final_fantasy_xiv_logo.png"
        alt="the original game logo depicting the different game races and the text saying Final Fantasy XIV Online"
      />
      <div className="px-[2em] font-normal text-[2rem] flex flex-col gap-[1em]">
        <p>
          Welcome to the{" "}
          <span className="text-emerald-400 text-[2.2rem] font-bold">
            Final Fantasy XIV Relic Weapons
          </span>{" "}
          checklist website!
        </p>
        <p>Use the links in the sidebar to start exploring!</p>
      </div>
    </div>
  );
}
