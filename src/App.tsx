import { useState } from "react";

function App() {
  const [input, setInput] = useState("");

  const handleClick = (value) => {
    setInput((prev) => prev + value);
  };

  const calculate = () => {
    try {
      setInput(eval(input).toString()); 
    } catch (err) {
      setInput("Error");
    }
  };

  const clearInput = () => {
    setInput("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-gray-200 to-gray-300">
      <div className="bg-white rounded-xl shadow-lg p-6 w-full max-w-md">
        <div className="mb-4">
          <input
            type="text"
            value={input}
            readOnly
            className="w-full text-right text-4xl font-semibold p-4 bg-gray-100 rounded-lg border border-gray-300 shadow-inner"
            placeholder="0"
          />
        </div>
        <div className="grid grid-cols-4 gap-3">
          {["7", "8", "9", "/", "4", "5", "6", "*", "1", "2", "3", "-", ".", "0", "=", "+"].map((char) => (
            <button
              key={char}
              onClick={char === "=" ? calculate : () => handleClick(char)}
              className={`text-2xl font-bold rounded-lg p-4 transition-all ${
                char === "="
                  ? "bg-pink-500 text-white hover:bg-yellow-500"
                  : char === "/" || char === "*" || char === "-" || char === "+"
                  ? "bg-purple-600 text-white hover:bg-pink-300"
                  : "bg-gray-400 hover:bg-gray-950"
              }`}
            >
              {char}
            </button>
          ))}
          <button
            onClick={clearInput}
            className="col-span-4 text-2xl font-bold bg-pink-800 text-white p-4 rounded-lg hover:bg-pink-200"
          >
            C
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
