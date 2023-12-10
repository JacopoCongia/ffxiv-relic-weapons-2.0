import Button from "./Button";

function CheckUncheck({ checkAll, uncheckAll, weapons }) {
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
        onClick={() => checkAll(weapons)}
        check
      >
        Check All
      </Button>
      <Button
        onClick={() => uncheckAll(weapons)}
        uncheck
      >
        Uncheck All
      </Button>
    </div>
  );
}

export default CheckUncheck;
