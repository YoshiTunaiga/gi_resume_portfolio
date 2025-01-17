import { useNavigate } from "react-router-dom";
import "@/styles/homeStyle.css";

const Home = () => {
  const router = useNavigate();
  const portfolioItems = [
    { title: "Resume", route: "resume", color: "#f5adad" },
    { title: "Projects", route: "projects", color: "#89b7e1" },
    { title: "Contact", route: "contact", color: "#f8f99a" },
  ];
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          {/* ========== Profile Picture =========== */}
          <div className="profile-picture">
            <div className="profile-picture-background"></div>
          </div>

          {/* ========== About Me =========== */}
          <div className="profile-about">
            <div
              style={{
                fontFamily: "Arial Black",
                fontSize: "48px",
                padding: 0,
                margin: 0,
              }}>
              Gi Diaz
            </div>
            <div>
              <div className="profile-details-name">
                Allow Me To Introduce Myself
              </div>
              <div
                style={{
                  fontFamily: "Arial",
                  marginTop: 5,
                  opacity: 0.8,
                }}>
                I am a Full-Stack Software Engineer with a keen interest in data
                analysis. My goal is to create impactful, user-centric
                applications that drive business growth, enhance user
                experiences, and potentially save lives.
              </div>
            </div>
            <div
              className="profile-options"
              style={{
                display: "flex",
                flexDirection: "row",
                alignSelf: "center",
                gap: 8,
                padding: 20,
                maxWidth: 490,
              }}>
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  className="profile-option"
                  style={{
                    backgroundColor: item.color,
                    color: "var(--dark-background)",
                  }}
                  onClick={() => router(`/${item.route}`)}>
                  <div>
                    <div style={{ fontWeight: "bold" }}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="profile-sub-section">
        <div>
          <p className="subheading-color">Language</p>
          <p className="subheading-color-2">Billingual</p>
        </div>
        <div>
          <p className="subheading-color">Location</p>
          <p className="subheading-color-2">Florida</p>
        </div>
        <div>
          <p className="subheading-color">Tech Experience</p>
          <p className="subheading-color-2">2+ Years</p>
        </div>
        <div>
          <p className="subheading-color">Customer Services</p>
          <p className="subheading-color-2">12+ Years</p>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
