import styled from "styled-components";
import SwiperPanorama from "../../components/SwiperPanorama/SwiperPanorama";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import SwiperFeedback from "../../components/SwiperFeedback/SwiperFeedback";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFeedbacks } from "../../store/feedback/thunks";
import { selectFeedbacks } from "../../store/feedback/selectors";
import Instagram from "../../components/Instagram";
import ContactUsHomepage from "../../components/ContactUsHomepage";

function HomePage() {
  const dispatch = useDispatch();

  const feedbacks = useSelector(selectFeedbacks);
  // console.log("from page", feedbacks);

  useEffect(() => {
    dispatch(fetchFeedbacks());
  }, [dispatch]);

  return (
    <div>
      <ContainerCarouselSlider>
        <SwiperPanorama />
      </ContainerCarouselSlider>
      <ImageGrid />

      <ContactUsHomepage />

      <SwiperFeedback props={feedbacks} />

      <Instagram />
    </div>
  );
}

export default HomePage;

const ContainerCarouselSlider = styled.div`
  width: auto;
  height: auto;
  margin: 75px 0 70px 0;
`;
