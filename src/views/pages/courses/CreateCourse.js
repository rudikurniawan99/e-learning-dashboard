import { Button, FormControl, InputLabel, OutlinedInput, Select, MenuItem, Box, Dialog, DialogTitle, DialogActions, DialogContent, TextField, FormHelperText } from '@mui/material'
import { useState } from 'react'
import MainCard from 'ui-component/cards/MainCard'
import { Link, useNavigate } from 'react-router-dom'
import { IconArrowBackUp } from '@tabler/icons'
import { useTheme } from '@mui/material/styles'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useMutation, useQuery } from 'react-query'
import axios from 'axiosConfig'
import { useSelector } from 'react-redux'

const CreateCoursePage = () => {
  const theme = useTheme()
  const navigate = useNavigate()
  const { id: userId } = useSelector(state => state.currentUser)
  const validationSchema = yup.object({
    name: yup.string().required(),
    description: yup.string().required(),
    price: yup.number().positive('must be a valid amount').required(),
    category: yup.array(yup.string()).required()
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  })

  // utils 
  const transformArray = (arr) => {
    const arrInit = []
    // eslint-disable-next-line array-callback-return
    arr.map((item) => {
      arrInit.push({
        id: item
      })
    })
    return arrInit
  }

  const { mutate } = useMutation( async ({ name, description, price, category }) => axios.post('/courses', {
    name, description, price,
    categories: transformArray(category), 
    coordinatorId: userId 
  }), {
    onSuccess: () => navigate('/admin/courses')
  })

  

  const onSubmit = (data) => {
    mutate(data)
  }
  const [categories, setCategories] = useState([])
  useQuery('categories' ,async () => axios.get('/categories'), {
    onSuccess: (data) => setCategories(data.data.data[0]),
  })

  return (
    <MainCard
      title='Create New Course' 
      secondary={
        <Button component={Link} to="/admin/courses" endIcon={<IconArrowBackUp />}>Go Back</Button>
      }
    >
      <form
        onSubmit={handleSubmit(onSubmit)} 
      >
        <FormControl
          fullWidth 
          sx={{ ...theme.typography.customInput }}
          error={Boolean(errors.name)}
        >
          <InputLabel htmlFor='name'>Name</InputLabel>
          <OutlinedInput
            {...register('name')} 
          />
          {errors?.name && (
            <FormHelperText
              error
            >{errors?.name?.message}</FormHelperText>
          )} 
        </FormControl>
        <FormControl
          fullWidth 
          sx={{ ...theme.typography.customInput }}
          error={Boolean(errors.description)}
        >
          <InputLabel htmlFor='description'>Description</InputLabel>
          <OutlinedInput
            {...register('description')} 
            multiline
          />
          {errors?.description && (
            <FormHelperText
              error
            >{errors?.description?.message}</FormHelperText>
          )} 
        </FormControl>
        <FormControl
          fullWidth 
          sx={{ ...theme.typography.customInput }}
          error={Boolean(errors.price)}
        >
          <InputLabel htmlFor='price'>Price</InputLabel>
          <OutlinedInput
            {...register('price')} 
          />
          {errors?.price && (
            <FormHelperText
              error
            >{errors?.price?.message}</FormHelperText>
          )} 
        </FormControl>
        <Box
          display='flex' 
          sx={{
            justifyContent: 'center',
            alignItems: 'center'
          }}
          gap={2}
        >
          <FormControl
            fullWidth
            sx={{ ...theme.typography.customInput }}
            error={Boolean(errors?.category)}
          >
            <InputLabel htmlFor='category'>Category</InputLabel>
            <Select
              {...register('category')}
              defaultValue={[]}
              multiple
            >
              <MenuItem disabled>Choose Category</MenuItem>
              {categories?.map((category) =>(
                <MenuItem key={category.id} value={category.id}>{category.name}</MenuItem>
              ))}
            </Select>
            {errors?.category && (
              <FormHelperText
                error 
              >{errors?.category?.message}</FormHelperText>
            )}
          </FormControl>
          <CategoryInput/> 
        </Box>
        <Button
          fullWidth
          type='submit' 
          variant='contained'
          color='primary'
        >Submit</Button>
      </form>
    </MainCard>
  )
}

const CategoryInput = () => {

  const [openDialog, setOpenDialog] = useState(false)
  const openHandler = () => setOpenDialog(true)
  const closeHandler = () => setOpenDialog(false)
  const { mutate } = useMutation( async (name) => axios.post('/categories', {
    name
  }), {
    onSuccess: () => {
      closeHandler()
    }
  })

  const validationSchema = yup.object({
    name: yup.string().required()
  }).required()

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema)
  })

  const submitHanlder = ({name}) => {
    mutate(name)
  }

  return (
    <>
      <Box>
        <Button
          sx={{
            display: 'block'
          }}
          variant='contained'
          color='secondary'
          size='small'
          onClick={openHandler}
          title='Add Category'
        >+</Button>
      </Box>
      <Dialog open={openDialog} onClose={closeHandler}>
        <form onSubmit={handleSubmit(submitHanlder)}>
          <DialogTitle>Add new category</DialogTitle>
          <DialogContent>
            <TextField
              {...register('name')}
              autoFocus
              margin="dense"
              label="Category"
              type="text"
              fullWidth
              variant="standard"
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={closeHandler}>Cancel</Button>
            <Button
              type='submit'
              variant='contained'
            >Add</Button>
          </DialogActions>
        </form>
      </Dialog>
    </>
  )
}

export default CreateCoursePage