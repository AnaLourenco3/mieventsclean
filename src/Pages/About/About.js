import styled from "styled-components";
import image from "../../components/images/Miriam.jpg";

function About() {
  return (
    <div>
      <ContainerImage>
        <img
          className="imagePanorama"
          src="https://images.unsplash.com/photo-1464699973457-9a0cf44343d0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1771&q=80"
          alt="img wedding"
        />
        <TitleEvent>Sobre Mi</TitleEvent>
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
            <h3>Miriam Recacho Head of Training & Event Planner</h3>
            <p>
              Desde pequena que sempre quis trabalhar diretamente com pessoas,
              contribuindo para a sua felicidade e bem-estar. Licenciou-se em
              Psicologia e especializou-se em Clínica e Aconselhamento, mas
              durante toda a sua vida trabalhou sempre direta e indiretamente
              com eventos. O seu foco em ajudar quem a procura veio a
              direcionar-se para esta área tão especial como a de concretizar
              momentos únicos e inesquecíveis. {" "}
            </p>
            <p>
              “Participar destes momentos de celebração, poder organizar e
              tratar de todos os detalhes - que fazem toda a diferença, é a
              minha maior satisfação!”{" "}
            </p>
            <p>
              Com o intuito de oferecer sempre um serviço de excelência, procura
              manter-se informada, atualizada e constantemente acrescentar
              competências nas mais diversas áreas, nomeadamente Wedding
              Planning, Organização e Decoração de Eventos, Design Floral,
              Design Gráfico e Estacionário. Conta com mais de 12 anos de
              experiência a gerir equipas e reúne como principais
              características ser comunicativa, criativa, organizada, rigorosa e
              muito perfeccionista.
            </p>
            <h4>
              {" "}
              “A «made by mi» surge na vontade de partilhar e expandir uma
              grande paixão - contribuir para tornar momentos importantes dos
              que me procuram, em eventos únicos e memoráveis!”{" "}
            </h4>

            <p>
              {" "}
              “O meu compromisso é a minha entrega a cada projeto, dar sempre o
              meu melhor e procurar superar expectativas. Cada evento é único e
              especial! É feito à medida, inteiramente personalizado e deve ser
              vivido em pleno pelos seus protagonistas. Quer seja o dia mais
              feliz das suas vidas, ou o festejo de um acontecimento que tenha
              significado! 
              <b>
                A vida merece ser (celebrada e) recheada de motivos para
                celebrar! Vamos celebrá-la?”{" "}
              </b>
            </p>
            <Signature>With love, Miriam Recacho</Signature>
          </Text>
        </ContainerText>
      </ContainerBody>
    </div>
  );
}

export default About;

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
  margin: 135px 0 0 0;
  text-align: center;
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
    font-size: 3rem;
  }
`;

const ContainerText = styled.div``;
const ContainerAboutImage = styled.div``;

const Text = styled.div`
  font-family: Poppins;
`;

const Signature = styled.p`
  font-family: Amsterdam;
  font-size: 1.5rem;
  text-align: right;
`;
