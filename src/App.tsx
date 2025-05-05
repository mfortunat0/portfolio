import { FaGithub, FaNodeJs, FaReact } from "react-icons/fa";
import style from "./App.module.css";
import BackgroundAnimation from "./bacgroundAnimation";
import { SiKubernetes } from "react-icons/si";
import { useEffect, useState } from "react";
import axios from "axios";

interface GithubData {
  public_repos: number;
  followers: number;
  stargazers_count: number;
}

function App() {
  const [data, setData] = useState<GithubData | undefined>();
  const [stars, setStars] = useState(0);

  const getData = async () => {
    const result = await (
      await axios.get<Promise<GithubData>>(
        "https://api.github.com/users/mfortunat0"
      )
    ).data;
    setData(result);
    setStars(
      await (
        await axios.get<GithubData[]>(
          `https://api.github.com/users/mfortunat0/repos?per_page=${result.public_repos}`
        )
      ).data.reduce((acc, repo) => {
        if (repo.stargazers_count > 0) {
          return repo.stargazers_count + acc;
        }
        return acc;
      }, 0)
    );
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <main>
      <nav>
        <div>
          <img src="" alt="" />
          <h1>Matheus fortunato</h1>
        </div>
        <ul>
          <li>
            <a href="">Technologies</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">
              <FaGithub />
            </a>
          </li>
        </ul>
      </nav>
      <header>
        <h2>
          Welcome To <br /> My Personal Portfolio
        </h2>
        <BackgroundAnimation />
      </header>
      <section className={style.sectionTechnologies}>
        <h2>Technologies</h2>
        <p>
          I have been working with Javascript and Typescript in web development.
          from Backend to Deploy
        </p>
        <div>
          <div>
            <FaReact />
            <h3>Front-End</h3>
            <p>Experiece with React.js</p>
          </div>
          <div>
            <FaNodeJs />
            <h3>Back-End</h3>
            <p>Experience with Nodejs, Express.js, Nestjs, Sql and NoSql</p>
          </div>
          <div>
            <SiKubernetes />
            <h3>DevOps</h3>
            <p>Experience with Docker, Kubernetes, CI/CD</p>
          </div>
        </div>
        <span className={style.divider}></span>
      </section>
      <section>
        <h2>About Me</h2>
        <p>
          Hello, I'm an App Developer with a journey that began in 2016 when I
          explored the fundamentals of programming through the C language in a
          technical course. In 2017, I focused my studies on Java, but my
          pursuit of new technologies led me to start learning JavaScript with
          Node.js in 2019. Since then, I've continuously dedicated myself to
          improving my programming and app development skills, expanding beyond
          just backend to include frontend and DevOps practices like Docker,
          Kubernetes, and Cloud.
        </p>
        <span className={style.divider}></span>
      </section>
      <section className={style.sectionAchievements}>
        <h2>Personal Achievements</h2>
        <div>
          <div className={style.box}>
            <p className={style.boxTitle}>{data?.public_repos || 0}</p>
            <p className={style.boxSubTitle}>Repositories</p>
          </div>
          <div className={style.box}>
            <p className={style.boxTitle}>{data?.followers || 0}</p>
            <p className={style.boxSubTitle}>Github Followers</p>
          </div>
          <div className={style.box}>
            <p className={style.boxTitle}>{stars}</p>
            <p className={style.boxSubTitle}>Github Stars</p>
          </div>
        </div>
        <span className={style.divider}></span>
      </section>
      <footer>
        <div>
          <p>CALL</p>
          <a href="" className={style.contactNumber}>
            +55 (12)992269582
          </a>
        </div>{" "}
        <div>
          <p>Email</p>
          <a href="" className={style.contactEmail}>
            matheus.xmaz10@gmail.com
          </a>
        </div>
        <h3>Innovating one project at a time</h3>
      </footer>
    </main>
  );
}

export default App;
