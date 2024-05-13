import { Link } from "react-router-dom";
import {BiCameraMovie, BiSearchAlt2} from "react-icons/bi"

const NavBar = () => {
  return (
    <div>
      <nav className="navbar">
        <h2>
          <Link to="/">
            <BiCameraMovie/>AllMovies</Link>
        </h2>
        <form>
            <input type="text" placeholder="Busque por um filme..." />
            <button type="submit">
                <BiSearchAlt2/>
            </button>
        </form>
      </nav>
    </div>
  );
};

export default NavBar;
