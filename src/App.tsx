import { Container } from '@mui/material'
import ArticlePreview from './components/ArticlePreview'

export default function App() {
  return (
    <Container
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh'
      }}
    >
      <ArticlePreview />
    </Container>
  )
}
