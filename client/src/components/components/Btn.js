import { Link } from "react-router-dom";
import "./styles.css";

const Button = ({ title, url }) => {
  //   console.log("click ", title);
  return (
    <div className="temp-div">
      {url ? (
        <Link
          className="btn-font"
          to={url}
          style={{ color: "#6F3716", textDecorationLine: "none" }}
        >
          {title}
        </Link>
      ) : (
        <div className="btn-font" style={{ color: "#6F3716" }}>
          {title}
        </div>
      )}
    </div>
  );
};

export default Button;
