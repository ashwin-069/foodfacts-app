import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { addItem, removeItem } from '../store/savedSlice'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

function DetailPage() {
  const location = useLocation()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { id } = useParams()

  const savedItems = useSelector(state => state.saved.items)

  // Try getting product from location OR fallback from saved items
  const product =
    location.state?.product ||
    savedItems.find(item => item.id === id)

  if (!product) return <div>No product found</div>

  const isSaved = savedItems.some(p => p.id === product.id)

  const handleClick = () => {
    if (isSaved) {
      dispatch(removeItem(product.id))
    } else {
      dispatch(addItem(product))
    }
  }

  return (
    <Container>
      <Typography variant="h5">{product.product_name}</Typography>
      <Typography>{product.brands}</Typography>

      <Button variant="contained" onClick={handleClick}>
        {isSaved ? 'Remove' : 'Save'}
      </Button>

      <Button onClick={() => navigate(-1)}>Back</Button>
    </Container>
  )
}

export default DetailPage