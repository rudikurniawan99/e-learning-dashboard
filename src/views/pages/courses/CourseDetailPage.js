import {  Button } from '@mui/material'
import MainCard from 'ui-component/cards/MainCard'
import { Link, useParams } from 'react-router-dom'
import { IconArrowBack } from '@tabler/icons'
import { useQuery } from 'react-query'
import axios from 'axiosConfig'
import { useState } from 'react'

// note: course detail on progress

const CourseDetailPage = () => {

  const [course, setCourse] = useState(null)
  const { id } = useParams()
  useQuery('course', async () => axios.get(`/courses/${id}`), {
    onSuccess: (data) => {
      setCourse(data.data.data)
    }
  })

  return (
    <MainCard
      title={course?.name} 
      secondary={
        <Button 
          component={Link} to="/admin/courses" endIcon={<IconArrowBack />}
        >Back</Button>
      }
    >
      <>
        {course?.description}
      </>
    </MainCard>
  )
}

export default CourseDetailPage