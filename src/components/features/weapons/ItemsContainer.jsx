import { useLayoutEffect, useRef, useState } from "react";
import ItemCard from "./ItemCard.jsx";
import {
  balancedItemsPerRow,
  maxItemsPerRow,
  rowWidth,
} from "../../../utilities/itemRows.js";

function ItemsContainer({ items }) {
  // The outer div spans the available width (to measure it); the inner one
  // holds the items and is narrowed so they wrap into even rows
  const outerRef = useRef(null);
  const gridRef = useRef(null);
  const [maxWidth, setMaxWidth] = useState();

  useLayoutEffect(() => {
    const outer = outerRef.current;
    const grid = gridRef.current;

    function balanceRows() {
      const cards = [...grid.children];
      if (cards.length === 0) return;
      const itemWidth = Math.max(
        ...cards.map((card) => card.getBoundingClientRect().width),
      );
      const gap = parseFloat(getComputedStyle(grid).columnGap) || 0;
      const perRow = balancedItemsPerRow(
        cards.length,
        maxItemsPerRow(outer.clientWidth, itemWidth, gap),
      );
      // +1px so rounding never pushes the last item of a row onto the next
      setMaxWidth(Math.ceil(rowWidth(perRow, itemWidth, gap)) + 1);
    }

    balanceRows();
    const observer = new ResizeObserver(balanceRows);
    observer.observe(outer);
    return () => observer.disconnect();
  }, [items.length]);

  const itemElements = items.map((item) => (
    <ItemCard key={item.id} item={item} />
  ));

  return (
    <div ref={outerRef} className="w-full">
      <div
        ref={gridRef}
        style={{ maxWidth }}
        className="mx-auto flex flex-row flex-wrap items-center justify-center gap-5"
      >
        {itemElements}
      </div>
    </div>
  );
}

export default ItemsContainer;
