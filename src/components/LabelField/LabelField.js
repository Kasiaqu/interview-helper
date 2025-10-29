import s from "./LabelField.module.css";
export const LabelField = ({ type, title = "", state, setState }) => {
  const labelText = title ? title.charAt(0).toUpperCase() + title.slice(1) : "";
  return (
    <label className={s.label}>
      <p>{labelText}</p>
      <input
        className={s.input}
        type={type}
        value={state}
        minLength={4}
        data-cy={title ? `input-${title}` : undefined}
        onChange={(e) => setState(e.target.value)}
      ></input>
    </label>
  );
};
