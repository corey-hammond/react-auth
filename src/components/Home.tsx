import axios from "axios";
import { useState, useEffect } from "react";

export const Home = () => {
  const [message, setMessage] = useState("You are not logged in");

  useEffect(() => {
    (async () => {
      const { data } = await axios.get("http://localhost:8000/api/user");

      setMessage(`Hi ${data.first_name} ${data.last_name}`);
    })();
  }, []);

  return (
    <main className="container text-center mt-5">
      <h3>{message}</h3>
    </main>
  );
};
