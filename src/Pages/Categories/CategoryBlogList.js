import styled from "styled-components";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  selectBlogsData,
  selectCategoryData,
} from "../../store/categories/selectors";
import { fetchBlogDataPerCategory } from "../../store/categories/thunks";

function CategoryBlogList() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const blogsData = useSelector(selectBlogsData);

  const categoryData = useSelector(selectCategoryData);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (id > 10) {
      navigate("/");
    }
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
          blogsData.map((item, index) => (
            <ContainerBlog key={index}>
              <ContainerImageBlog>
                <ImageBlog src={item.mainImageUrl} alt="img wedding" />
              </ContainerImageBlog>
              <ContainerDescriptionBlog>
                <p>{item.date}</p>
                <EventName>{item.title}</EventName>
                <LinkDetails to={`/blog/${item.id}`}>Ver mais</LinkDetails>
              </ContainerDescriptionBlog>
            </ContainerBlog>
          ))}
      </ContainerBody>
    </div>
  );
}

export default CategoryBlogList;

const ContainerImage = styled.div`
  width: auto;
  height: 500px;
  margin: 135px 0 0 0;
  text-align: center;
`;

const TitleEvent = styled.p`
  font-family: Amsterdam;
  font-size: 4rem;
  text-shadow: 2px 1px 4px black;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: auto;
  color: white;
  z-index: 4;
  transition: 0.6s ease-in-out;
  @media (max-width: 1060px) {
    font-size: 3rem;
  }
`;

const ContainerBody = styled.div`
  width: 85%;
  min-height: 800px;
  margin: 0 auto 100px auto;
  @media (max-width: 768px) {
    width: 95%;
    margin: 70px auto 110px auto;
  } ;
`;

const ContainerQuote = styled.div`
  text-align: center;

  margin: 100px auto 50px auto;
  font-family: "Dancing Script";
  font-size: 2rem;
  vertical-align: center;
`;

const ContainerText = styled.div`
  margin: 50px auto 100px auto;
  font-family: "Poppins", sans-serif;
  font-size: 1.1rem;
  vertical-align: center;
  text-align: center;

  @media (max-width: 768px) {
    width: 90%;
    margin: 50px auto 80px auto;
  } ;
`;

const ContainerBlog = styled.div`
  max-width: 900px;

  margin: 150px auto 150px auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 100%;
    margin: 0 auto 100px auto;
    line-height: 7px;
    text-align: center;
    display: flex;
    flex-direction: column;
    grid-gap: 10px;
    font-size: 0.8rem;
  } ;
`;

const ContainerImageBlog = styled.div`
  @media (max-width: 768px) {
    margin-left: 0;
    text-align: center;
  } ;
`;

const ImageBlog = styled.img`
  width: 450px;
  height: 350px;

  @media (max-width: 768px) {
    width: 350px;
    height: 250px;
  } ;
`;

const ContainerDescriptionBlog = styled.div`
  padding-top: 30px;

  @media (max-width: 768px) {
    padding-top: 0;
  } ;
`;

const EventName = styled.p`
  font-size: 1.5rem;
  padding-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  } ;
`;

const LinkDetails = styled(Link)`
  color: grey;
`;
