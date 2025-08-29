import { useState, useEffect } from "react";
import Post from "./Post";

function Main() {
  const [postData, setPostData] = useState<
    { id: number; name: string; status: string; image: string }[]
  >([]);
  const [search, setSearch] = useState<string>("");

  useEffect(() => {
    fetchData();
  }, [search]);

  async function fetchData() {
    try {
      const response = await fetch("https://rickandmortyapi.com/api/character");

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      setPostData(data.results);
    } catch (error) {
      console.error("Fetch error:", error);
    }
  }
  const filteredPosts = postData.filter((post) =>
    post.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="main">
        <main>
          <form className="api-form" onSubmit={(e) => e.preventDefault()}>
            <input
              style={{
                width: "50vw",
                flex: 1,
                padding: "0.5rem",
                marginRight: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              type="text"
              placeholder="Search...."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="main-post">
              {filteredPosts.slice(0, 8).map((post) => (
                <Post
                  key={post.id}
                  id={post.id}
                  image={post.image}
                  name={post.name}
                  status={post.status}
                />
              ))}
            </div>
          </form>
        </main>
      </div>
    </>
  );
}

export default Main;
