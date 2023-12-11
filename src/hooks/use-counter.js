export function useCounter(ownedWeapons, category) {
  const counter = ownedWeapons.filter((element) => {
    return element.shield ? null : element.category === category;
  });

  return counter;
}
