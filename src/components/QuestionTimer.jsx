import { useEffect } from "react";
import { useState } from "react";

export default function QuestionTimer({ timeout, onTimeout }) {
  const [remainingTime, setRemainingTime] = useState(timeout);
  useEffect(() => {
    setTimeout(onTimeout, timeout);
  }, [timeout, onTimeout]);
  useEffect(() => {
    const interval = setInterval(() => {
      setRemainingTime((remainingTime) => remainingTime - 100);
    }, 100);
  }, []);
  return (
    <progress id="question-time" value={remainingTime} max={timeout}></progress>
  );
}
