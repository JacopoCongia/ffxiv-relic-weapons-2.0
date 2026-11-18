// Page title bar. Tool pages can pass `guide` ({ label, url }) to show a link to
// an outside guide under the title.
function Header({ title, dow, doh, guide }) {
  const bgColor = dow ? "bg-dark-teal-800" : "bg-headerTools";
  const textColor = dow ? "text-dark-teal-100" : "text-headerToolsText";

  return (
    <header
      className={`${bgColor} ${textColor} flex flex-col items-center gap-1 py-[1em] text-[1.3rem] font-bold min-[600px]:text-[1.8rem]`}
    >
      <h1>{`${dow ? title + " " + "Weapons Checklist" : doh ? "Crafters" : "Gatherers"}`}</h1>
      {guide && (
        <p className="px-[1em] text-center text-[0.9rem] font-normal min-[600px]:text-[1rem]">
          Guide:{" "}
          <a
            className="underline underline-offset-[5px] hover:text-[#ffffff]"
            href={guide.url}
            target="_blank"
            rel="noreferrer"
          >
            {guide.label} ↗
          </a>
        </p>
      )}
    </header>
  );
}

export default Header;
