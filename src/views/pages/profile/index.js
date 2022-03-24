import MainCard from 'ui-component/cards/MainCard';
import { Avatar, Grid, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types'
import config from 'config'

const ProfilePage = () => {

  const user = useSelector((state) => state.currentUser)

  return (
    <MainCard title={user.name} secondary={<AvatarProfile user={user} />}>
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

const AvatarProfile = ({ user }) => {

  const { name, profile } = user

  return (
    <>
      {profile? (
        <Avatar alt={name} src={`${config.baseApi}/${profile}`} />
        ) : (
          <Avatar>P</Avatar>
        )
      }
    </>
  )
}

AvatarProfile.propTypes = {
  user: PropTypes.shape({
    name: PropTypes.string,
    profile: PropTypes.string
  })
}