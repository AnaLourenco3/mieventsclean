import styled from "styled-components";
import image from "../../components/images/Miriam.jpg";
import ImgHeading from "./Images/ImgHeading1.png";
import ImgHeading3 from "./Images/ImgHeading3.png";

function About() {
  return (
    <div>
      <ContainerImageHero>
        <ImageHero
          src="https://images.unsplash.com/photo-1464699973457-9a0cf44343d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          alt="img wedding"
        />
        <TitleEvent>Sobre Mi</TitleEvent>
      </ContainerImageHero>
      <ContainerBody>
        <ContainerHeading>
          <Heading>
            <h2>Miriam Recacho</h2>
            <p>Head of Training & Event Planner</p>
          </Heading>
          <HeadingImage src={ImgHeading} />
        </ContainerHeading>
        <Paragraph>
          Desde pequena que sempre quis trabalhar diretamente com pessoas,
          contribuindo para a sua felicidade e bem-estar. Licenciou-se em
          Psicologia e especializou-se em Clínica e Aconselhamento, mas durante
          toda a sua vida trabalhou sempre direta e indiretamente com eventos. O
          seu foco em ajudar quem a procura veio a direcionar-se para esta área
          tão especial como a de concretizar momentos únicos e inesquecíveis. {" "}
        </Paragraph>
        <Paragraph>
          Com o intuito de oferecer sempre um serviço de excelência, procura
          manter-se informada, atualizada e constantemente acrescentar
          competências nas mais diversas áreas, nomeadamente Wedding Planning,
          Organização e Decoração de Eventos, Design Floral, Design Gráfico e
          Estacionário. Conta com mais de 12 anos de experiência a gerir equipas
          e reúne como principais características ser comunicativa, criativa,
          organizada, rigorosa e muito perfeccionista.
        </Paragraph>

        <ContainerHeading3>
          <Heading>
            <TextHeading2and3>
              “A «made by mi» surge na vontade de partilhar e expandir uma
              grande paixão - contribuir para tornar momentos importantes dos
              que me procuram, em eventos únicos e memoráveis!”
            </TextHeading2and3>
          </Heading>
        </ContainerHeading3>
        <WrapImage>
          <Heading3Image src={ImgHeading3} />
        </WrapImage>

        <Paragraph>
          O meu compromisso é a minha entrega a cada projeto, dar sempre o meu
          melhor e procurar superar expectativas. Cada evento é único e
          especial! É feito à medida, inteiramente personalizado e deve ser
          vivido em pleno pelos seus protagonistas. Quer seja o dia mais feliz
          das suas vidas, ou o festejo de um acontecimento que tenha
          significado!
        </Paragraph>
        <EndParagraph>
          A vida merece ser (celebrada e) recheada de motivos para celebrar!{" "}
          {"\n"}
          Vamos celebrá-la?
        </EndParagraph>
      </ContainerBody>
    </div>
  );
}

export default About;

const ContainerBody = styled.div`
  margin: 180px auto 150px auto;
`;

const ContainerImageHero = styled.div`
  width: auto;
  height: 550px;
  margin: 135px 0 0 0;
  text-align: center;

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

const TitleEvent = styled.p`
  font-family: Amsterdam;
  font-size: 4rem;
  text-shadow: 2px 1px 4px black;
  position: absolute;
  top: 45%;
  left: 52%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: auto;
  color: white;
  z-index: 4;
  transition: 0.6s ease-in-out;
  word-spacing: 30px;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContainerHeading = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
  background-color: #f5f5f5;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  min-height: 250px;
  margin-bottom: 150px;

  @media (max-width: 680px) {
    grid-template-columns: 60% 40%;
    gap: 0;
    min-height: 150px;
  }

  @media (max-width: 450px) {
    grid-template-columns: 55% 45%;
  }
`;

const Heading = styled.div`
  h2 {
    font-family: Amsterdam;
    font-size: 2rem;
    font-weight: 300;
  }
  p {
    font-size: 1.5rem;
  }

  @media (max-width: 1200px) {
    h2 {
      font-size: 1.75rem;
    }
    p {
      font-size: 1.25rem;
    }
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 1.5rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 680px) {
    h2 {
      font-size: 1.3rem;
    }
    p {
      font-size: 1rem;
    }
  }

  @media (max-width: 450px) {
    h2 {
      font-size: 1.1rem;
    }
    p {
      font-size: 0.9rem;
    }
  }
  @media (max-width: 380px) {
    h2 {
      font-size: 1rem;
    }
    p {
      font-size: 0.8rem;
    }
  }
`;

const HeadingImage = styled.img`
  width: 500px;
  position: absolute;
  top: -40%;
  right: 10%;

  @media (max-width: 1200px) {
    width: 450px;
    top: -35%;
    right: 7%;
  }

  @media (max-width: 968px) {
    width: 400px;
    top: -25%;
    right: 5%;
  }

  @media (max-width: 790px) {
    right: 1%;
  }

  @media (max-width: 680px) {
    width: 350px;
    top: -55%;
    right: 0%;
  }

  @media (max-width: 600px) {
    width: 300px;
    top: -50%;
    right: -2%;
  }

  @media (max-width: 530px) {
    width: 250px;
    top: -25%;
    right: -4%;
  }

  @media (max-width: 450px) {
    right: -5%;
  }

  @media (max-width: 380px) {
    width: 200px;
    top: -13%;
    right: -6%;
  }
`;

const Paragraph = styled.p`
  font-size: 1.1rem;
  text-align: center;
  padding: 0 10%;

  @media (max-width: 760px) {
    font-size: 0.9rem;
    padding: 0 5%;
  }
`;

const ContainerHeading3 = styled.div`
  background-color: RGB(186, 210, 184);
  min-height: 250px;
  margin-bottom: 150px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-self: center;
`;

const TextHeading2and3 = styled.div`
  font-family: Amsterdam;
  font-size: 1.7rem;

  padding: 5% 5%;
`;

const WrapImage = styled.div`
  width: 400px;
  position: relative;
`;

const Heading3Image = styled.img`
  width: 100%;
  position: absolute;
  top: 10%;
`;

const EndParagraph = styled.p`
  font-family: Amsterdam;
  font-size: 1.7rem;
  text-align: center;
  white-space: pre-wrap;
  padding: 0 10%;

  @media (max-width: 760px) {
    font-size: 1.2rem;
    padding: 0 5%;
  }
`;
