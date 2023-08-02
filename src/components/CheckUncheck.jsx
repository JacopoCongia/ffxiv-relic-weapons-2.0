import Button from "./Button";

function CheckUncheck({ checkAll, uncheckAll, weapons, type }) {
  const allChecked = weapons.map((weapon) => ({
    ...weapon,
    isSelected: true
  }));

  const allUnchecked = weapons.map((weapon) => ({
    ...weapon,
    isSelected: false
  }));

  return (
    <div
      className="
      flex 
      w-[100%] 
      flex-col 
      justify-center 
      gap-2 
      sm:flex-row 
      sm:gap-4"
    >
      <Button
        onClick={() => checkAll(allChecked, type)}
        check
      >
        Check All
      </Button>
      <Button
        onClick={() => uncheckAll(allUnchecked, type)}
        uncheck
      >
        Uncheck All
      </Button>
    </div>
  );
}

export default CheckUncheck;
