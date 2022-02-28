import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
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
          <h3>List of candidates:</h3>
          <button onClick={() => navigate("/addcandidate")}>
            Add a new candidate
          </button>
        </div>
        <div className={s.searchBarCounter}>
          {/* <p>Fill in name or surname candidate</p> */}
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
