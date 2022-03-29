import { Button, FormControl, InputLabel, OutlinedInput, Typography } from '@mui/material'
import React from 'react'
import MainCard from 'ui-component/cards/MainCard'
import { Link } from 'react-router-dom'
import { IconArrowBackUp } from '@tabler/icons'
import { useTheme } from '@mui/material/styles'

const CreateCoursePage = () => {
  const theme = useTheme()

  const formElements = [
    {
      id: 'name',
      placeholder: 'Name'
    },
    {
      id: 'description',
      placeholder: 'Description'
    },
    {
      id: 'price',
      placeholder: 'Price'
    }
  ]

  return (
  <MainCard
    title='Create New Course' 
    secondary={
      <Button component={Link} to="/admin/courses" endIcon={<IconArrowBackUp />}>Go Back</Button>
    }
  >
    <form>
      {formElements.map((elm) => (
        <FormControl
          fullWidth 
          sx={{ ...theme.typography.customInput }}
        >
          <InputLabel htmlFor={elm.id}>{elm.placeholder}</InputLabel>
          <OutlinedInput/>
        </FormControl>
      ))}
      
    </form>
  </MainCard>
)
}

export default CreateCoursePage