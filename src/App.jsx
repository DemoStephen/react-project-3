import avatar from "./assets/image-avatar.webp";
import article from "./assets/illustration-article.svg";
import "./App.css";
import { cardInfo } from "./util";
export default function App() {
  return (
    <main>
      <img src={article} className="illustration" alt="article illustration" />
      <a href={cardInfo.btnLink}>
        <button>{cardInfo.button || "Learning"}</button>
      </a>
      <p>{cardInfo.date || "Publish 4 March 2024"}</p>
      <h1>{cardInfo.heading}</h1>
      <p>{cardInfo.cardText}</p>
      <div className="d-flex">
        <img src={avatar} alt="avater" />
        <p>{cardInfo.name || "Adewale Stephen"}</p>
      </div>
    </main>
  );
}
