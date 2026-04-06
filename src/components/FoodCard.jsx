import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import CardActionArea from '@mui/material/CardActionArea'
import { useNavigate } from 'react-router-dom'

function FoodCard({ product }) {
  const navigate = useNavigate()

  return (
    <Card sx={{ height: '100%' }}>
      <CardActionArea
        onClick={() =>
          navigate(`/product/${product.id}`, { state: { product } })
        }
      >
        <CardContent>
          <Typography variant="h6">
            {product.product_name || 'No Name'}
          </Typography>

          <Typography variant="body2" color="text.secondary">
            {product.brands || 'Unknown Brand'}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default FoodCard