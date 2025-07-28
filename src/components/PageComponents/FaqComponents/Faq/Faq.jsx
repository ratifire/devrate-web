import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { styles } from './Faq.styles';
import { questions } from './questions';

const Faq = () => {
  const { t } = useTranslation();
  const location = useLocation();

  const [expandedIndex, setExpandedIndex] = useState(-1);

  useEffect(() => {
    const hash = location.hash.replace('#', '');
    const index = Number(hash) - 1;
    if (!isNaN(index) && index >= 0 && index < questions.length) {
      setExpandedIndex(index);
      const element = document.getElementById(`panel${index}-header`);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100);
      }
    }
  }, [location.hash]);

  const handleChange = (index) => (event, isExpanded) => {
    setExpandedIndex(isExpanded ? index : -1);
  };

  const renderQuestions = () => {
    return questions?.map((question, index) => (
      <Accordion
        key={question.question}
        expanded={expandedIndex === index}
        sx={styles.accordion}
        onChange={handleChange(index)}
      >
        <AccordionSummary
          aria-controls={`panel${index}-content`}
          expandIcon={<ExpandMoreIcon />}
          id={`panel${index}-header`}
          sx={styles.accordionSummary}
        >
          <Typography variant='h5'>{`${index + 1}. ${t(question.question)}`}</Typography>
        </AccordionSummary>
        <AccordionDetails sx={styles.accordionDetails}>
          <Typography variant='body'>{t(question.answer)}</Typography>
        </AccordionDetails>
      </Accordion>
    ));
  };

  return (
    <Box sx={styles.wrapper}>
      <Typography sx={styles.title} variant='h4'>
        {t('faqText.title')}
      </Typography>
      <Box sx={styles.list}>{renderQuestions()}</Box>
    </Box>
  );
};

export default Faq;
