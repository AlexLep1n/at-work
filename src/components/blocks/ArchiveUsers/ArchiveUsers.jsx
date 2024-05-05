import { useSelector } from "react-redux";
import User from "../../parts/User/User";
import classes from "./ArchiveUsers.module.css";

export default function ArchiveUsers() {
  const { archive } = useSelector((state) => state.users);

  return (
    <section>
      <h3 className={classes.title}>Архив</h3>
      <hr className={classes.hr} />
      <div className={classes.users}>
        {archive &&
          archive.map((user) => (
            <User key={user.id} user={user} archive={true} />
          ))}
      </div>
    </section>
  );
}
