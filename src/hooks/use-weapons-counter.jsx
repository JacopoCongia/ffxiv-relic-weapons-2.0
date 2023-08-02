export function useWeaponsCounter(weapons) {
  const weaponsCount = weapons?.filter((weapon) =>
    weapon.id === 1 ? null : !weapon.isSelected
  );
  return weaponsCount;
}

export function useToolsCounter(weapons) {
  const weaponsCount = weapons?.filter((weapon) => !weapon.isSelected);
  return weaponsCount;
}
