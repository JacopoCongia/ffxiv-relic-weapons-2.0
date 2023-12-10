import useWeaponsData from "../hooks/use-weapons-data";
import useAuth from "../hooks/use-auth";

function Tool({ tool }) {
  const { selectWeapon, test } = useWeaponsData();
  const { currentUser } = useAuth();

  const isSelected = test.some((el) => el === tool.id); // Testing new weapon method

  const styles = {
    opacity: isSelected ? "25%" : "100%"
  };

  return (
    <div className="group flex text-center flex-col relative items-center text-white text-[0.9rem] gap-1">
      {currentUser?.emailVerified ? (
        <>
          <span className="invisible absolute bottom-[105%] left-[50%] ml-[-60px] w-[120px] rounded-[6px] bg-neutral-700 p-[10px] text-[15px] opacity-[92%] group-hover:visible">
            {tool.wpnName}
          </span>
          <div
            onClick={() => selectWeapon(tool.id)}
            style={styles}
            className="cursor-pointer text-[14px]"
            id={tool.id}
          >
            <img
              className="w-[70px]"
              src={tool.icon}
            />
            <p>{tool.wpnJobShort}</p>
          </div>
        </>
      ) : (
        <>
          <span className="invisible absolute bottom-[105%] left-[50%] ml-[-60px] w-[120px] rounded-[6px] bg-neutral-700 p-[10px] text-[0.8rem] font-bold opacity-[95%] group-hover:visible">
            {tool.wpnName}
          </span>
          <div
            style={styles}
            className="cursor-not-allowed text-[14px]"
            id={tool.id}
          >
            <img
              className="w-[70px]"
              src={tool.icon}
            />
            <p>{tool.wpnJobShort}</p>
          </div>
        </>
      )}
    </div>
  );
}

export default Tool;
