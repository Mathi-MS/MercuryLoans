import { Box, Typography } from "@mui/material";
import { images } from "../../assets/Images/Images";
import { useNavigate } from "react-router-dom";
import { MdBusinessCenter, MdHome, MdBusiness, MdPrecisionManufacturing, MdAccountBalance, MdPerson } from "react-icons/md";


const plans = [
  {
    title: "Mortgage Loan",
    desc: "Secure financing for your dream property with competitive rates and flexible repayment options tailored to your needs.",
    icon: <MdHome />,
  },
  {
    title: "Loan Against Property",
    desc: "Unlock the value of your property to meet financial requirements with attractive interest rates and convenient terms.",
    icon: <MdAccountBalance />,
  },
  {
    title: "Home Loan",
    desc: "Make your dream home a reality with our affordable home loan solutions and hassle-free approval process.",
    icon: <MdHome />,
  },
  {
    title: "Machinery Loan",
    desc: "Finance your business equipment and machinery needs to enhance productivity and drive growth.",
    icon: <MdPrecisionManufacturing />,
  },
  {
    title: "Business Loan",
    desc: "Fuel your business expansion with customized loan solutions designed to support your entrepreneurial journey.",
    icon: <MdBusiness />,
  },
  {
    title: "Personal Loan",
    desc: "Meet your personal financial needs with quick approval and flexible repayment options at competitive rates.",
    icon: <MdPerson />,
  },
];

const WebServices = () => {
  const navigate = useNavigate();
  return (
    <Box className="website-container" sx={{position:"relative", py: { xs: 6, md: 10 },          background:  "linear-gradient(90deg, var(--primary), #1a1a1a)",
 }}>
      <Box sx={{
        position :"absolute",
        top:"0px",
        left:"0px",
        width:"100%",
        height:"100%",
        backgroundImage: `url(${images.banner})`,
        backgroundRepeat: "repeat",
        backgroundSize: "600px",
        backgroundPosition: "inherit",
        opacity:0.04
    }}>
    </Box>
      <Box sx={{position:"relative",zIndex:"2"}}>
        {/* Heading */}
      <Typography
        sx={{
          fontSize: 40,
          fontWeight: 700,
          textAlign: "center",
          fontFamily:"Regular_M",
          color:"var(--white)",
          opacity:".9"
        }}
      >
        Our Services
      </Typography>

      {/* Paragraph */}
      <Typography
        sx={{
          textAlign: "center",
          maxWidth: 600,
          mx: "auto !important",
          color: "var(--white)",
          mb: "20px !important",  
          fontFamily:"Regular_M",
          lineHeight: 1.6,
          opacity:".8",
          fontSize: { xs: "1rem", md: "18px" },
        }}
      >
        We Are Providing Top Services With Excellent Performance
      </Typography>

      {/* Plans Container */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          gap: 3,
          justifyContent: "center",
        }}
      >
        {plans.map((p, i) => (
          <Box
            key={i}
            sx={{
              width: { xs: "95%", sm: "300px", md: "400px" },
              background: "#fff",
              borderRadius: "16px",
              boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
              overflow: "hidden",
              p: 2,
            }}
          >
            {/* Icon */}
            <Box sx={{ fontSize: 48, color: "var(--primary)", textAlign: "center", mt: 2,mb:1 }}>
              {p.icon}
            </Box>

            {/* Title */}
            <Typography sx={{ fontWeight: 700, fontSize: 28, mb: 1,fontFamily:"Regular_M",textAlign:"center"
 }}>
              {p.title}
            </Typography>

            {/* Description */}
            <Typography sx={{ color: "#666", mb: 2,fontFamily:"Regular_M",margin:"10px 0px !important",textAlign:"center"
 }}>{p.desc}</Typography>
          </Box>
        ))}
      </Box>
      </Box>
    </Box>
  );
};

export default WebServices;
