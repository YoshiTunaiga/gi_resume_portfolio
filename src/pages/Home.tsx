// import Stack from "@mui/material/Stack";
// import Typography from "@mui/material/Typography";
// import Avatar from "@mui/material/Avatar";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const router = useNavigate();
  const portfolioItems = [
    { title: "Resume", route: "resume" },
    { title: "Projects", route: "projects" },
    { title: "Contact", route: "contact" },
  ];
  return (
    <div>
      <div>
        <div>
          <div
            style={{
              flexDirection: "row",
              alignSelf: "center",
              gap: 4,
              maxWidth: 450,
            }}>
            <img
              alt="Gi Diaz Picture"
              src="https://avatars.githubusercontent.com/u/85481752?v=4"
              style={{ width: 400, height: 400 }}
            />
          </div>
          {/* ========== About Me =========== */}
          <div>
            <div style={{ fontFamily: "Arial Black" }}>Gi Diaz</div>
            <div style={{ textAlign: "left" }}>
              <div style={{ fontFamily: "Arial Black" }}>
                Allow Me To Introduce Myself
              </div>
              <div style={{ fontFamily: "Arial" }}>
                I am a a Full-div Software Engineer with a keen interest in data
                analysis. My goal is to create impactful, user-centric
                applications that drive business growth, enhance user
                experiences, and potentially save lives.
              </div>
            </div>
            <div
              style={{
                flexDirection: "row",
                alignSelf: "center",
                gap: 4,
                maxWidth: 490,
              }}>
              {portfolioItems.map((item, index) => (
                <div
                  key={index}
                  style={{
                    gap: 2,
                    border: "1px solid",
                    borderRadius: 30,
                    padding: 5,
                    cursor: "pointer",
                  }}
                  onClick={() => router(`/${item.route}`)}>
                  <div>
                    <div style={{ fontWeight: "medium" }}>{item.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Home.propTypes = {};

export default Home;
