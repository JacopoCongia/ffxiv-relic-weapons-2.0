export function useCounter(ownedItems = [], category) {
  const counter = ownedItems.filter((element) => {
    const isSameCategory = element.category === category;
    const isMainHand = !element.shield;

    return isSameCategory && isMainHand;
  });

  return counter;
}
