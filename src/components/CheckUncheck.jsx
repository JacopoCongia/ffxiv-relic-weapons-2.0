import useWeaponsData from "../hooks/use-weapons-data";
import Button from "./Button";

function CheckUncheck({ weapons }) {
  const { checkAll, uncheckAll } = useWeaponsData();

  return (
    <div className="flex w-[100%] flex-col justify-center gap-2 sm:flex-row sm:gap-4">
      <Button onClick={() => checkAll(weapons)} check>
        Check All
      </Button>
      <Button onClick={() => uncheckAll(weapons)} uncheck>
        Uncheck All
      </Button>
    </div>
  );
}

export default CheckUncheck;
