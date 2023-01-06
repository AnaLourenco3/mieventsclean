import styled from "styled-components";
import image from "../../components/images/Miriam.jpg";

const ContainerBody = styled.div`
  max-width: 900px;
  height: auto;
  margin: 180px auto 150px auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  flex-direction: row;

  grid-gap: 60px;

  @media (max-width: 990px) {
    max-width: 720px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 768px) {
    max-width: 540px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 500px) {
    max-width: 500px;
    display: flex;
    flex-direction: column;
  }

  @media (max-width: 400px) {
    max-width: 350px;
    display: flex;
    flex-direction: column;
  }
`;

const ContainerImage = styled.div`
  width: auto;
  height: 500px;
  margin: 165px 0 0 0;
  text-align: center;
`;

const TitleEvent = styled.p`
  font-family: Amsterdam;
  font-size: 4rem;
  text-shadow: 2px 1px 4px black;
  position: absolute;
  top: 50%;
  left: 52%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: auto;
  color: white;
  z-index: 4;
  transition: 0.6s ease-in-out;
  word-spacing: 30px;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const ContainerText = styled.div``;
const ContainerAboutImage = styled.div``;

const Text = styled.div`
  font-family: Poppins;
`;
const Column = styled.div``;

const Signature = styled.p`
  font-family: Amsterdam;
  font-size: 1.5rem;
  text-align: right;
`;

function About() {
  return (
    <div>
      <ContainerImage>
        <img
          className="imagePanorama"
          src="https://images.unsplash.com/photo-1464699973457-9a0cf44343d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          alt="img wedding"
        />
        <TitleEvent>About me</TitleEvent>
      </ContainerImage>
      <ContainerBody>
        <ContainerAboutImage>
          <img
            src={image}
            alt="About"
            style={{
              width: "100%",
              height: "auto",
              marginTop: "10px",
              borderRadius: "2px",
            }}
          />
        </ContainerAboutImage>

        <ContainerText>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
            odio mauris, facilisis sed lorem id, elementum malesuada justo.
            Morbi eget dui vitae leo fermentum posuere quis eu nisl. Phasellus
            faucibus est vel nibh dapibus eleifend. Aenean molestie arcu et odio
            tincidunt facilisis. Vestibulum mauris erat, euismod eget maximus
            non, finibus quis risus. Morbi sed eros eu enim dignissim facilisis.
            Sed tincidunt venenatis augue, a faucibus felis tempor id. Quisque
            id lorem elementum, sodales lectus eget, mollis dolor. Fusce
            pharetra, urna eget euismod sodales, sem nunc blandit libero,
            volutpat efficitur massa neque ac ipsum. Duis viverra metus vitae
            massa posuere tincidunt. Nunc id hendrerit odio, nec pulvinar dolor.
            Nulla id tristique magna. Proin iaculis tortor vel est convallis,
            quis scelerisque ex blandit. Maecenas et neque laoreet, aliquet erat
            ac, interdum ipsum. Curabitur posuere volutpat ipsum, vel aliquet
            lorem posuere bibendum. Maecenas arcu sem, ullamcorper non maximus
            in, blandit vel nunc. Mauris eu magna varius, maximus orci at,
            feugiat tortor. Fusce consequat lectus vel nunc ultrices, vel
            gravida lectus elementum.
            <Signature>With love, Miriam Recacho</Signature>
          </Text>
        </ContainerText>
      </ContainerBody>
    </div>
  );
}

export default About;
