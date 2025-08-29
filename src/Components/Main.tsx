import Post from "./Post";

function Main() {
  const getData = (dataInfo) => {
    console.log("Checked", dataInfo);
  };
  return (
    <>
      <div className="main">
        <main>
          <form className="api-form" action={getData}>
            <input
              style={{
                flex: 1,
                padding: "0.5rem",
                marginRight: "0.5rem",
                borderRadius: "4px",
                border: "1px solid #ccc",
              }}
              type="text"
              placeholder="Search...."
            />
            <button type="submit">Explore</button>

            <Post />
          </form>
        </main>
      </div>
    </>
  );
}

export default Main;
