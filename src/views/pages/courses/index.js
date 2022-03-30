import {  Button, TableContainer, Table, TableHead, TableRow, TableCell, TableBody, Box } from '@mui/material'
import MainCard from 'ui-component/cards/MainCard'
import { Link } from 'react-router-dom'
import { IconPlus, IconPencil, IconDetails } from '@tabler/icons'
import { useQuery } from 'react-query'
import axios from 'axiosConfig'

const CoursesPage = () => {


  const { data: courses } = useQuery('courses', async () => axios.get('/courses'))

  const rupiahFormatter = (value) => {
    const amount = new Intl.NumberFormat('en-ID', {
      style: 'currency',
      currency: 'IDR'
    }).format(value)
      .replace(/[IDR]/gi, '')
      .replace(/(\.+\d{2})/, '')
    return amount
  }


  return (
    <MainCard
      title='Course' 
      secondary={
        <Button 
          component={Link} to="/admin/courses/create" endIcon={<IconPlus />}
        >Create Course</Button>
      }
    >
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Price</TableCell>
              <TableCell>Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {courses?.data?.data[0]?.map((course, index) => (
              <TableRow
                key={index} 
                component={Link}
                to={`/admin/courses/${course.id}`}
                sx={{
                  textDecoration: 'none',
                  '&:hover': {
                    backgroundColor: '#ecf0f1',
                  }
                }}
              >
                <TableCell>{index+1}</TableCell>
                <TableCell>{course.name}</TableCell>
                <TableCell>Rp {rupiahFormatter(course.price)},-</TableCell>
                <TableCell>
                  <Box
                    display='flex' 
                  >
                    <Button
                      component={Link}
                      to={`/admin/courses/${course.id}`}
                      title='Edit'
                      variant='outlined'
                    >
                      <IconPencil/>
                    </Button>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </MainCard>
  )
}

export default CoursesPage

