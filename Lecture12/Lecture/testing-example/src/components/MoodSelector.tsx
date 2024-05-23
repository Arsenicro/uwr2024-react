import useMood from "../providers/MoodProvider/useMood";
import Select from "./Select";

const MoodSelector = () => {
  const { setCurrentMood, availableMoods } = useMood();

  return (
    <div className="mb-4">
      <Select onChange={(e) => setCurrentMood(e.target.value)}>
        {availableMoods.map((mood) => (
          <option key={mood.id} value={mood.id}>
            {mood.name}
          </option>
        ))}
      </Select>
    </div>
  );
};

export default MoodSelector;
