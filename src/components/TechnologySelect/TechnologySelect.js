import { useEffect, useState } from "react";

export const TechnologySelect = ({
  technology,
  toggleQuestion,
  setSelectedCategories,
}) => {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    toggleQuestion(technology, checked, setSelectedCategories);
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
