import React from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import { Header } from "./components/Header/Header";
import { List } from "./components/List/List";
import { SessionFilteredList } from "./components/SessionFilteredList/SessionFilteredList";
import { Hall } from "./components/Hall/Hall";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path="/list" component={List} />
        <Route path="/sessions/:slug" component={SessionFilteredList} />
        <Route path="/hall/:slug" component={Hall} />
      </Switch>
    </div>
  );
}

export default App;
