function ToolsTable({
  minerMaterialOne,
  minerMaterialTwo,
  minerMaterialThree,
  botanistMaterialOne,
  botanistMaterialTwo,
  botanistMaterialThree,
  fisherMaterialOne,
  fisherMaterialTwo,
  fisherMaterialThree,
  fisherMaterialFour,
}) {
  return (
    <>
      <table className="hidden border m-5 text-white text-[0.9rem] min-[1200px]:text-[1rem] min-[900px]:table">
        <thead className="bg-neutral-700 text-left">
          <tr>
            <th className="px-5 py-3">Job</th>
            <th>Item</th>
            <th>Reward</th>
            <th className="pr-5">Min</th>
            <th className="pr-5">Max</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="pt-5 px-5">Miner</td>
            <td className="pt-5">
              <a
                href={minerMaterialOne.wiki}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <img
                  className="w-[24px]"
                  src={minerMaterialOne.icon}
                />
                {minerMaterialOne.name}
              </a>
            </td>
            <td className="pt-5">
              <a className="flex items-center gap-2">
                <img
                  className="w-[24px]"
                  src={minerMaterialTwo.icon}
                />
                {minerMaterialTwo.name}
              </a>
            </td>
            <td className="pt-5">{minerMaterialOne.minCollectability}</td>
            <td className="pt-5">{minerMaterialOne.maxCollectability}</td>
          </tr>
          <tr className="border-b">
            <td></td>
            <td className="pt-5 pb-5">
              <a
                href={minerMaterialThree.wiki}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <img
                  className="w-[24px]"
                  src={minerMaterialThree.icon}
                />
                {minerMaterialThree.name}
              </a>
            </td>
          </tr>
          <tr>
            <td className="pt-5 px-5">Botanist</td>
            <td className="pt-5">
              <a
                href={botanistMaterialOne.wiki}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <img
                  className="w-[24px]"
                  src={botanistMaterialOne.icon}
                />
                {botanistMaterialOne.name}
              </a>
            </td>

            <td className="pt-5">
              <div className="flex items-center gap-2">
                <img
                  className="w-[24px]"
                  src={botanistMaterialTwo.icon}
                />
                {botanistMaterialTwo.name}
              </div>
            </td>
            <td className="pt-5">{botanistMaterialOne.minCollectability}</td>
            <td className="pt-5">{botanistMaterialOne.maxCollectability}</td>
          </tr>
          <tr className="border-b">
            <td></td>
            <td className="pb-5 pt-5">
              <a
                href={botanistMaterialThree.wiki}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <img
                  className="w-[24px]"
                  src={botanistMaterialThree.icon}
                />
                {botanistMaterialThree.name}
              </a>
            </td>
          </tr>
          <tr>
            <td className="pt-5 px-5">Fisher</td>
            <td className="pt-5">
              <a
                href={fisherMaterialOne.wiki}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <img
                  className="w-[24px]"
                  src={fisherMaterialOne.icon}
                />
                {fisherMaterialOne.name}
              </a>
            </td>

            <td className="pt-5">
              <div className="flex items-center gap-2">
                <img
                  className="w-[24px]"
                  src={fisherMaterialTwo.icon}
                />
                {fisherMaterialTwo.name}
              </div>
            </td>
            <td className="pt-5">{fisherMaterialOne.minCollectability}</td>
            <td className="pt-5">{fisherMaterialOne.maxCollectability}</td>
          </tr>
          <tr>
            <td></td>
            <td className="pb-5 pt-5">
              <a
                href={fisherMaterialThree.wiki}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              >
                <img
                  className="w-[24px]"
                  src={fisherMaterialThree.icon}
                />
                {fisherMaterialThree.name}
              </a>
            </td>
            <td className="pb-5 pt-5">
              <div className="flex items-center gap-2">
                <img
                  className="w-[24px]"
                  src={fisherMaterialFour.icon}
                />
                {fisherMaterialFour.name}
              </div>
            </td>
            <td className="pt-5 pb-5">
              {fisherMaterialThree.minCollectability}
            </td>
            <td className="pt-5 pb-5">
              {fisherMaterialThree.maxCollectability}
            </td>
          </tr>
        </tbody>
      </table>

      {/* Small Screens */}

      <div className="flex flex-col gap-5 min-[900px]:hidden">
        <div className="m-1 px-5 pt-5 pb-5 flex flex-col gap-3 border rounded text-[0.9rem] items-start text-left">
          <h1 className="text-[1.2rem] font-bold bg-[#5f432f] text-[#fcf1e1] px-5 py-1 rounded">
            Miner
          </h1>
          <p className="text-[1rem] rounded font-bold bg-[#F3D9B1] text-[#4e3727] px-4 py-[0.3em]">
            Gather
          </p>
          <a
            href={minerMaterialOne.wiki}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:underline hover:underline-offset-4"
          >
            <img
              className="w-[24px]"
              src={minerMaterialOne.icon}
            />
            {minerMaterialOne.name}
          </a>
          <a
            href={minerMaterialThree.wiki}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:underline hover:underline-offset-4"
          >
            <img
              className="w-[24px]"
              src={minerMaterialThree.icon}
            />
            {minerMaterialThree.name}
          </a>
          <p className="text-[1rem] text-center flex items-center gap-2 mt-2 rounded font-bold bg-[#F3D9B1] text-[#4e3727] px-4 py-[0.3em]">
            Trade
            <img
              className="w-[20px]"
              src={minerMaterialOne.icon}
            />
            for
          </p>
          <div className="flex gap-3 items-center">
            <img
              className="w-[24px]"
              src={minerMaterialTwo.icon}
            />
            {minerMaterialTwo.name}
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              {minerMaterialOne.minCollectability} | 1x
              <img
                className="w-[20px] inline"
                src={minerMaterialTwo.icon}
              />
            </div>
            <div className="flex items-center gap-1">
              {minerMaterialOne.maxCollectability} | 3x
              <img
                className="w-[20px] inline"
                src={minerMaterialTwo.icon}
              />
            </div>
          </div>
        </div>
        <div className="m-1 px-5 pt-5 pb-5 flex flex-col gap-3 border rounded text-[0.9rem] items-start text-left">
          <h1 className="text-[1.2rem] font-bold bg-[#5f432f] text-[#fcf1e1] px-5 py-1 rounded">
            Botanist
          </h1>
          <p className="text-[1rem] rounded font-bold bg-[#F3D9B1] text-[#4e3727] px-4 py-[0.3em]">
            Gather
          </p>
          <a
            href={botanistMaterialOne.wiki}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:underline hover:underline-offset-4"
          >
            <img
              className="w-[24px]"
              src={botanistMaterialOne.icon}
            />
            {botanistMaterialOne.name}
          </a>
          <a
            href={botanistMaterialThree.wiki}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:underline hover:underline-offset-4"
          >
            <img
              className="w-[24px]"
              src={botanistMaterialThree.icon}
            />
            {botanistMaterialThree.name}
          </a>
          <p className="text-[1rem] text-center flex items-center gap-2 mt-2 rounded font-bold bg-[#F3D9B1] text-[#4e3727] px-4 py-[0.3em]">
            Trade
            <img
              className="w-[20px]"
              src={botanistMaterialOne.icon}
            />
            for
          </p>
          <div className="flex gap-3 items-center">
            <img
              className="w-[24px]"
              src={botanistMaterialTwo.icon}
            />
            {botanistMaterialTwo.name}
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              {botanistMaterialOne.minCollectability} | 1x
              <img
                className="w-[20px] inline"
                src={botanistMaterialTwo.icon}
              />
            </div>
            <div className="flex items-center gap-1">
              {botanistMaterialOne.maxCollectability} | 3x
              <img
                className="w-[20px] inline"
                src={botanistMaterialTwo.icon}
              />
            </div>
          </div>
        </div>
        <div className="m-1 px-5 pt-5 pb-5 flex flex-col gap-3 border rounded text-[0.9rem] items-start text-left">
          <h1 className="text-[1.2rem] font-bold bg-[#5f432f] text-[#fcf1e1] px-5 py-1 rounded">
            Fisher
          </h1>
          <p className="text-[1rem] rounded font-bold bg-[#F3D9B1] text-[#4e3727] px-4 py-[0.3em]">
            Gather
          </p>
          <a
            href={fisherMaterialOne.wiki}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:underline hover:underline-offset-4"
          >
            <img
              className="w-[24px]"
              src={fisherMaterialOne.icon}
            />
            {fisherMaterialOne.name}
          </a>
          <a
            href={fisherMaterialThree.wiki}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-3 hover:underline hover:underline-offset-4"
          >
            <img
              className="w-[24px]"
              src={fisherMaterialThree.icon}
            />
            {fisherMaterialThree.name}
          </a>
          <p className="text-[1rem] text-center flex items-center gap-2 mt-2 rounded font-bold bg-[#F3D9B1] text-[#4e3727] px-4 py-[0.3em]">
            Trade
            <img
              className="w-[20px]"
              src={fisherMaterialOne.icon}
            />
            for
          </p>
          <div className="flex gap-3 items-center">
            <img
              className="w-[24px]"
              src={fisherMaterialTwo.icon}
            />
            {fisherMaterialTwo.name}
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              {fisherMaterialOne.minCollectability} | 1x
              <img
                className="w-[20px] inline"
                src={fisherMaterialTwo.icon}
              />
            </div>
            <div className="flex items-center gap-1">
              {fisherMaterialOne.maxCollectability} | 2x
              <img
                className="w-[20px] inline"
                src={fisherMaterialTwo.icon}
              />
            </div>
          </div>
          <p className="text-[1rem] text-center flex items-center gap-2 mt-2 rounded font-bold bg-[#F3D9B1] text-[#4e3727] px-4 py-[0.3em]">
            Trade
            <img
              className="w-[20px]"
              src={fisherMaterialThree.icon}
            />
            for
          </p>
          <div className="flex gap-3 items-center">
            <img
              className="w-[24px]"
              src={fisherMaterialFour.icon}
            />
            {fisherMaterialFour.name}
          </div>
          <div className="flex gap-6">
            <div className="flex items-center gap-1">
              {fisherMaterialThree.minCollectability} | 1x
              <img
                className="w-[20px] inline"
                src={fisherMaterialTwo.icon}
              />
            </div>
            <div className="flex items-center gap-1">
              {fisherMaterialThree.maxCollectability} | 2x
              <img
                className="w-[20px] inline"
                src={fisherMaterialTwo.icon}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ToolsTable;
