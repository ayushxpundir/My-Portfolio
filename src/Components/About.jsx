import Links from "./Links";

function About() {
  return (
    <>
      <section>
        <div className="about">
          {/* <div className="s-head">
            <h1>ABOUT</h1>
          </div> */}
          <div className="ab-info">
            <ol>
              <li>
                I build complete web systems.
              </li>
            </ol>
          </div>
          <Links />
        </div>
      </section>
    </>
  );
}

export default About;
