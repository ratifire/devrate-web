import dedent from 'dedent';

class Templates {
  component({ name }) {
    return dedent`
      import { Box } from '@mui/material';
      import { styles } from './${name}.styles';

      const ${name} = () => {
        return (
          <Box>

          </Box>
        )
      };

      export default ${name};\n`;
  }

  styles() {
    return dedent`export const styles = {

      };\n`;
  }

  index({ name }) {
    return dedent`
      import ${name} from './${name}';

      export default ${name};\n`;
  }

  page({ name }) {
    return dedent`
    import { styles } from './${name}.styles';

    const ${name} = () => {
      return (
        <>

        </>
      )
    }

    export default ${name};\n`;
  }

  apiSlice({ name }) {
    return dedent`
    import { apiSlice } from '@redux/api/apiSlice';

    export const ${name} = apiSlice.injectEndpoints({
      endpoints: (builder) => ({

      }),
    });

    export const {  } = ${name};\n`;
  }

  slice({ name, sliceName }) {
    return dedent`
    import { createSlice } from '@reduxjs/toolkit';

    const initialState = {};

    const ${name} = createSlice({
      name: '${sliceName}',
      initialState,
      reducers: {},
    });

    export const {  } = ${name}.actions;
    export default ${name}.reducer;\n`;
  }
}

export default Templates;
