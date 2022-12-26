// import { Link } from "react-router-dom";
import styled from "styled-components";
import { dataDiy } from "./dataDiy";

function Diy() {
  return (
    <div>
      <ContainerImage>
        <img
          className="imagePanorama"
          src="https://images.unsplash.com/photo-1488806374796-a4071c52353b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="img wedding"
        />
        <TitleEvent>Diy</TitleEvent>
      </ContainerImage>
      <ContainerBody>
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
        {dataDiy &&
          dataDiy.map((data, index) => (
            <ContainerBlog key={index}>
              <ContainerDescriptionBlog>
                <h4>{data.date}</h4>
                <h4>{data.title}</h4>
                <p>{data.description}</p>
              </ContainerDescriptionBlog>

              <VideoFrame
                src={data.url}
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></VideoFrame>
            </ContainerBlog>
          ))}
      </ContainerBody>
    </div>
  );
}

export default Diy;

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
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  margin: auto;
  color: white;
  z-index: 4;
  transition: 0.6s ease-in-out;
  @media (max-width: 768px) {
    font-size: 3rem;
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

const ContainerText = styled.div`
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
  } ;
`;

const ContainerBlog = styled.div`
  max-width: 900px;
  height: auto;
  margin: 80px auto auto auto;
  font-family: "Poppins", sans-serif;
  display: flex;
  flex-direction: column;

  @media (max-width: 600px) {
    max-width: 100%;

    max-height: none;
    margin: 0 auto 50px auto;
    line-height: 7px;
    text-align: center;

    font-size: 0.8rem;
  } ;
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
  width: 560px;
  height: 315px;
  margin: 40px auto auto auto;
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

// const LinkDetails = styled(Link)`
//   color: grey;
// `;
