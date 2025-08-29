import { Link } from "react-router-dom";

interface value {
  name: string;
  status: string;
  image: string;
  id: number;
}
function Post({ name, status, image, id }: value) {
  return (
    <Link
      to={`/post/${id}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div className="post">
        <img className="post-image" src={image} alt={name} />
        <h5>Name: {name}</h5>
        <h6>Status: {status}</h6>
      </div>
    </Link>
  );
}

export default Post;
