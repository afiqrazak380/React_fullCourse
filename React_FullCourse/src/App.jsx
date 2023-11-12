import Book from "./Book";

function App() {
  const Name = () => <h1>Herry</h1>;

  return (
    <>
      <Book></Book>
      <Book1></Book1>
    </>
  );
}

export default App;

const Book1 = () => {
  return (
    <article>
      <Title></Title>
      <Image></Image>
      <Author></Author>
    </article>
  );
};

const Title = () => <h1>Titanic Coloring Book</h1>;
const Image = () => (
  <img
    src="https://m.media-amazon.com/images/I/71q3eq1MSiL._SY342_.jpg"
    alt=";"
  ></img>
);
const Author = () => <h4>Titanic Author</h4>;
