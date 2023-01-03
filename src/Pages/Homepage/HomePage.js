import styled from "styled-components";
import SwiperPanorama from "../../components/SwiperPanorama/SwiperPanorama";
import ImageGrid from "../../components/ImageGrid/ImageGrid";
import ContactUs from "../../components/ContactUs";
import SwiperFeedback from "../../components/SwiperFeedback/SwiperFeedback";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchFeedbacks } from "../../store/feedback/thunks";
import { selectFeedbacks } from "../../store/feedback/selectors";

function HomePage() {
  const dispatch = useDispatch();

  const feedbacks = useSelector(selectFeedbacks);
  console.log("from page", feedbacks);

  useEffect(() => {
    dispatch(fetchFeedbacks());
  }, [dispatch]);

  return (
    <div>
      <ContainerCarouselSlider>
        <SwiperPanorama />
      </ContainerCarouselSlider>
      <ImageGrid />

      <ContactUs />
      <ContainerFeedbackSlider>
        <SwiperFeedback props={feedbacks} />
      </ContainerFeedbackSlider>
    </div>
  );
}

export default HomePage;

const ContainerCarouselSlider = styled.div`
  width: auto;
  height: auto;
  margin: 105px 0 70px 0;
`;

const ContainerFeedbackSlider = styled.div`
  width: 90%;
  height: 600px;
  margin: auto;
`;
