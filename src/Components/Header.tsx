function Header() {
  return (
    <>
      <header
        style={{
          background: "rgba(168, 164, 163)",
          marginBottom: "5px",
          height: "4rem",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "black",
          fontWeight: "bold",
          gap: "11px",
          boxShadow:
            "0px 1px 3px 0px rgba(0,0,0,0.10), 0px 1px 2px 0px rgba(0,0,0,0.06)",
        }}
      >
        <p style={{ fontSize: "2rem", fontWeight: "500", margin: 0 }}>
          API Explorer
        </p>
      </header>
    </>
  );
}

export default Header;
