import useWeaponsData from "../hooks/use-weapons-data";
import Button from "./Button";

function CheckUncheck({ weapons }) {
  const { checkAll, uncheckAll } = useWeaponsData();

  return (
    <div className="flex w-full flex-col justify-center gap-2 min-[600px]:w-[400px] min-[600px]:flex-row min-[600px]:gap-4">
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
