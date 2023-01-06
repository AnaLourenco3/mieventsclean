import styled from "styled-components";
import PhotoGalleryDetails from "../../../components/GalleryImages/PhotoGalleryDetails";
// import { dataWeddings } from "./dataweddings";
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchBlogDataById } from "../../../store/blogs/thunks";
import { useParams } from "react-router-dom";

import { selectBlog } from "../../../store/blogs/selectors";
import { selectBlogsData } from "../../../store/categories/selectors";
import { fetchBlogDataPerCategory } from "../../../store/categories/thunks";

function WeddingsDetails() {
  const dispatch = useDispatch();
  const { id } = useParams();

  const blogData = useSelector(selectBlog);
  console.log("from details lalala", blogData);

  useEffect(() => {
    dispatch(fetchBlogDataById(id));
  }, [dispatch, id]);

  if (!blogData || parseInt(blogData.id) !== parseInt(id))
    return <p>Loading...</p>;

  return (
    <ContainerBody>
      <ContainerBlogDetails>
        <div>
          <p>{blogData.date}</p>
          <h2>{blogData.title}</h2>
          <p>{blogData.text}</p>{" "}
        </div>
      </ContainerBlogDetails>
      <PhotoGalleryDetails blogData={blogData} />
    </ContainerBody>
  );
}

export default WeddingsDetails;

const ContainerBody = styled.div`
  width: 60%;
  min-height: 800px;
  max-height: none;
  margin: 250px auto 110px auto;
  line-height: 30px;
  text-align: center;
  font-family: "Poppins";

  @media (max-width: 768px) {
    width: 90%;
    min-height: 500px;
    max-height: none;
    margin: 200px auto 110px auto;
    line-height: 15px;
    text-align: center;
  } ;
`;
const ContainerBlogDetails = styled.div`
  font-size: 1rem;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 40px;
  } ;
`;
