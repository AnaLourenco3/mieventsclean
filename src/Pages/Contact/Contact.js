import { useEffect, useState } from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsPinterest } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import map from "../../components/images/map.png";

function Contact() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send("service_3yal0sc", "template_fb0t94o", values, "PzYI6GKwju1rbDTzI")
      .then(
        (response) => {
          console.log("SUCCESS!", response);
          setValues({
            name: "",
            email: "",
            phone: "",
            message: "",
          });
          setStatus("SUCCESS");
        },
        (error) => {
          console.log("FAILED...", error);
        }
      );
  };

  useEffect(() => {
    if (status === "SUCCESS") {
      setTimeout(() => {
        setStatus("");
      }, 5000);
    }
  }, [status]);

  const handleChange = (e) => {
    setValues((values) => ({
      ...values,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <ContainerImageHero>
        <ImageHero
          src="https://images.unsplash.com/photo-1496661415325-ef852f9e8e7c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1854&q=80"
          alt="img wedding"
        />
        <TitleEvent>Contacto</TitleEvent>
      </ContainerImageHero>
      <Contacts>
        <Container>
          <Row>
            <ContactWidget>
              <ContactWidgetItem>
                <Icon>
                  <GoLocation
                    style={{
                      color: "white",
                      fontSize: "30px",

                      marginTop: "15px",
                      marginLeft: "15px",
                    }}
                  />
                </Icon>
                <Text>
                  <P>Morada:</P>
                  <p>Lisboa e Vale do Tejo</p>
                </Text>
              </ContactWidgetItem>
              <ContactWidgetItem>
                <Icon>
                  <BsTelephone
                    style={{
                      color: "white",
                      fontSize: "30px",

                      marginTop: "15px",
                      marginLeft: "13px",
                    }}
                  />
                </Icon>
                <Text>
                  <P>Telefone:</P>
                  <p>+351 964345526 </p>
                </Text>
              </ContactWidgetItem>
              <ContactWidgetItem>
                <Icon>
                  <FiMail
                    style={{
                      color: "white",
                      fontSize: "30px",

                      marginTop: "15px",
                      marginLeft: "15px",
                    }}
                  />
                </Icon>
                <Text>
                  <P>Email:</P>
                  <p>madebymieventos@gmail.com</p>
                </Text>
              </ContactWidgetItem>
              <SocialMedia>
                <SocialMedia>
                  <SocialMediaLink href="https://www.instagram.com/madebymievents/">
                    <BsInstagram style={{ fontSize: "2rem" }} />
                  </SocialMediaLink>
                  <SocialMediaLink href="https://www.pinterest.com/">
                    <BsPinterest style={{ fontSize: "2rem" }} />
                  </SocialMediaLink>
                </SocialMedia>
              </SocialMedia>
            </ContactWidget>

            <ContactForm>
              <Form onSubmit={handleSubmit}>
                <WrapText>
                  <Text style={{ marginBottom: "15px" }}>
                    Estimado cliente, sinta-se à vontade para me contactar para
                    qualquer dúvida. Se desejar um orçamento, por favor
                    especifique o tipo de serviço, a data e o número de
                    convidados. Entrarei em contato consigo o mais breve
                    possível.
                  </Text>
                </WrapText>
                <Input
                  type="text"
                  id=""
                  placeholder="Nome  "
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
                <Input
                  type="email"
                  id=""
                  placeholder="Email "
                  value={values.email}
                  onChange={handleChange}
                  name="email"
                  required
                />
                <Input
                  type="text"
                  id=""
                  placeholder="Telefone (opcional) "
                  value={values.phone}
                  onChange={handleChange}
                  name="phone"
                />
                <Textarea
                  placeholder="Mensagem"
                  value={values.message}
                  onChange={handleChange}
                  name="message"
                  required
                />
                <Button type="submit">Enviar</Button>
                {status && renderAlert()}
              </Form>
            </ContactForm>
          </Row>
        </Container>
      </Contacts>

      {/* <MapColumn>
        <Map src={map} alt="map" />
        <Iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d199168.24109346297!2d-9.30079440323782!3d38.74067577922809!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd19331a61e4f33b%3A0x400ebbde49036d0!2sLisboa%2C%20Portugal!5e0!3m2!1spt-PT!2snl!4v1673001310092!5m2!1spt-PT!2snl"
          title="Google Maps"
          height="550"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></Iframe>
      </MapColumn> */}
    </div>
  );
}

const renderAlert = () => (
  <RenderAlert>
    <p>Mensagem enviada com sucesso!</p>
  </RenderAlert>
);

export default Contact;

const RenderAlert = styled.div`
  padding: 3px 0px 3px 0;
  line-height: 1.5;
  color: black;
  text-align: center;
  background: rgba(153, 211, 209, 0.5);

  border-radius: 50px;
  width: 100%;
  margin: 5px 0 0px 5px;
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
    font-size: 2.5rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 70px auto 100px auto;
  font-family: "Poppins";

  @media (max-width: 1260px) {
    max-width: 960px;
  }

  @media (max-width: 990px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
  }

  @media (max-width: 580px) {
    max-width: 400px;
  }

  @media (max-width: 440px) {
    max-width: 300px;
  }
`;

const Contacts = styled.section`
  padding-top: 2rem;
  padding-bottom: 2rem;
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 20px;
    display: flex;
    flex-direction: column;
  }
`;

const ContactWidget = styled.div`
  margin-bottom: 40px;
`;

const ContactWidgetItem = styled.div`
  /* margin-bottom: 30px; */
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  height: 60px;
  width: 60px;
  background: #99d3d1;
  border-radius: 50%;
  vertical-align: center;
  margin-right: 30px;
  float: left;
  display: flex;
  /* margin-top: 25px; */
`;

const Text = styled.div`
  /* overflow: hidden; */
  /* padding-left: 10px; */
`;

const WrapText = styled.div`
  margin-bottom: 60px;
`;

const P = styled.p`
  font-weight: bold;
`;

const Button = styled.button`
  width: 100%;
  cursor: grab;
  border: none;
  display: inline-block;
  background: rgba(255, 215, 35, 0.3);
  color: #111;
  font-size: 14px;

  font-weight: 500;
  letter-spacing: 2px;
  border-radius: 50px;
  padding: 12px 0px 10px 0;
  margin: 5px;
`;

const Form = styled.form`
  display: block;
`;

const ContactForm = styled.div`
  text-align: center;
  /* margin-bottom: 40px; */
`;

const Input = styled.input`
  height: 46px;
  width: 100%;
  /* padding-left: 10px; */
  font-size: 15px;
  color: #111;
  border: none; // Remove the border
  background: transparent; // Set the background to transparent
  border-bottom: 1px solid #e1e1e1; // Add a bottom border
  margin-bottom: 20px;
  border-radius: 0; // Remove the border-radius
  transition: all, 0.3s;
  outline: none; // Remove the outline

  &::placeholder {
    font-family: "Poppins";
    font-size: 14px;
  }

  // Add a focus effect to change the border-bottom color
  &:focus {
    border-bottom: 1px solid #99d3d1;
  }
`;

const Textarea = styled.textarea`
  height: 110px;
  width: 100%;
  padding: 12px 0 0 10px;
  font-size: 15px;
  color: #111;
  border: none;
  border-bottom: 1px solid #e1e1e1;
  background: transparent;
  outline: none;
  resize: vertical;
  margin-bottom: 9px;
  transition: all 0.3s;

  &::placeholder {
    font-family: "Poppins";
    font-size: 14px;
  }

  &:focus {
    border-bottom: 1px solid #99d3d1;
  }
`;

const MapColumn = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;

// const Iframe = styled.iframe`
//   width: 100%;
// `;

const SocialMedia = styled.div`
  display: flex;
  margin: 20px 0 0 0;
  justify-content: left;

  @media (max-width: 1200px) {
    justify-content: center;
  }
`;

const SocialMediaLink = styled.a`
  color: black;
  text-decoration: none;
  padding: 0 10px;
`;

const Map = styled.img`
  height: 550px;
  width: 100%;

  @media (max-width: 1500px) {
    height: 550px;
    width: auto;
  }
`;
