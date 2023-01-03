import { Link } from "react-router-dom";
import "./imageGrid.css";
import { useNavigate } from "react-router-dom";

function ImageGrid() {
  const navigate = useNavigate();

  return (
    <div>
      <h1 className="title">Services & Photo Gallery</h1>
      <div className="container">
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
                onClick={() => navigate("/category/1")}
              />
            </div>
            <div className="text">Wedding</div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1628336707631-68131ca720c3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8YmFjaGVsb3JldHRlJTIwcGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                onClick={() => navigate("/category/3")}
              />
            </div>
            <div className="text">Bachelorette party</div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1605101943206-05c8f4e64598?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                alt=""
                onClick={() => navigate("/category/2")}
              />
            </div>
            <div className="text">Wedding Proposal</div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1598901801652-6762bb611581?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Vm93JTIwcmVuZXdhbHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                onClick={() => navigate("/category/4")}
              />
            </div>
            <div className="text">Vow renewal</div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1566516171511-1c411a59c8ba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
                alt=""
                onClick={() => navigate("/category/5")}
              />
            </div>
            <div className="text">Baptism</div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1594300907312-c6603f83b2c6?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8QmFieSUyMHNob3dlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                onClick={() => navigate("/category/6")}
              />
            </div>
            <div className="text">Baby Shower</div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1525268771113-32d9e9021a97?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8Z2VuZGVyJTIwcmV2ZWxhdGlvbiUyMHBhcnR5fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                onClick={() => navigate("/category/7")}
              />
            </div>
            <div className="text">Gender reveal party</div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/flagged/photo-1571275460369-dc7c65c85082?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTZ8fGJpcnRoZGF5JTIwcGFydHklMjBjaGlsZHxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
                alt=""
                onClick={() => navigate("/category/8")}
              />
            </div>
            <div className="text">Birthday party Children</div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://images.unsplash.com/photo-1544155892-b2b6c64204fc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcnRoZGF5JTIwcGFydHl8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60"
                alt=""
                onClick={() => navigate("/category/9")}
              />
            </div>
            <div className="text">Birthday party Adult</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
