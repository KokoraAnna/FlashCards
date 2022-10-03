import React, { useEffect, useState } from "react";
import DeckList from "../components/Cards/DeckList";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const Decks = () => {
  const [datas, setDatas] = useState(false);

  const { isLoading, sendRequest: fetchDecks } = useHttp();

  useEffect(() => {
    const transformDecks = (decksObj) => {
      const loadedDecks = [];

      for (const key in decksObj) {
        loadedDecks.push({
          id: key,
          titleOfDeck: decksObj[key].titleOfDeck,
          percent: decksObj[key].percent,
          words: decksObj[key].words,
        });
      }
      setDatas(loadedDecks);
    };
    fetchDecks(
      {
        url: "https://flashcards1-43095-default-rtdb.europe-west1.firebasedatabase.app/decks.json",
      },
      transformDecks
    );
  }, [fetchDecks]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <DeckList cards={datas} />;
};

export default Decks;
