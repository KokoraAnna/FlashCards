import React, { useState, useEffect } from "react";
import List from "../components/List/List";
import useHttp from "../hooks/use-http";
import LoadingSpinner from "../components/UI/LoadingSpinner";

const TermsList = () => {
  const [data, setData] = useState(false);
  const { isLoading, sendRequest: fetchData } = useHttp();

  useEffect(() => {
    const transformData = (dataObj) => {
      const loadedData = [];

      for (const key in dataObj) {
        loadedData.push({
          id: key,
          titleOfDeck: dataObj[key].titleOfDeck,
          percent: dataObj[key].percent,
          words: dataObj[key].words,
        });
      }
      setData(loadedData);
    };
    fetchData(
      {
        url: "https://flashcards1-43095-default-rtdb.europe-west1.firebasedatabase.app/decks.json",
      },
      transformData
    );
  }, [fetchData]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return <List decks={data} />;
};

export default TermsList;
