"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [targetNumber, setTargetNumber] = useState(0);
  const [attempts, setAttempts] = useState(0);

  useEffect(() => {
    setTargetNumber(Math.floor(Math.random() * 100) + 1);
  }, []);

  const handleGuess = () => {
    const guessNumber = parseInt(guess);
    setAttempts(attempts + 1);

    if (isNaN(guessNumber)) {
      setMessage("Please enter a valid number!");
    } else if (guessNumber === targetNumber) {
      setMessage(`Congratulations! You guessed it in ${attempts + 1} attempts.`);
    } else if (guessNumber < targetNumber) {
      setMessage("Too low, try again!");
    } else {
      setMessage("Too high, try again!");
    }

    setGuess("");
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Number Guessing Game</h1>
      <p className="mb-4">I'm thinking of a number between 1 and 100. Can you guess it?</p>
      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        className="border-2 border-gray-300 rounded-md p-2 mb-4 text-black"
        placeholder="Enter your guess"
      />
      <button
        onClick={handleGuess}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      >
        Guess!
      </button>
      {message && <p className="mt-4 text-xl">{message}</p>}
      <p className="mt-4">Number of attempts: {attempts}</p>
    </main>
  );
}