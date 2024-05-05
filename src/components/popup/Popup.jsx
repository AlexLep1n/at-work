/* eslint-disable react/prop-types */
import classes from "./Popup.module.css";

export default function Popup({ active, archive, archiveUser, hideUser }) {
  return (
    <div className={classes.popup}>
      {active && (
        <>
          <button className={classes.variant}>Редактировать</button>
          <button onClick={archiveUser} className={classes.variant}>
            Архивировать
          </button>
          <button onClick={hideUser} className={classes.variant}>
            Скрыть
          </button>
        </>
      )}
      {archive && <button className={classes.variant}>Активировать</button>}
    </div>
  );
}
