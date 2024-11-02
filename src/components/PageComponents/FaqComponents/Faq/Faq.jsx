import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styles } from './Faq.styles';
import { questions } from './questions';
import { useTranslation } from 'react-i18next';

const Faq = () => {
  const { t } = useTranslation();
  
  return (
    <Box sx={styles.wrapper}>
      <Typography variant="h4" sx={styles.title}>
        {t('faqText.title')}
      </Typography>
      <Box sx={styles.list}>
        {questions?.map((question, index) => (
          <Accordion key={question.question} sx={styles.accordion}>
            <AccordionSummary
              sx={styles.accordionSummary}
              expandIcon={<ExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
            >
              <Typography variant="h5">
                {`${index + 1}. ${t(question.question)}`}
              </Typography>
            </AccordionSummary>
            <AccordionDetails sx={styles.accordionDetails}>
              <Typography variant="body">
                {t(question.answer)}
              </Typography>
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Box>
  );
};

export default Faq;