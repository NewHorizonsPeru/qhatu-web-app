import Avatar from '@mui/material/Avatar';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { useSelector } from 'react-redux';

import ModalQhatu from '../../modal/ModalQhatu';
import BackdropLoader from '../../loader/BackdropLoader';

const PublicLayout = ({ children }) => {
  const openBackdrop = useSelector((state) => state.backdrop);
  const modal = useSelector((state) => state.modal);
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Avatar
          sx={{ m: 1, bgcolor: 'default.main', width: 56, height: 75 }}
          src="https://cdn-icons-png.flaticon.com/128/6769/6769119.png"
        />
        <Typography component="h1" variant="h5">
          Qhatu
        </Typography>
        {children}
      </Box>
      <BackdropLoader open={openBackdrop.open} />
      {modal.open ? (
        <ModalQhatu
          open={modal.open}
          callback={modal.callback}
          title={modal.title}
          subtitle={modal.subtitle}
        />
      ) : null}
    </Container>
  );
};

export default PublicLayout;
