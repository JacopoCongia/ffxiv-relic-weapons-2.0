function Header({ title }) {
  return (
    <header className="flex justify-center bg-headerWeapons py-[1em] text-[1.2rem] font-bold text-neutral-100 min-[600px]:text-[1.6rem]">
      <h1>{title} Weapons Checklist</h1>
    </header>
  );
}

export default Header;
