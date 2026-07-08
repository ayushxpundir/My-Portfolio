import { FaArrowRight } from "react-icons/fa6";
import { LuExternalLink } from "react-icons/lu";
import { Link } from "react-router-dom";
import certifications from "../Data/Certificationsdata.jsx";

function CertificationItem({ cert }) {
  return (
    <div className="exp-cont">
      <div className="timeline-row">
        <div className="timeline-content">
          <div className="st-side">
            <div className="exp-stack">
              {cert.stack.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div className="icon-box" data-title={item.title} key={i} style={{ backgroundColor: item.bg }}>
                    <Icon className="exp-sicons" style={{ color: item.color }} />
                  </div>
                );
              })}
            </div>
            <div>
              <div className="exp-title">
                <h3>
                  {cert.title} ·{" "}
                  <span className={cert.companyClass}>{cert.company} </span>{" "}
                </h3>
              </div>
              <p className="subtitle">
                {" "}
                <a href={cert.link} target="_blank" rel="noreferrer">
                  {cert.issued} <LuExternalLink className="certext" />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Certifications() {
  return (
    <>
      <section>
        <div className="experience">
          <div className="s-head">
            <h1>CERTIFICATIONS</h1>
            <Link
              to="/certifications"
              className="See-more"
              onClick={() =>
                sessionStorage.setItem("homeScrollY", window.scrollY)
              }
            >
              <div className="box-see-more">
                <h1>SHOW ALL</h1>
                <FaArrowRight className="arrow-right" />
              </div>
            </Link>
          </div>
          <div className="exp-work">
            <div className="timeline-container">
              {certifications.slice(0, 2).map((cert) => (
                <CertificationItem cert={cert} key={cert.id} />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export { CertificationItem };
export default Certifications;
