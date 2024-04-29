import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../../../api/fetchUsers";

export default function User() {
  const API_URL = "https://jsonplaceholder.typicode.com/users";
  const { entities, status, error } = useSelector((state) => state.users.api);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers(API_URL));
  }, [dispatch]);

  return <></>;
}
