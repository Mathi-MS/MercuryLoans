import { Box } from "@mui/material";

const WebMap = () => {
  return (
    <>
      <Box sx={{height:"450px"}}>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250644.76834761107!2d76.80241458935068!3d11.014261493529574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1771151810475!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        // allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      </Box>
    </>
  );
};

export default WebMap;
