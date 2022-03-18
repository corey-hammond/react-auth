import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAuth } from "../redux/authSlice";
import { RootState } from "../redux/store";

export const Home = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state: RootState) => state.auth.value);
  const [message, setMessage] = useState("");

  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get("user");

        setMessage(`Hi ${data.first_name} ${data.last_name}`);
        dispatch(setAuth(true));
      } catch (e) {
        setMessage("You are not authenticated");
        dispatch(setAuth(false));
      }
    })();
  }, []);

  return (
    <main className="container text-center mt-5">
      <h3>{auth ? message : "You are not authenticated"}</h3>
    </main>
  );
};
