import styled from "styled-components";

import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import {
  selectBlogsData,
  selectCategoryData,
} from "../../store/categories/selectors";
import { fetchBlogDataPerCategory } from "../../store/categories/thunks";

function Diy() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();
  const blogsData = useSelector(selectBlogsData);

  const categoryData = useSelector(selectCategoryData);
  console.log("from data category", categoryData);

  // console.log("from data blogs", blogsData);

  useEffect(() => {
    // if (id !== 11) {
    //   navigate("/");
    // }
    dispatch(fetchBlogDataPerCategory(id));
  }, [dispatch, id]);

  if (!blogsData) return <p>Loading...</p>;
  return (
    <div>
      {categoryData && (
        <ContainerImage>
          <img
            className="imagePanorama"
            src={categoryData.imageUrl}
            alt="img wedding"
          />
          <TitleEvent>{categoryData.name}</TitleEvent>
        </ContainerImage>
      )}
      <ContainerBody>
        {categoryData && (
          <div>
            <ContainerQuote>{categoryData.quote}</ContainerQuote>
            <ContainerText>
              <p>{categoryData.description}</p>
            </ContainerText>{" "}
          </div>
        )}
        {blogsData &&
          blogsData.map((data, index) => (
            <ContainerBlog key={index}>
              <ContainerDescriptionBlog>
                <h4>{data.date}</h4>
                <h4>{data.title}</h4>
                <p>{data.text}</p>
              </ContainerDescriptionBlog>

              <VideoFrame
                src={data.videoUrl}
                width="320"
                height="564"
                title="diy"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen
              ></VideoFrame>
            </ContainerBlog>
          ))}
      </ContainerBody>
    </div>
  );
}

export default Diy;

const ContainerImage = styled.div`
  width: auto;
  height: 500px;
  margin: 135px 0 0 0;
  text-align: center;
`;

const TitleEvent = styled.h1`
  font-family: Amsterdam;
  font-size: 4rem;
  text-shadow: 2px 1px 4px black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: auto;
  color: white;
  z-index: 4;
  transition: 0.6s ease-in-out;
  letter-spacing: 25px;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ContainerBody = styled.div`
  width: 85%;
  min-height: 800px;
  max-height: none;
  margin: 0 auto 100px auto;
  @media (max-width: 768px) {
    width: 95%;
    max-height: none;
    margin: 70px auto 110px auto;
  } ;
`;

const ContainerText = styled.div`
  margin: 50px auto 110px auto;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  vertical-align: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
    max-height: none;
    margin: 50px auto 50px auto;
    line-height: 20px;
    text-align: center;
  } ;
`;

const ContainerBlog = styled.div`
  max-width: 900px;
  height: auto;
  margin: 80px auto auto auto;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    max-width: 100%;

    max-height: none;
    margin: 0 auto 50px auto;
    line-height: 7px;
    text-align: center;

    font-size: 0.8rem;
  } ;
`;

const ContainerQuote = styled.div`
  text-align: center;

  margin: 50px auto 50px auto;
  font-family: "Dancing Script";
  font-size: 2rem;
  vertical-align: center;
`;
// const ContainerImageBlog = styled.div`
//   margin-left: 50px;

//   @media (max-width: 768px) {
//     margin-left: 0;
//     text-align: center;
//   } ;
// `;

const VideoFrame = styled.iframe`
  display: block;
  justify-content: center;
  border: black;

  margin: 40px auto auto auto;
  /* @media (max-width: 768px) {
    width: 350px;
    height: 250px;
  } ; */
`;

const ContainerDescriptionBlog = styled.div`
  padding-top: 30px;

  @media (max-width: 768px) {
    padding-top: 0;
  } ;
`;

// const LinkDetails = styled(Link)`
//   color: grey;
// `;
