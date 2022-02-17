import { useState } from "react";

export const TechnologySelect = ({ technology }) => {
  const [checked, setChecked] = useState(false);

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
