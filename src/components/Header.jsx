function Header({ title, dow, doh, dol }) {
  const bgColor = dow ? "bg-dark-teal-800" : "bg-headerTools";
  const textColor = dow ? "text-dark-teal-100" : "text-headerToolsText";

  return (
    <header
      className={`${bgColor} ${textColor} flex justify-center py-[1em] text-[1.3rem] font-bold min-[600px]:text-[1.8rem]`}
    >
      <h1>{`${dow ? title + " " + "Weapons Checklist" : doh ? "Crafters" : "Gatherers"}`}</h1>
    </header>
  );
}

export default Header;
