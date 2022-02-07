import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export function ProjectList() {
  let [resp, setResp] = useState([]);

  useEffect(() => {
    const request = {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    };

    fetch("https://reqres.in/api/users?page=2", request)
      .then((res) => res.json())
      .then((res) => setResp(res["data"]));
  }, []);

  return (
    <>
      {resp.map((res) => {
        return (
          <ProjectCard
            imgSrcUrl={res.avatar}
            cardTitle={res.first_name}
            description={res.email}
            key={res.email}
          />
        );
      })}
    </>
  );
}
