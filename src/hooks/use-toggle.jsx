import { useState } from "react";

function useToggle(initialValue = false) {
  const [open, setOpen] = useState(initialValue);

  function toggle() {
    setOpen((prevOpen) => !prevOpen);
  }

  return [open, toggle];
}

export default useToggle;
