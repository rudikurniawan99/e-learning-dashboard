import MainCard from 'ui-component/cards/MainCard';
import { Avatar, Grid, Typography } from '@mui/material';

const ProfilePage = () => (
  <MainCard title="User fullname" secondary={<Avatar>P</Avatar>}>
    <Grid container spacing={2}>
      <Grid item xs={12} lg={6}>
        <Typography variant="body2">Email</Typography>
      </Grid>
      <Grid item xs={12} lg={6}>
        <Typography color="black" variant="body2">
          dummy@gmail.com
        </Typography>
      </Grid>
    </Grid>
  </MainCard>
);

export default ProfilePage;
