import s from "./LabelField.module.css";
export const LabelField = ({ type, title, state, setState }) => {
  return (
    <label className={s.label}>
      <p>{title.charAt(0).toUpperCase() + title.slice(1)}</p>
      <input
        className={s.input}
        type={type}
        value={state}
        onChange={(e) => setState(e.target.value)}
      ></input>
    </label>
  );
};
