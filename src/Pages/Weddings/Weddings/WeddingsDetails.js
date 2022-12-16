import styled from "styled-components";
import PhotoGalleryDetails from "../../../components/GalleryImages/PhotoGalleryDetails";
import { dataWeddings } from "./dataweddings";

function WeddingsDetails() {
  return (
    <ContainerBody>
      <ContainerBlogDetails>
        <p>{dataWeddings[0].date}</p>
        <h2>{dataWeddings[0].title}</h2>
        <p>{dataWeddings[0].text}</p>
      </ContainerBlogDetails>
      <PhotoGalleryDetails />
    </ContainerBody>
  );
}

export default WeddingsDetails;

const ContainerBody = styled.div`
  width: 60%;
  min-height: 800px;
  max-height: none;
  margin: 300px auto 110px auto;
  line-height: 30px;
  text-align: center;
  font-family: "courier";

  @media (max-width: 768px) {
    width: 90%;
    min-height: 500px;
    max-height: none;
    margin: 200px auto 110px auto;
    line-height: 20px;
    text-align: center;
    font-family: "courier";
  } ;
`;
const ContainerBlogDetails = styled.p`
  font-size: 1.1rem;
  margin-bottom: 70px;
  @media (max-width: 768px) {
    font-size: 0.8rem;
    margin-bottom: 40px;
  } ;
`;
