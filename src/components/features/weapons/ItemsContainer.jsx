import ItemCard from "./ItemCard.jsx";
function ItemsContainer({ items }) {
  const itemElements = items.map((item) => (
    <ItemCard key={item.id} item={item} />
  ));

  return (
    <div className="flex flex-row flex-wrap items-center justify-center gap-5">
      {itemElements}
    </div>
  );
}

export default ItemsContainer;
