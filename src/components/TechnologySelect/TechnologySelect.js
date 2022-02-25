import { useEffect, useState } from "react";
import s from "./TechnologySelect.module.css";

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
    <label className={s.label}>
      <input
        type="checkbox"
        checked={checked}
        onChange={() => setChecked(!checked)}
        className={s.input}
      />
      <p>{technology}</p>
    </label>
  );
};
