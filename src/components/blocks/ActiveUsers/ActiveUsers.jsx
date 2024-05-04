import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../api/fetchUsers";
import User from "../../parts/User/User";
import classes from "./ActiveUsers.module.css";

export default function ActiveUsers() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const { entities, status, error } = useSelector((state) => state.users.api);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(API_URL));
  }, [dispatch]);

  function clickHandler() {
    dispatch(fetchUsers(API_URL));
  }

  return (
    <section>
      <h3 className={classes.title}>Активные</h3>
      <hr className={classes.hr} />
      <div className={classes.users}>
        {status === "loading" && <h3>Loading...</h3>}
        {status === "success" &&
          entities.map((user) => (
            <User
              key={user.id}
              userName={user.username}
              companyName={user.company.name}
              city={user.address.city}
            />
          ))}
        {error && (
          <div>
            <p>{error}</p>
            <button onClick={clickHandler}>Retry</button>
          </div>
        )}
      </div>
    </section>
  );
}
