import avatar from "./assets/image-avatar.webp";
import article from "./assets/illustration-article.svg";
import "./App.css";
export default function App() {
  const cardInfo = {
    heading: "HTML & CSS foundations",
    cardText:
      "These languages are the backbone of every website, defining structure, content, and presentation",
    date: "Publish 21 Dec 2023",
    button: "Learning",
    btnLink: "#",
    name: "Grey Hooper",
  };
  return (
    <main>
      <img src={article} className="illustration" alt="article illustration" />
      <a href={cardInfo.btnLink}>
        <button>{cardInfo.button}</button>
      </a>
      <p>{cardInfo.date}</p>
      <h1>{cardInfo.heading}</h1>
      <p>{cardInfo.cardText}</p>
      <div className="d-flex">
        <img src={avatar} alt="avater" />
        <p>{cardInfo.name}</p>
      </div>
    </main>
  );
}
