import useMood from "../providers/MoodProvider/useMood";
import MoodItem from "./MoodItem";

const MoodList = () => {
  const { availableMoods } = useMood();

  return (
    <div className="w-full max-w-md mx-auto my-6 p-4 bg-white dark:bg-gray-800 shadow-lg rounded-lg">
      <h2 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">
        Moods
      </h2>
      <ul className="space-y-3">
        {availableMoods.map((mood) => (
          <MoodItem key={mood.id} mood={mood} />
        ))}
      </ul>
    </div>
  );
};

export default MoodList;
