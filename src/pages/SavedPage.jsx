import { useSelector, useDispatch } from 'react-redux'
import { removeItem } from '../store/savedSlice'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'

function SavedPage() {
  const savedItems = useSelector(state => state.saved.items)
  const dispatch = useDispatch()

  return (
    <Container sx={{ mt: 3 }}>
      <Typography variant="h5" gutterBottom>
        Saved Items
      </Typography>

      {savedItems.length === 0 ? (
        <Typography>No saved items</Typography>
      ) : (
        <Grid container spacing={2}>
          {savedItems.map(item => (
            <Grid item xs={12} sm={6} md={4} key={item.id}>
              <Card>
                <CardContent>
                  <Typography variant="h6">
                    {item.product_name}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    {item.brands}
                  </Typography>

                  <Button
                    variant="outlined"
                    color="error"
                    sx={{ mt: 1 }}
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    Remove
                  </Button>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      )}
    </Container>
  )
}

export default SavedPage