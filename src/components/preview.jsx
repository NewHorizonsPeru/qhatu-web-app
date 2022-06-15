import React from 'react';

import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

class Preview extends React.Component {
  render() {
    return (
      <Container component="main" maxWidth="xs">
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{ mt: 1 }}>
            <Typography variant="h3" color="text.secondary">
              {this.props.email}
            </Typography>
          </Box>
        </Box>
      </Container>
    );
  }
}
export default Preview;
