import { useEffect, useState } from "react";

export const TechnologySelect = ({ technology, toggleCategory }) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    toggleCategory(technology, checked);
  }, [checked]);
  return (
    <label>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
      />
      {technology}
    </label>
  );
};
