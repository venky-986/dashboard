import { Box, useTheme, Accordion, AccordionSummary, AccordionDetails, Typography } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Header from "../../components/Header";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const faqs = [
    { question: "Uma questão importante", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { question: "Uma outra questão importante", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { question: "Sua questão importante", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { question: "Alguma pergunta aleatória", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." },
    { question: "Questão final", answer: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget." }
  ];

  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Dúvidas Frequentes" />
      {faqs.map((faq, index) => (
        <Accordion key={index} defaultExpanded sx={{
          backgroundColor: colors.primary[400],
          borderRadius: "8px",
          mb: "10px",
          "&:before": { display: "none" }, // Remove default Accordion divider
          boxShadow: "0 3px 10px rgba(0, 0, 0, 0.1)", // Soft shadow for better aesthetics
          transition: "all 0.3s ease", // Smooth transition on hover
          "&:hover": {
            transform: "translateY(-2px)", // Subtle hover effect
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.2)", // Enhanced shadow on hover
          }
        }}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon sx={{ color: colors.greenAccent[500] }} />}
            aria-controls={`faq-content-${index}`}
            id={`faq-header-${index}`}
          >
            <Typography color={colors.greenAccent[500]} variant="h5">
              {faq.question}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{faq.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default FAQ;
