import s from "./TextAreaField.module.css";
export const TextAreaField = ({ title, state, setState }) => {
  return (
    <label className={s.label}>
      <p>{title.charAt(0).toUpperCase() + title.slice(1)}</p>
      <textarea
        className={s.textArea}
        value={state}
        onChange={(e) => setState(e.target.value)}
      ></textarea>
    </label>
  );
};
