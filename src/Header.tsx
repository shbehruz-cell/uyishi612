function Header() {
  return <header className="top-[20px], left-8 mb-18.5"
                 style={{
                   width: "calc(100% - 64px)",
                   height: "76px",
                   margin: "20px 32px 0",
                   padding: "0 28px",
                   display: "flex",
                   alignItems: "center",
                   justifyContent: "space-between",
                   backgroundColor: "#1A1D1F",
                   border: "1px solid #272B30",
                   borderRadius: "16px",
                   boxSizing: "border-box",
                   color: "#FCFCFC",
                 }}
  >
    {/* Chap qism */}
    <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
      <img
        src="/logo.svg"
        alt="UzChess"
        style={{width: "118px", height: "32px"}}
      />

      <div
        style={{
          width: "1px",
          height: "28px",
          backgroundColor: "#272B30",
        }}
      />

      <div style={{display: "flex", alignItems: "center", gap: "8px"}}>
          <span style={{fontSize: "15px", color: "#EFEFEF"}}>
            O‘zbekcha
          </span>
        <img
          src="/down-arrow.svg"
          alt="arrow"
          style={{width: "16px", height: "16px"}}
        />
      </div>
    </div>

    {/* Navigatsiya */}
    <nav style={{display: "flex", alignItems: "center", gap: "36px"}}>
      <a href="#" style={{color: "#9A9FA5", textDecoration: "none"}}>
        Asosiy
      </a>

      <a href="#" style={{color: "#9A9FA5", textDecoration: "none"}}>
        Yangiliklar
      </a>

      <a
        href="#"
        style={{
          color: "#FCFCFC",
          textDecoration: "none",
          borderBottom: "3px solid #1C92E0",
          height: "76px",
          display: "flex",
          alignItems: "center",
        }}
      >
        O‘rganish
      </a>

      <a href="#" style={{color: "#9A9FA5", textDecoration: "none"}}>
        Kutubxona
      </a>

      <a href="#" style={{color: "#9A9FA5", textDecoration: "none"}}>
        Bog‘lanish
      </a>
    </nav>

    {/* O'ng qism */}
    <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
      <div style={{display: "flex", alignItems: "center", gap: "20px"}}>
        <img src="/search.svg" alt="search" style={{width: "22px"}}/>
        <img src="/cart.svg" alt="cart" style={{width: "22px"}}/>
        <img
          src="/notification.svg"
          alt="notification"
          style={{width: "22px"}}
        />
      </div>

      <div
        style={{
          width: "1px",
          height: "28px",
          backgroundColor: "#272B30",
        }}
      />

      <div style={{display: "flex", alignItems: "center", gap: "12px"}}>
          <span style={{fontSize: "15px", color: "#EFEFEF"}}>
            Jasurbek Pulatov
          </span>

        <img
          src="/profile.png"
          alt="Profile"
          style={{
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
      </div>
    </div>
  </header>
}

export default Header;
