import { useEffect, useState } from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";
import { BsPinterest } from "react-icons/bs";
import { BsFacebook } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
import emailjs from "@emailjs/browser";
import { TfiYoutube } from "react-icons/tfi";

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
                  <P>Redes Sociais:</P>
                  <SocialMedia>
                    <HeaderLink href="https://instagram.com/madebymievents?igshid=YmMyMTA2M2Y=">
                      <BsInstagram style={{ paddingRight: "20px" }} />
                    </HeaderLink>
                    <HeaderLink href="https://www.facebook.com/profile.php?id=100088437476729">
                      <BsFacebook style={{ paddingRight: "20px" }} />
                    </HeaderLink>
                    <HeaderLink href="https://www.pinterest.pt/madebymieventplanner">
                      <BsPinterest style={{ paddingRight: "20px" }} />
                    </HeaderLink>
                    <HeaderLink href="https://www.youtube.com">
                      <TfiYoutube style={{ paddingRight: "10px" }} />
                    </HeaderLink>
                  </SocialMedia>
                </Text>
              </ContactWidgetItem>
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

const Container = styled.div`
  max-width: 1000px;
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
  gap: 20px;
  grid-template-columns: 40% 60%;
  align-items: center;
  justify-content: center;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr;
    gap: 50px;
    display: flex;
    flex-direction: column;
    width: 100%;
  }
`;

const ContactWidget = styled.div`
  @media (max-width: 1200px) {
    margin-bottom: 40px;
  }
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

  @media (max-width: 768px) {
    margin-right: 15px;
  }
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
  margin-top: 15px;
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
  /* padding: 12px 0 0 10px; */
  font-size: 15px;
  color: #111;
  border: none;
  border-bottom: 1px solid #e1e1e1;
  background: transparent;
  border-radius: 0; // Remove the border-radius
  outline: none; // Remove the outline
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

const SocialMedia = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  color: black;
  font-size: 18px;
`;

const HeaderLink = styled.a`
  color: black;
  text-decoration: none;
`;
