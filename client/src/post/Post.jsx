import { Link } from "react-rputer-dom";
import "./posts.css";

export default function Post({ img }) {
    return (
        <div className="post">
            <img 
              className="postImg"
              src={img}
              alt=""
            />
            <div className="postInfo">
                <div className="postCats">
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Music">
                            Music
                        </Link>
                    </span>
                    <span className="postCat">
                        <Link className="link" to="/posts?cat=Life">
                            Life
                        </Link>
                    </span>
                </div>
                <span className="psotTitle">
                    <Link to="/posts/abc" className="link">
                        sghhjo
                    </Link>
                </span>
                <hr />
                <span className="postDate">1 hour ago</span>
            </div>
            <p className="postDesc">
                oiihueffdhipo ojhve dpifjdhchjv
            </p>
        </div>
    );
}