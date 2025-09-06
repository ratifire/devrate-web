export const componentTemplate = ({ name }) =>
  `
    import { Box } from '@mui/material';
    import { styles } from './${name}.styles';
    
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
    import ${name} from './${name}';
    
    export default ${name};
  `;
