import { data } from "./data/data.js";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Favorite } from "./components/Favorite";
import { useEffect, useState } from "react";
import { Navbar } from "./components/Navbar";
import { Main } from "./components/Main";
import { NoResulte } from "./components/NoResulte.jsx";

function App() {
  const [favorite, setFavorite] = useState([]);
  const [show, setShow] = useState(false);
  const [backDrop, setBackDrop] = useState(false);
  const [dataProducts, setDataProducts] = useState(data);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (search.length > 0) {
      const newProducts = data.filter((item) =>
        item.name.toLowerCase().match(search.toLowerCase())
      );
      setDataProducts(newProducts);
    } else {
      setDataProducts(data);
    }
  }, [search]);

  const favoriteHandler = (id) => {
    const includes = favorite.some((item) => item.id == id);
    const favoriteItem = data.find((item) => item.id == id);
    if (includes)
      return setFavorite((favorite) =>
        favorite.filter((item) => item.id !== id)
      );
    setFavorite((favorite) => [...favorite, favoriteItem]);
  };
  useEffect(() => {
    console.log(favorite);
  }, [favorite]);

  return (
    <>
      <Header>
        <Navbar show={show} setShow={setShow} setSearch={setSearch}/>
        <Favorite
          favorite={favorite}
          favoriteHandler={favoriteHandler}
          show={show}
          setShow={setShow}
        />
      </Header>
      <Main backDrop={backDrop}>
        <Card
          dataProducts={dataProducts}
          favoriteHandler={favoriteHandler}
          backDrop={backDrop}
        >
          <NoResulte />
        </Card>
      </Main>
    </>
  );
}

export default App;