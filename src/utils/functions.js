export const toggleQuestion = (name, checked, setState) => {
  setState((questions) => {
    return !checked
      ? questions.filter((x) => x !== name)
      : [...questions, name];
  });
};
