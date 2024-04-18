function App() {
  //const screens = ["screen", "2", "3"]; // Tak nie
  const screens = ["min-h-screen", "min-h-2", "min-h-[400px]"]; // Tailwind rozumie
  // min-h-${screens[0]} -- TAK NIE ROBIĆ

  const themeSwitcher = () => {
    // Trochę antypattern ale w tym momencie ok
    document.documentElement.classList.toggle("dark");
  };

  return (
    <div
      className={`flex flex-col justify-center items-center ${screens[2]} md:flex-row md:justify-around`}
    >
      <h1 className="dark:text-3xl font-bold hover:underline hover:text-red-950 text-red">
        Hello world!
      </h1>
      <h2>Hello!</h2>
      <button
        onClick={() => themeSwitcher()}
        className="bg-blue-500 rounded p-2 dark:bg-blue-800 dark:text-white"
      >
        Theme Switch
      </button>
    </div>
  );
}

export default App;
