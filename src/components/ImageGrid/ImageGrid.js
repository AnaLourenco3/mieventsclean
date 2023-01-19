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
                src="https://res.cloudinary.com/dbfcdt6sp/image/upload/v1674139067/IMG_7577_idmjso.jpg"
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
                src="https://res.cloudinary.com/dbfcdt6sp/image/upload/v1674134824/Feedback/image_6483441_bprnun.jpg"
                alt=""
                onClick={() => navigate("/category/3")}
              />
            </div>
            <div className="text">Bachelorette Party</div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dbfcdt6sp/image/upload/v1674134825/Feedback/image_6483441_1_fbjlz1.jpg"
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
                src="https://res.cloudinary.com/dbfcdt6sp/image/upload/v1674134825/Feedback/image_6487327_ucdvcc.jpg"
                alt=""
                onClick={() => navigate("/category/4")}
              />
            </div>
            <div className="text">Vow Renewal</div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dbfcdt6sp/image/upload/v1674134825/Feedback/image_6483441_2_fj96te.jpg"
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
                src="https://res.cloudinary.com/dbfcdt6sp/image/upload/v1674134824/Feedback/image_6487327_1_yowxgw.jpg"
                alt=""
                onClick={() => navigate("/category/7")}
              />
            </div>
            <div className="text">Gender Reveal Party</div>
          </div>
        </div>

        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dbfcdt6sp/image/upload/v1674134824/Feedback/image_6483441_3_kvda72.jpg"
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
                src="https://res.cloudinary.com/dbfcdt6sp/image/upload/v1674134824/Feedback/image_6483441_4_ojuuio.jpg"
                alt=""
                onClick={() => navigate("/category/8")}
              />
            </div>
            <div className="text">Birthday Party Children</div>
          </div>
        </div>
        <div className="gallery-container">
          <div className="gallery-item">
            <div className="image">
              <img
                src="https://res.cloudinary.com/dbfcdt6sp/image/upload/v1674134825/Feedback/image_50462465_to3avx.jpg"
                alt=""
                onClick={() => navigate("/category/9")}
              />
            </div>
            <div className="text">Birthday Party Adult</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ImageGrid;
