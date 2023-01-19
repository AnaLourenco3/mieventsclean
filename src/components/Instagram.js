import { InstagramEmbed } from "react-social-media-embed";
import styled from "styled-components";

function Instagram() {
  return (
    <InstaContainer>
      <InstagramEmbed
        url="https://www.instagram.com/p/Cjyfo2cM4kW/"
        width={328}
        captioned={false}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/ChrzUNTsFrM/"
        width={328}
        captioned={false}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/CmC2VlCsgEW/"
        width={328}
        captioned={false}
      />
      <InstagramEmbed
        url="https://www.instagram.com/p/Cb0uInJMBxD/"
        width={328}
        captioned={false}
        placeholderDisabled
      />
    </InstaContainer>
  );
}

export default Instagram;

const InstaContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 80px 0 100px 0;
  gap: 20px;
  flex-wrap: wrap;
`;
