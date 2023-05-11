import React from "react";
import "./_loginScreen.css";

const LoginScreen = () => {
  return (
    <div className="login">
      <div className="login_container">
        <img src="https://pngimg.com/uploads/youtube/youtube_PNG2.png" alt="" />
        <button>Login with Google</button>
        <p>This project is made using Youtube Data API</p>
      </div>
    </div>
  );
};

export default LoginScreen;
