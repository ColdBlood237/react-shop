import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/">home page</Link>
      </li>
      <li>
        <Link to="/products">products</Link>
      </li>
    </ul>
  );
}
