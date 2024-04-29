export default function User({ userName, companyName, city, onClick }) {
  <div>
    <img src="./img/user-img.png" alt="user" />
    <div>
      <h4>{userName}</h4>
      <p>{companyName}</p>
      <p>{city}</p>
      <button onClick={onClick}>
        <img src="./edit-btn.svg" alt="edit button" />
      </button>
    </div>
  </div>;
}
