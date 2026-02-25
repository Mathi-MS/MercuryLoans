import WebMap from "../contact/WebMap";
import WebTestiMobile from "../home/WebTestiMobile";
import WebTesti from "../home/WebTestimonal";
import WebTestiTab from "../home/WebTestiTab";
import WebCommonBanner from "../WebCommonBanner";
import WebAboutHome from "./WebAboutHome";

const WebAbout = () => {
  return (
    <>
      <WebCommonBanner />
      <WebAboutHome />
      <WebTesti />
      <WebTestiMobile />
      <WebTestiTab />
      {/* <WebValues /> */}
      <WebMap />
    </>
  );
};

export default WebAbout;
