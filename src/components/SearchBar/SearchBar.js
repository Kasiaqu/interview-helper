import s from "./SearchBar.module.css";

export const SearchBar = ({ searchName, setSearchName }) => {
  return (
    <label className={s.label}>
      <input
        className={s.input}
        value={searchName}
        onChange={(e) => setSearchName(e.target.value.toLowerCase())}
        placeholder="Search candidate - fill in name or surname"
      />
    </label>
  );
};
