function Header({ title }) {
  return (
    <header
      className="
        flex 
        justify-center 
        bg-emerald-600 
        px-10 
        py-6 
        text-[4.8vw]
        font-bold 
        text-white 
        sm:text-[1.875rem] 
        lg:text-[2.25rem]
      "
    >
      <h1>{title} Weapons Checklist</h1>
    </header>
  );
}

export default Header;
