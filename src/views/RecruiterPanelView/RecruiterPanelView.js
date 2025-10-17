import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { CandidateCounter } from "../../components/CandidateCounter/CandidateCounter";
import { SearchBar } from "../../components/SearchBar/SearchBar";
import { getCandidates } from "../../utils/db";
import s from "./RecruiterPanelView.module.css";

export const RecruiterPanelView = ({ candidates, setCandidates }) => {
  const navigate = useNavigate();
  const [searchName, setSearchName] = useState("");

  const getSearch = (candidate) =>
    candidate.name.toLowerCase().includes(searchName)
      ? searchName
      : candidate.lastName.toLowerCase().includes(searchName);
  useEffect(() => {
    getCandidates(setCandidates);
  }, []);
  return (
    <div className={s.recruiterPanel}>
      <div className={s.headerPanel}>
        <div className={s.headerPanelBar}>
          <h2>List of candidates:</h2>
          <button onClick={() => navigate("/addcandidate")}>
            Add a new candidate
          </button>
        </div>
        <div className={s.searchBarCounter}>
          <SearchBar searchName={searchName} setSearchName={setSearchName} />
        </div>
      </div>

      <div className={s.candidatesCounter}>
        {candidates
          .filter((candidate) =>
            searchName === "" ? candidates : getSearch(candidate)
          )
          .map((candidate) => {
            return (
              <CandidateCounter key={candidate.id} candidate={candidate} />
            );
          })}
      </div>
    </div>
  );
};
