import MainCard from 'ui-component/cards/MainCard';
import { Avatar, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';

const ProfilePage = () => {

  const user = useSelector((state) => state.currentUser)

  return (
    <MainCard title={user.name} secondary={<Avatar>P</Avatar>}>
      <Grid container spacing={2}>
        <Grid item xs={12} lg={6}>
          <Typography variant="body2">Email</Typography>
        </Grid>
        <Grid item xs={12} lg={6}>
          <Typography color="black" variant="body2">
            {user.email}
          </Typography>
        </Grid>
      </Grid>
    </MainCard>
  );
}
export default ProfilePage;
