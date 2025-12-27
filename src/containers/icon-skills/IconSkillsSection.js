import React from "react";
import "./IconSkillsSection.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import iconSkills from "./iconSkillsData";

const images = require.context(
  "../../assets/icon-skills",
  false,
  /\.(png|jpe?g)$/
);

function IconSkillsSection(props) {
  const theme = props.theme || {};
  return (
    <div className="icon-skills-section">
      <h1 className="skills-header" style={{ color: theme.text }}>
        Autres savoir-faire
      </h1>
      <div className="grid-container">
        {iconSkills.map((group) => (
          <div
            key={group.heading}
            style={{
              margin: 25,
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <div className="skills-heading" style={{ color: theme.text }}>
              {group.heading}
            </div>
            <div className="icon-skills-grid">
              {group.apps.map((app) => {
                let src;
                try {
                  const mod = images(`./${app.file}`);
                  src = mod && mod.default ? mod.default : mod;
                } catch (err) {
                  src = `${process.env.PUBLIC_URL}/icon-skills/${app.file}`;
                }
                return (
                  <OverlayTrigger
                    key={app.name}
                    placement={"top"}
                    overlay={
                      <Tooltip id={`tooltip-${app.name}`}>
                        <strong
                          style={{ color: "#ffffff", background: "#000000" }}
                        >
                          {app.name}
                        </strong>
                      </Tooltip>
                    }
                  >
                    <div className="icon-skill-card">
                      <a
                        href={app.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="icon-skill-img"
                          src={src}
                          alt={app.name}
                        />
                      </a>
                    </div>
                  </OverlayTrigger>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default IconSkillsSection;
