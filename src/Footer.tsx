function Footer() {
  return <footer className="top-[1177px], "
                 style={{
                   width: "100%",
                   marginTop: "0",
                   backgroundColor: "#1A1D1F",
                   boxSizing: "border-box",
                 }}
  >
    <div
      style={{
        paddingTop: "36px",
        paddingBottom: "32px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <a
        href="#"
        style={{
          display: "flex",
          alignItems: "center",
          textDecoration: "none",
          marginBottom: "24px",
        }}
      >
        <img
          src="/logo.svg"
          alt="UzChess"
          style={{
            width: "118px",
            height: "32px",
          }}
        />
      </a>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "32px",
          marginBottom: "24px",
        }}
      >
        <a href="#" style={{textDecoration: "none", color: "#EFEFEF", fontSize: "14px", fontWeight: 400}}>
          Biz haqimizda
        </a>

        <a href="#" style={{textDecoration: "none", color: "#EFEFEF", fontSize: "14px", fontWeight: 400}}>
          Cookie fayllari siyosati
        </a>

        <a href="#" style={{textDecoration: "none", color: "#EFEFEF", fontSize: "14px", fontWeight: 400}}>
          Foydalanish qoidalari
        </a>

        <a href="#" style={{textDecoration: "none", color: "#EFEFEF", fontSize: "14px", fontWeight: 400}}>
          Cookie fayllari siyosati
        </a>
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <a href="#" style={{display: "flex", alignItems: "center"}}>
          <img src="/instagram.svg" alt="Instagram" style={{width: "20px", height: "20px"}}/>
        </a>

        <a href="#" style={{display: "flex", alignItems: "center"}}>
          <img src="/telegram.svg" alt="Telegram" style={{width: "20px", height: "20px"}}/>
        </a>

        <a href="#" style={{display: "flex", alignItems: "center"}}>
          <img src="/youtube.svg" alt="YouTube" style={{width: "20px", height: "20px"}}/>
        </a>

        <a href="#" style={{display: "flex", alignItems: "center"}}>
          <img src="/twitter.svg" alt="Twitter" style={{width: "20px", height: "20px"}}/>
        </a>

        <a href="#" style={{display: "flex", alignItems: "center"}}>
          <img src="/facebook.svg" alt="Facebook" style={{width: "20px", height: "20px"}}/>
        </a>
      </div>
    </div>

    <div
      style={{
        width: "100%",
        height: "1px",
        backgroundColor: "#272B30",
      }}
    />

    <div
      style={{
        padding: "20px 32px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <span style={{color: "#9A9FA5", fontSize: "14px"}}>
        © UzChess. All rights reserved.
      </span>

      <a href="#" style={{display: "flex", alignItems: "center"}}>
        <img src="/Footer-logo.svg" alt="Brand" style={{width: "32px", height: "20px"}}/>
      </a>

      <a href="#" style={{textDecoration: "none", color: "#9A9FA5", fontSize: "14px"}}>
        Foydalanish qoidalari
      </a>
    </div>
  </footer>
}

export default Footer;
