import { Link } from "react-router-dom";
const SearchUsers = ({ value }) => {
  console.log(value);
  return (
    <Link to={`${value.id}`}>
      <div className="userDataContainer">
        <div className="userData">
          <img src={value.image} alt="" className="userDataBox" />
          <div className="names">
            <div>{value.username}</div>

            <div className="userName">
              <div> {value.firstName}</div>
              <div> {value.lastName}</div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};
export default SearchUsers;
