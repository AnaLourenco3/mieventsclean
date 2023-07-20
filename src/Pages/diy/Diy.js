import styled from "styled-components";

import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import {
  selectBlogsData,
  selectCategoryData,
} from "../../store/categories/selectors";
import { fetchBlogDataPerCategory } from "../../store/categories/thunks";
import Pagination from "../../components/Pagination";

function Diy() {
  const dispatch = useDispatch();
  const { id } = useParams();
  const blogsData = useSelector(selectBlogsData);

  const categoryData = useSelector(selectCategoryData);
  // console.log("from data category", categoryData);

  // console.log("from data blogs", blogsData);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentBlogsData = blogsData.slice(startIndex, endIndex);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 500);
  };

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
        <ContainerImageHero>
          <ImageHero src={categoryData.imageUrl} alt="img wedding" />
          <TitleEvent>{categoryData.name}</TitleEvent>
        </ContainerImageHero>
      )}
      <ContainerBody>
        {categoryData && (
          <div>
            <ContainerQuote>{categoryData.quote}</ContainerQuote>
            <ContainerDescriptionCategory>
              <p>{categoryData.description}</p>
            </ContainerDescriptionCategory>{" "}
          </div>
        )}
        {currentBlogsData &&
          currentBlogsData.map((data, index) => (
            <ContainerBlog key={index}>
              <ContainerSingleBlog>
                <p>{data.date}</p>
                <BlogTitle>{data.title}</BlogTitle>
                <p>{data.text}</p>
              </ContainerSingleBlog>

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
        <ContainerPagination>
          <Pagination
            currentPage={currentPage}
            totalPages={Math.ceil(blogsData.length / itemsPerPage)}
            onPageChange={handlePageChange}
          />
        </ContainerPagination>
      </ContainerBody>
    </div>
  );
}

export default Diy;

const ContainerImageHero = styled.div`
  width: auto;
  height: 550px;
  margin: 135px 0 0 0;
  text-align: center;
  position: relative;

  @media (max-width: 768px) {
    height: 400px;
  }
`;

const ImageHero = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
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
    font-size: 2.5rem;
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
  }
`;

const ContainerDescriptionCategory = styled.div`
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
  }
`;

const ContainerBlog = styled.div`
  max-width: 1500px;
  margin: 80px auto 0 auto;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    width: 90%;

    margin: 0 auto 50px auto;
    text-align: center;
    font-size: 0.8rem;
  }
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

const ContainerSingleBlog = styled.div`
  padding-top: 30px;

  @media (max-width: 768px) {
    padding-top: 0;
  }
`;

const BlogTitle = styled.h2`
  font-weight: 300;
  color: #c9952c;
`;

const ContainerPagination = styled.div`
  margin: 100px auto 50px auto;
  display: flex;
  justify-content: center;
`;
