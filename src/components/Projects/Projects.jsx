import React from "react";
import "./Projects.css";
import proj1 from "./images/proj1.png";
import instagramCRUD from "./images/InstagramCRUD.jpg";
import reactCB from "./images/reactContactBook.png";
const Projects = () => {
  return (
    <div>
      <h2 className="project_title">My Projects</h2>
      <div className="d-flex justify-content-around">
        <div className="d-flex flex-column align-items-center">
          <a
            className="project_href"
            href="https://github.com/venusblue1708/CRUDClassroomHomeWork.git"
          >
            ContactBookLocalStorage{" "}
          </a>
          <img src={proj1} alt="project-1" width={400} />
        </div>
        <div>
          <div className="d-flex flex-column align-items-center">
            <a
              className="project_href"
              href="https://github.com/AygerimBrk/instagramCRUD.git"
            >
              InstagramCRUD{" "}
            </a>
            <h6 className="project_text">with AygerimBrk</h6>
            <img src={instagramCRUD} alt="project-1" width={400} />
          </div>
          <div className="d-flex flex-column align-items-center">
            <a
              className="project_href"
              href="https://github.com/AygerimBrk/instagramCRUD.git"
            >
              ReactContactBook{" "}
            </a>
            <img src={reactCB} alt="project-1" width={400} height={150} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
