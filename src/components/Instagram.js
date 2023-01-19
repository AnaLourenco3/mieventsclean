import { InstagramEmbed } from "react-social-media-embed";

function Instagram() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        marginTop: "50px",
        gap: "20px",
      }}
    >
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
    </div>
  );
}

export default Instagram;
