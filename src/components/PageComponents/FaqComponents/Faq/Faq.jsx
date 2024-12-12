import React from 'react';
import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTranslation } from 'react-i18next';
import { styles } from './Faq.styles';
import { questions } from './questions';

const Faq = () => {
  const { t } = useTranslation();

  const renderQuestions = () => {
    return questions?.map((question, index) => (
      <Accordion key={question.question} sx={styles.accordion}>
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
      {/*<Typography sx={styles.title} variant='h4'>*/}
      {/*  {t('faqText.title')}*/}
      {/*</Typography>*/}
      <Box sx={styles.list}>{renderQuestions()}</Box>
    </Box>
  );
};

export default Faq;
