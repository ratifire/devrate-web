import { Accordion, AccordionDetails, AccordionSummary, Box, Typography } from '@mui/material';
import PropTypes from 'prop-types';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import SkillsParticipantItem from '../SkillsParticipantItem';
import { styles } from './SkillsParticipant.styles';

const SkillsParticipant = ({ data, matching, other }) => {
  const { skills, otherSkills } = data;

  return (
    <Box sx={styles.wrapper}>
      <Typography component='h6' sx={styles.title} variant='h6'>
        {matching}
      </Typography>
      {skills.map((v) => (
        <SkillsParticipantItem key={v.id} leftGrade={v.leftGrade} name={v.name} rightGrade={v.rightGrade} />
      ))}
      {!!otherSkills.length && (
        <Accordion sx={styles.accordion}>
          <AccordionSummary
            aria-controls='panel-all-content'
            expandIcon={<ExpandMoreIcon />}
            id='panel-all-header'
            sx={styles.accordionSummary}
          >
            <Typography component='h6' sx={styles.title} variant='h6'>
              {other}
            </Typography>
          </AccordionSummary>
          <AccordionDetails>
            {otherSkills.map((v) => (
              <SkillsParticipantItem key={v.id} leftGrade={v.leftGrade} name={v.name} rightGrade={v.rightGrade} />
            ))}
          </AccordionDetails>
        </Accordion>
      )}
    </Box>
  );
};

SkillsParticipant.propTypes = {
  data: PropTypes.shape({
    skills: PropTypes.array.isRequired,
    otherSkills: PropTypes.array.isRequired,
  }),
  matching: PropTypes.string.isRequired,
  other: PropTypes.string.isRequired,
};

export default SkillsParticipant;
