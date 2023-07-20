import styled from "styled-components";
import image from "../../components/images/Miriam.jpg";
import ImgHeading from "./Images/ImgHeading1.png";
import ImgHeading2 from "./Images/ImgHeading2.png";
import ImgHeading3 from "./Images/ImgHeading3.png";

function About() {
  return (
    <div>
      <ContainerImageHero>
        <ImageHero
          src="https://images.unsplash.com/photo-1464699973457-9a0cf44343d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          alt="img wedding"
        />
        <TitleEvent>Sobre</TitleEvent>
      </ContainerImageHero>
      <ContainerBody>
        <ContainerHeading1>
          <Heading1>
            <h2>Miriam Recacho</h2>
            <p>Head of Training & Event Planner</p>
          </Heading1>
          <WrapperImage1>
            <HeadingImage1 src={ImgHeading} />
          </WrapperImage1>
        </ContainerHeading1>
        <Paragraph>
          Desde pequena que sempre quis trabalhar diretamente com pessoas,
          contribuindo para a sua felicidade e bem-estar. Licenciou-se em
          Psicologia e especializou-se em Clínica e Aconselhamento, mas durante
          toda a sua vida trabalhou sempre direta e indiretamente com eventos. O
          seu foco em ajudar quem a procura veio a direcionar-se para esta área
          tão especial como a de concretizar momentos únicos e inesquecíveis. {" "}
        </Paragraph>
        <ContainerHeading2>
          <WrapperImage2>
            <HeadingImage2 src={ImgHeading2} />
          </WrapperImage2>
          <Heading2>
            <p>
              {" "}
              Participar destes momentos de celebração, poder organizar e tratar
              de todos os detalhes - que fazem toda a diferença, é a minha maior
              satisfação!
            </p>
          </Heading2>
        </ContainerHeading2>

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
          <p>
            “A «made by mi» surge na vontade de partilhar e expandir uma grande
            paixão - contribuir para tornar momentos importantes dos que me
            procuram, em eventos únicos e memoráveis!”
          </p>
        </ContainerHeading3>

        <Paragraph>
          O meu compromisso é a minha entrega a cada projeto, dar sempre o meu
          melhor e procurar superar expectativas. Cada evento é único e
          especial! É feito à medida, inteiramente personalizado e deve ser
          vivido em pleno pelos seus protagonistas. Quer seja o dia mais feliz
          das suas vidas, ou o festejo de um acontecimento que tenha
          significado!
        </Paragraph>
        <EndParagraph>
          <p>
            A vida merece ser (celebrada e) recheada de motivos para celebrar!{" "}
            <br />
            Vamos celebrá-la?
          </p>
        </EndParagraph>
        <WrapperImage3>
          {/* <Greet>Xx, Mi</Greet> */}
          <Image3 src={ImgHeading3} />
        </WrapperImage3>
        <Greet>Xx, Mi</Greet>
        {/* <Greet>Xx, Mi</Greet> */}
      </ContainerBody>
    </div>
  );
}

export default About;

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

const TitleEvent = styled.p`
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
  word-spacing: 30px;
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`;

const ContainerBody = styled.div`
  margin: 150px auto 150px auto;
  max-width: 1700px;
`;

const ContainerHeading1 = styled.div`
  display: grid;
  grid-template-columns: 2fr 1fr;

  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
  max-height: 250px;
  margin-bottom: 150px;

  @media (max-width: 860px) {
    grid-template-columns: 1fr;
  }
`;

const Heading1 = styled.div`
  background-color: #ffcccc;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  text-align: center;

  h2 {
    font-family: Amsterdam;
    font-size: 2rem;
    font-weight: 300;
    padding-top: 20px;
  }
  p {
    font-size: 1.2rem;
    padding-bottom: 20px;
  }

  @media (max-width: 768px) {
    h2 {
      font-size: 2rem;
    }
    p {
      font-size: 1.2rem;
      padding-bottom: 50px;
    }
  }
`;

const WrapperImage1 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display; flex;
  justify-content: center;
  align-items: center;
  background-color: #ffcccc;
   
  @media (max-width: 860px) {
    background-color: transparent;
    position: static;
  }


`;

const HeadingImage1 = styled.img`
  width: 500px;
  position: absolute;
  top: -40%;
  right: 30%;

  @media (max-width: 1060px) {
    right: 10%;
    top: -40%;
  }

  @media (max-width: 860px) {
    position: static;
    width: 70%;
    margin-top: -50px;
  }

  @media (max-width: 650px) {
    width: 100%;
  }
`;

const ContainerHeading2 = styled.div`
  width: 80%;

  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  margin: 150px auto 150px auto;

  @media (max-width: 1024px) {
    width: 100%;
    grid-template-columns: 1fr;
    gap: 0;
    margin-top: 30px;
    margin-bottom: 80px;
  }
`;

const Heading2 = styled.div`
  width: 100%;
  background-color: #ffe6d8;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 0 auto;

  p {
    width: 80%;
    margin: 0 auto;
    font-family: Amsterdam;
    font-size: 1.5rem;
    padding: 20px 0;
  }

  @media (max-width: 1200px) {
    margin-top: -80px;
  }

  @media (max-width: 768px) {
    p {
      font-size: 1.2rem;
    }
  }
`;

const WrapperImage2 = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const HeadingImage2 = styled.img`
  width: 500px;
  position: absolute;

  @media (max-width: 1024px) {
    position: static;
    justify-content: right;
  }

  @media (max-width: 525px) {
    width: 100%;
  }
`;

const Paragraph = styled.p`
  width: 90%;
  margin: 0 auto;
  font-size: 1.2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const ContainerHeading3 = styled.div`
  background-color: RGB(186, 210, 184);
  min-height: 250px;
  display: flex;
  flex-direction: column;
  text-align: center;
  justify-content: center;
  align-items: center;
  margin: 120px auto 120px auto;

  p {
    width: 80%;
    margin: 0 auto;
    font-family: Amsterdam;
    font-size: 1.5rem;
    padding: 20px 0;
  }

  @media (max-width: 768px) {
    margin: 80px auto 80px auto;
    p {
      font-size: 1.2rem;
    }
  }
`;

const EndParagraph = styled.div`
  width: 90%;
  margin: 80px auto 0 auto;
  p {
    width: 80%;
    margin: 0 auto;
    font-family: Amsterdam;
    font-size: 1.5rem;
  }

  @media (max-width: 768px) {
    margin: 50px auto 0 auto;
    text-align: center;
    p {
      font-size: 1.2rem;
    }
  }
`;

const WrapperImage3 = styled.div`
  max-width: 1200px;
  width: 70%;
  margin: 0 auto;
  position: static;
  display: flex;
  justify-content: flex-end;

  margin-top: -20px;

  @media (max-width: 840px) {
    margin-top: 0;
    justify-content: center;
  }
`;

const Image3 = styled.img`
  width: 500px;

  @media (max-width: 640px) {
    width: 100%;
    overflow: hidden;
  }
`;

const Greet = styled.div`
  font-family: Amsterdam;
  font-size: 1.2rem;
  justify-content: center;
  display: flex;
`;
