import React from "react";
import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

const images = require.context(
  "../../assets/images",
  false,
  /\.(png|jpe?g|svg)$/
);

class SoftwareSkill extends React.Component {
  render() {
    return (
      <div>
        <div className="software-skills-main-div">
          <ul className="dev-icons">
            {this.props.logos.map((logo) => {
              return (
                <OverlayTrigger
                  key={logo.skillName}
                  placement={"top"}
                  overlay={
                    <Tooltip id={`tooltip-top`}>
                      <strong>{logo.skillName}</strong>
                    </Tooltip>
                  }
                >
                  <li className="software-skill-inline" name={logo.skillName}>
                    {logo.fontAwesomeClassname && (
                      <span
                        className="iconify"
                        data-icon={logo.fontAwesomeClassname}
                        style={logo.style}
                        data-inline="false"
                      ></span>
                    )}

                    {!logo.fontAwesomeClassname &&
                      logo.imageSrc &&
                      (() => {
                        let imgSrc;
                        try {
                          const mod = images(`./${logo.imageSrc}`);
                          imgSrc = mod && mod.default ? mod.default : mod;
                        } catch (err) {
                          imgSrc = `${process.env.PUBLIC_URL}/skills/${logo.imageSrc}`;
                        }
                        return (
                          <img
                            className="skill-image"
                            style={logo.style}
                            src={imgSrc}
                            alt={logo.skillName}
                          />
                        );
                      })()}
                  </li>
                </OverlayTrigger>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }
}

export default SoftwareSkill;
