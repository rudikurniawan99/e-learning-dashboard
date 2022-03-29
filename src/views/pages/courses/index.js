import { Typography, Button } from '@mui/material'
import MainCard from 'ui-component/cards/MainCard'
import { Link } from 'react-router-dom'
import { IconPlus, IconUserPlus } from '@tabler/icons'

const CoursesPage = () => (
  <MainCard
    title='Course' 
    secondary={
      <Button 
        component={Link} to="/admin/courses/create" endIcon={<IconPlus />}
      >Create Course</Button>
    }
  >
    <Typography>cboa</Typography>
  </MainCard>
)

export default CoursesPage