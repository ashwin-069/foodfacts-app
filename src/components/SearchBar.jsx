import { useState } from 'react'
import TextField from '@mui/material/TextField'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function SearchBar({ onSearch }) {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!query.trim()) return
    onSearch(query)
  }

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mb: 2 }}>
      <TextField
        fullWidth
        placeholder="Search food..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <Button type="submit" variant="contained" sx={{ mt: 1 }}>
        Search
      </Button>
    </Box>
  )
}

export default SearchBar