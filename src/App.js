import { Route, Routes, Navigate } from "react-router-dom";
import React from "react";
import Layout from "./components/layout/Layout";
import Decks from "./pages/Decks";
import TermsList from "./pages/TermsList";
import CardPage from "./pages/CardPage";
import TestPage from "./pages/TestPage";
import StartTest from "./components/Test/StartTest";
import ErrorPage from "./components/UI/ErrorPage";

const App = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Navigate to="decks" />} />
        <Route path="/list" element={<TermsList />} />
        <Route path="/test/:deckTitle" element={<TestPage />} />
        <Route path="/decks" element={<Decks />} />
        <Route path="/start" element={<StartTest />} />
        <Route path="/decks/:deckTitle" element={<CardPage />} />
        <Route path="/error" element={<ErrorPage />} />
      </Routes>
    </Layout>
  );
};
export default App;
