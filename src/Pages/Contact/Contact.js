import { Fragment } from "react";
import styled from "styled-components";
import { GoLocation } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { FiMail } from "react-icons/fi";

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
  word-spacing: 30px;
  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Container = styled.div`
  max-width: 1170px;
  text-align: left;
  margin: 70px auto 50px auto;
  font-family: "Poppins";

  @media (max-width: 1200px) {
    max-width: 960px;
  }

  @media (max-width: 990px) {
    max-width: 720px;
  }

  @media (max-width: 768px) {
    max-width: 540px;
  }

  @media (max-width: 500px) {
    max-width: 500px;
  }

  @media (max-width: 400px) {
    max-width: 350px;
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
    max-width: 960px;
    display: flex;
    flex-direction: column;
  }

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
  background: #abdbd9;
  border-radius: 50%;
  vertical-align: center;
  margin-right: 30px;
  float: left;
  display: flex;
  /* margin-top: 25px; */
`;

const Text = styled.div`
  /* overflow: hidden; */
  padding-left: 10px;
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
  margin-bottom: 40px;
`;

const Input = styled.input`
  height: 46px;
  width: 100%;
  padding-left: 10px;
  font-size: 15px;
  color: #111;
  border: 1px solid #e1e1e1;
  margin-bottom: 20px;
  border-radius: 4px;
  transition: all, 0.3s;
`;

const Textarea = styled.textarea`
  height: 110px;
  width: 100%;
  padding: 12px 0 0 10px;

  font-size: 15px;
  color: #111;
  border: 1px solid #e1e1e1;
  resize: vertical;
  margin-bottom: 9px;
  border-radius: 4px;
  transition: all, 0.3s;
`;

const ContactMap = styled.div``;

const MapColumn = styled.div`
  width: 100%;
  margin-bottom: 150px;
`;

const Iframe = styled.iframe`
  width: 100%;
`;

function Contact() {
  return (
    <div>
      <ContainerImage>
        <img
          className="imagePanorama"
          src="https://images.unsplash.com/photo-1447069387593-a5de0862481e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2069&q=80"
          alt="img wedding"
        />
        <TitleEvent>Contact Me</TitleEvent>
      </ContainerImage>
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
                  <P>Adress:</P>
                  <p>Charneca da Caparica</p>
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
                  <P>Telephone:</P>
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
                  <P>Mail:</P>
                  <p>madebymieventos@gmail.com</p>
                </Text>
              </ContactWidgetItem>
            </ContactWidget>

            <ContactForm>
              <Form action="#">
                <Text style={{ marginBottom: "15px" }}>
                  Dear client, feel free to contact me for any questions. If you
                  want a cost estimation, please specify the type of service and
                  number of guests. I will contact you back as soon as possible.
                </Text>
                <Input type="text" id="" placeholder="Name " />
                <Input type="email" id="" placeholder="Email " />
                <Input type="text" id="" placeholder="Telephone (optional) " />
                <Textarea placeholder="Write to me here" />
                <Button type="submit">Send</Button>
              </Form>
            </ContactForm>
          </Row>
        </Container>
      </Contacts>
      <MapColumn>
        <ContactMap>
          <Iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d99781.78019015178!2d-9.254638002639227!3d38.59871252737117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd194ac9795975ed%3A0x500ebbde4905640!2sCharneca%20de%20Caparica%2C%20Portugal!5e0!3m2!1spt-PT!2sit!4v1672049121854!5m2!1spt-PT!2sit"
            title="Google Maps"
            height="550"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></Iframe>
        </ContactMap>
      </MapColumn>
    </div>
  );
}

export default Contact;
