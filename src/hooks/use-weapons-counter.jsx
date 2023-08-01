function useWeaponsCounter(weapons) {
  const weaponsCount = weapons?.filter((weapon) =>
    weapon.id === 1 ? null : !weapon.isSelected
  );
  return weaponsCount;
}

export default useWeaponsCounter;
