import { Link } from "react-router-dom";
import styled from "styled-components";
import { dataWeddings } from "./dataweddings";

function Weddings() {
  return (
    <div>
      <ContainerImage>
        <img
          className="imagePanorama"
          src="https://images.unsplash.com/photo-1532712938310-34cb3982ef74?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
          alt="img wedding"
        />
        <TitleEvent>Weddings</TitleEvent>
      </ContainerImage>
      <ContainerBody>
        <ContainerQuote>
          "Being deeply loved by someone gives you strength, while loving
          someone deeply gives you courage."
          <p>- Lao Tzu</p>
        </ContainerQuote>
        <ContainerText>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
            semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
            porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
            ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus viverra
            nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet.
            Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies
            nisi. Nam eget dui.{" "}
          </p>
        </ContainerText>
        {dataWeddings.map((data, index) => (
          <ContainerBlog key={index}>
            <ContainerImageBlog>
              <img
                style={{ width: "450px", height: "350px" }}
                src={data.image}
                alt="img wedding"
              />
            </ContainerImageBlog>
            <ContainerDescriptionBlog>
              <p>{data.date}</p>
              <h3 style={{ fontSize: "1.5rem" }}>{data.title}</h3>
              <LinkDetails>See more</LinkDetails>
            </ContainerDescriptionBlog>
          </ContainerBlog>
        ))}
      </ContainerBody>
    </div>
  );
}

export default Weddings;

const ContainerImage = styled.div`
  width: auto;
  height: 500px;
  margin: 165px 0 0 0;
  text-align: center;
`;

const TitleEvent = styled.h1`
  font-family: Amsterdam;
  font-size: 4rem;
  text-shadow: 2px 1px 4px black;
  position: absolute;
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: auto;
  color: white;
  z-index: 4;
  transition: 0.6s ease-in-out;
  @media (max-width: 768px) {
    font-size: 4rem;
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

const ContainerQuote = styled.div`
  text-align: center;

  margin: 50px auto 50px auto;
  font-family: "Dancing Script";
  font-size: 2rem;
  vertical-align: center;
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
    margin: 100px auto 110px auto;
    line-height: 20px;
    text-align: center;
  } ;
`;

const ContainerBlog = styled.div`
  max-width: 900px;
  height: auto;
  margin: 80px auto auto auto;
  font-family: "Poppins", sans-serif;
  display: grid;
  grid-template-columns: 2fr 1fr;
  grid-gap: 30px;
  text-align: left;

  @media (max-width: 768px) {
    max-width: 90%;
    min-height: 500px;
    max-height: none;
    margin: 80px auto 110px auto;
    line-height: 7px;
    text-align: center;
    grid-gap: 10px;
    font-size: 0.8rem;
  } ;
`;

const ContainerImageBlog = styled.div`
  margin-left: 50px;

  @media (max-width: 768px) {
    margin-left: 0;
  } ;
`;

const ContainerDescriptionBlog = styled.div`
  padding-top: 30px;
`;

const LinkDetails = styled(Link)`
  color: grey;
`;
