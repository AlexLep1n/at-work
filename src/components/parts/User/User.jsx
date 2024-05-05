/* eslint-disable react/prop-types */
import { useState } from "react";
import Popup from "../../popup/Popup.jsx";
import classes from "./User.module.css";
import { useDispatch } from "react-redux";
import { archiveUser, hideUser } from "../../../state/reducers/usersSlice.js";

export default function User({ user, active, archive }) {
  const [activeModal, setActiveModal] = useState(false);
  const dispatch = useDispatch();

  return (
    <div className={classes.user}>
      <img className={classes.user__img} src="./img/user-img.png" alt="user" />
      <div className={classes.user__content}>
        <h4 className={classes.user__name}>{user.username}</h4>
        <p className={classes.user__company}>{user.company.name}</p>
        <p className={classes.user__city}>{user.address.city}</p>
        <button
          onClick={() => setActiveModal((prev) => !prev)}
          className={classes.user__btn}
        >
          <svg
            width="4"
            height="17"
            viewBox="0 0 4 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 14.5C0 15.6 0.9 16.5 2 16.5C3.1 16.5 4 15.6 4 14.5C4 13.4 3.1 12.5 2 12.5C0.9 12.5 0 13.4 0 14.5ZM0 2.5C0 3.6 0.9 4.5 2 4.5C3.1 4.5 4 3.6 4 2.5C4 1.4 3.1 0.5 2 0.5C0.9 0.5 0 1.4 0 2.5ZM0 8.5C0 9.6 0.9 10.5 2 10.5C3.1 10.5 4 9.6 4 8.5C4 7.4 3.1 6.5 2 6.5C0.9 6.5 0 7.4 0 8.5Z"
              fill="#161616"
            />
          </svg>
        </button>
      </div>
      {activeModal && (
        <Popup
          active={active}
          archive={archive}
          archiveUser={() => dispatch(archiveUser(user))}
          hideUser={() => dispatch(hideUser(user))}
        />
      )}
    </div>
  );
}
