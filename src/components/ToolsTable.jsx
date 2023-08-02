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
  fishOneCollectability,
  fishTwoCollectability
}) {
  return (
    <table className="border m-5 text-white">
      <thead className="bg-neutral-700 text-left">
        <tr>
          <th className="px-5 py-3">Job</th>
          <th>Item</th>
          <th>Reward</th>
          <th className="pr-5">Collectability</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="pt-5 px-5">Miner</td>
          <td className="pt-5">
            <div className="flex items-center gap-2">
              <img
                className="w-[24px]"
                src={minerMaterialOne.icon}
              />
              {minerMaterialOne.name}
            </div>
          </td>
          <td className="pt-5">
            <div className="flex items-center gap-2">
              <img
                className="w-[24px]"
                src={minerMaterialTwo.icon}
              />
              {minerMaterialTwo.name}
            </div>
          </td>
          <td className="pt-5">1000</td>
        </tr>
        <tr className="border-b">
          <td></td>
          <td className="pt-5 pb-5">
            <div className="flex items-center gap-2">
              <img
                className="w-[24px]"
                src={minerMaterialThree.icon}
              />
              {minerMaterialThree.name}
            </div>
          </td>
        </tr>
        <tr>
          <td className="pt-5 px-5">Botanist</td>
          <td className="pt-5">
            <div className="flex items-center gap-2">
              <img
                className="w-[24px]"
                src={botanistMaterialOne.icon}
              />
              {botanistMaterialOne.name}
            </div>
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
          <td className="pt-5">1000</td>
        </tr>
        <tr className="border-b">
          <td></td>
          <td className="pb-5 pt-5">
            <div className="flex items-center gap-2">
              <img
                className="w-[24px]"
                src={botanistMaterialThree.icon}
              />
              {botanistMaterialThree.name}
            </div>
          </td>
        </tr>
        <tr>
          <td className="pt-5 px-5">Fisher</td>
          <td className="pt-5">
            <div className="flex items-center gap-2">
              <img
                className="w-[24px]"
                src={fisherMaterialOne.icon}
              />
              {fisherMaterialOne.name}
            </div>
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
          <td className="pt-5">{fishOneCollectability}</td>
        </tr>
        <tr>
          <td></td>
          <td className="pb-5 pt-5">
            <div className="flex items-center gap-2">
              <img
                className="w-[24px]"
                src={fisherMaterialThree.icon}
              />
              {fisherMaterialThree.name}
            </div>
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
          <td className="pt-5 pb-5">{fishTwoCollectability}</td>
        </tr>
      </tbody>
    </table>
  );
}

export default ToolsTable;
