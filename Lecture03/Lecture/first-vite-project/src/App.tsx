import { useState } from "react";
import "./App.css";

function App() {
  //const [count, setCount] = useState(0);
  /*   const [didIncrease, setDidIncrease] = useState(false);
  const [didDecrease, setDidDecrease] = useState(false); */

  /*  const [counterState, setCounterState] = useState<
    "increased" | "decreased" | "none"
  >("none"); */

  const [counter, setCounter] = useState<{
    count: number;
    counterState: "increased" | "decreased" | "none";
  }>({ count: 0, counterState: "none" });

  const count = counter.count;
  const didIncrease = counter.counterState === "increased";
  const didDecrease = counter.counterState === "decreased";

  const [profile, setProfile] = useState<
    | {
        name: string;
        age: number;
        skills: {
          technicalSkills: [
            {
              language: string;
              experience: number;
            }
          ];
        };
      }
    | undefined
  >(undefined);

  function updateTechSkill(language: string, experience: number) {
    const newTechnicalSkills = profile?.skills.technicalSkills.map((skill) => {
      if (skill.language === language) {
        return {
          language: language,
          experience: experience,
        };
      }
      return skill;
    });
    setProfile({
      ...profile,
      skills: {
        ...profile?.skills,
        technicalSkills: newTechnicalSkills,
      },
    });
  }

  return (
    <>
      <div className="card">
        <h1>{count}</h1>
        <button
          style={{ borderColor: didIncrease ? "green" : "black" }}
          onClick={() => {
            setCounter({ count: count + 1, counterState: "increased" });
          }}
        >
          Increase
        </button>
        <button
          style={{ borderColor: didDecrease ? "red" : "black" }}
          onClick={() => {
            setCounter({ count: count - 1, counterState: "decreased" });
          }}
        >
          Decrease
        </button>
      </div>
    </>
  );
}

export default App;
