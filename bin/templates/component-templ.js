export const componentTemplate = ({ name }) =>
  `
    import { Box } from '@mui/material';
    import { styles } from './${name}.styles.js';
    
    const ${name} = () => {
      return (
        <Box>
          
        </Box>
      )
    };
    
    export default ${name};
  `;

export const stylesTemplate = () =>
  `
    export const styles = {
      
    }
  `;

export const indexTemplate = ({ name }) =>
  `
    import ${name} from './${name}.jsx';
    
    export default ${name};
  `;
