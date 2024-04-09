import React, { useState } from "react";

const Auth = () => {
  const [isRegister, setIsRegister] = useState(false);
  const togglePannel = () => setIsRegister(!isRegister);
  return (
    <div className="flex justify-center h-screen items-center overflow-hidden">
      <div className={`${style.box} lg:max-4-4xl`}>
        <div
          className={`${style.cover} ${isRegister} ? ${style.rotateActive}:""`}
        >
          <div className={`${style.front}`}>
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Flaptop&psig=AOvVaw2eGTpRUXv9BooPOu-MPEya&ust=1712779937681000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDU8dD4tYUDFQAAAAAdAAAAABAE"
              alt=""
            />
            <div className={`${style.text}`}>
              <span className={`${style.text1}`}>
                Success is built upon well-organized tasks
              </span>
              <span className={`${style.text2} text-xs`}>
                Lets Get Connected
              </span>
            </div>
          </div>
          <div className={`${style.back}`}>
            <img
              src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwallpapers.com%2Flaptop&psig=AOvVaw2eGTpRUXv9BooPOu-MPEya&ust=1712779937681000&source=images&cd=vfe&opi=89978449&ved=0CBIQjRxqFwoTCJDU8dD4tYUDFQAAAAAdAAAAABAE"
              alt=""
            />
          </div>
          <div className={`${style.form} h-full`}>
            <div className={`${style.loginForm}`}>SignIn</div>
            <div className={`${style.signupForm}`}>SignUp</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
