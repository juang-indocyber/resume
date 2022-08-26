import type { NextPage } from "next";
import github from "../assets/github.webp";
import linkedin from "../assets/linkedin.webp";
import instagram from "../assets/instagram.webp";
import gmail from "../assets/gmail.webp";

export const About: NextPage = () => {
  return (
    <>
      <div className="about_left">
        <h1 className="about_left_head">Hi, Im Juang Sabit Al Nadiev</h1>
        <p className="about_left_text">
        Hi everyone! I would like to introduce myself. My name is Juang Sabit Al Nadiev. My nickname is Juang. I am from Tegal, but now I live in Jakarta. I'm Software Engineer. I was passionate about Technology because Technology is best when it brings people together.
        </p>
        <div className="about_left_socialMedia">
          <img
            src={github.src}
            alt=""
            onClick={() => window.open("https://github.com/iamhiman", "_blank")}
          />
          <img
            src={linkedin.src}
            alt=""
            onClick={() => window.open("https://www.linkedin.com/in/himankash/", "_blank")}
          />
          <img
            src={instagram.src}
            alt=""
            onClick={() => window.open("https://www.instagram.com/himan_kash/", "_blank")}
          />
          <img
            src={gmail.src}
            alt=""
            onClick={() => window.open("mailto:himanshu27kashyap@gmail.com", "_blank")}
          />
        </div>
        <div
          className="about_left_starme"
          onClick={() => window.open("https://github.com/iamhiman/personal-webpage-v2", "_blank")}
        >
          ⭐ Star Me On Github
        </div>
      </div>
      <div className="about_right">
        <div className="about_right_profilePic" />
      </div>
    </>
  );
};
