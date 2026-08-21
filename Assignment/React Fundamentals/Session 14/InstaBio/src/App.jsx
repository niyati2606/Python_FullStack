import React from "react"
import ProfileCard from "./Component/ProfileCard"
import SocialLinks from "./Component/SocialLinks";
import ProjectCard from "./Component/ProjectCard";

function App() {

  const socialLinks = [
    {
      name: "Instagram",
      url: "https://instagram.com/"
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/"
    },
    {
      name: "GitHub",
      url: "https://github.com/"
    }
  ];

  return (
    <div className="bg-light min-vh-100 py-5">

      <div className="container">

        <h1 className="text-center mb-4">
          InstaBio
        </h1>

        <div className="row justify-content-center">

          <div className="col-md-6">

            <ProfileCard
              name="Niyati Patel"
              profilePic="https://i.pravatar.cc/300"
              bio="React Developer | Frontend Enthusiast | Building awesome web experiences."
            />

            <SocialLinks
              links={socialLinks}
              theme="light"
            />

          </div>

        </div>

        <h2 className="text-center mt-5 mb-4">
          My Projects
        </h2>

        <div className="row justify-content-center">

          <div className="col-md-4 mb-4">

            <ProjectCard
              projectName="InstaBio"
              description="A simple React profile website built using reusable components."
              image="https://picsum.photos/500/300"
              projectLink="https://github.com/niyati2606"
            />

          </div>

        </div>

      </div>

    </div>
  )
}

export default App
