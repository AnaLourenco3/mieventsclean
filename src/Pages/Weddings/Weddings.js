import styled from "styled-components";

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
    </div>
  );
}

export default Weddings;

const ContainerImage = styled.div`
  width: auto;
  height: 600px;
  margin: 165px 0 0 0;
  text-align: center;
`;

const TitleEvent = styled.h1`
  font-family: "Dancing Script";
  font-size: 6rem;
  text-shadow: 2px 1px 4px black;
  position: absolute;
  top: 20%;
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
