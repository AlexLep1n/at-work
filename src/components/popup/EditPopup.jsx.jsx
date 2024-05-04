import classes from "./EditPopup.module.css";

export default function EditPopup() {
  return (
    <div className={classes.popup}>
      <button className={classes.variant}>Редактировать</button>
      <button className={classes.variant}>Архивировать</button>
      <button className={classes.variant}>Скрыть</button>
    </div>
  );
}
