import { useEffect, useState } from "react";
import { Container, Button } from "reactstrap";
import ProjectCard from "./components/ProjectCard";
import projectjson from "./projects.json";
import LogIn from "./components/LogIn";
import All from "./App.css";
import { ProjectList } from "./components/ProjectList";

function App() {
  let [showlog, setShowlog] = useState(true);

  const onLoginSuccess = () => {
    setShowlog(!showlog);
  };

  return (
    <Container>
      {showlog ? <LogIn onShow={onLoginSuccess} /> : <ProjectList />}
    </Container>
  );
}

export default App;
