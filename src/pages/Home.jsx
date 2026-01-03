export default function Home() {
  return (
    <div className="flex flex-col pb-[5em] text-center font-[Cinzel] text-neutral-100 duration-[0.5s] min-[1000px]:pl-[250px]">
      <img
        className="m-auto w-full max-w-[800px] p-[0.8em]"
        src="/final_fantasy_xiv_logo.png"
        alt="the original game logo depicting the different game races and the text saying Final Fantasy XIV Online"
      />
      <div className="flex flex-col gap-[1em] px-[2em] text-[1.2rem] min-[600px]:gap-[0.3em] min-[600px]:text-[1.5rem]">
        <p>
          Welcome to the{" "}
          <span className="font-bold">Final Fantasy XIV Relic Weapons</span>{" "}
          checklist website!
        </p>
        <p>Use the links in the sidebar to start exploring!</p>
      </div>
    </div>
  );
}
