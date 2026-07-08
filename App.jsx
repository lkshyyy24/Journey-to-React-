import { useState } from "react";

function App() {

  // Characters to choose from
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  // State to store the generated password
  const [pass, setPass] = useState("");

  // Function to generate password
  function generatePassword() {

    let password = "";

    // Generate an 8-character password
    for (let i = 0; i < 5; i++) {

      let randomIndex = Math.floor(Math.random() * chars.length);

      password += chars[randomIndex];

    }

    setPass(password);
  }

  return (
    <div className="flex flex-col items-center justify-center bg-purple-200 h-screen">

      <h1 className="text-4xl mb-8 border border-black shadow-xl rounded-lg p-5 bg-white">
        Password Generator
      </h1>

      <button
        onClick={generatePassword}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-xl"
      >
        Generate Password
      </button>

      <p className="text-2xl font-bold mt-8">
        Generated Password:
      </p>

      <p className="text-3xl font-mono bg-white px-6 py-3 rounded-lg shadow-lg mt-3">
        {pass}
      </p>

    </div>
  );
}

export default App;