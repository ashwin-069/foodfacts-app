import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import CircularProgress from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import SearchBar from '../components/SearchBar'
import FoodCard from '../components/FoodCard'
import useFoodSearch from '../hooks/useFoodSearch'

function HomePage() {
  const { results, loading, searchFood } = useFoodSearch()

  return (
    <Container sx={{ mt: 3 }}>
      <SearchBar onSearch={searchFood} />

      {loading && (
        <Box sx={{ display: 'flex', justifyContent: 'center', mt: 2 }}>
          <CircularProgress />
        </Box>
      )}

      {!loading && results.length === 0 && (
        <Typography sx={{ mt: 2 }}>
          No results found. Try searching something!
        </Typography>
      )}

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {results.map(item => (
          <Grid item xs={12} sm={6} md={4} key={item.id}>
            <FoodCard product={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default HomePage