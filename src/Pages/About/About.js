import styled from "styled-components";
import image from "../../components/images/Miriam.jpg";

const Container = styled.div`
  width: auto;
  height: 800px;
  margin: 180px 0 0 0;
`;

const ContainerTitle = styled.div`
  max-width: 800px;
  margin: 240px auto 30px auto;
  text-align: left;
  font-family: Amsterdam;
  font-size: 30px;
  /* background-color: pink; */
`;

const ContainerImage = styled.div`
  width: 100%;
  position: sticky;
  top: 50%;
  left: 60%;
`;
const ContainerText = styled.div``;

function About() {
  return (
    <Container>
      <ContainerTitle>About Mi</ContainerTitle>
      <ContainerImage>
        <img src={image} alt="About" style={{ width: "350px" }} />
      </ContainerImage>
      <ContainerText></ContainerText>
    </Container>
  );
}

export default About;
