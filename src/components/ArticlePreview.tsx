import { Box, Paper, Typography, Grid, Avatar, Stack, Fab } from '@mui/material'
import ShareIcon from '@mui/icons-material/Share'

export default function ArticlePreview() {
  return (
    <Box>
      <Paper
        elevation={24}
        sx={{
          width: ['100%', 720],
          height: ['100%', 280],
          overflow: 'hidden',
          borderRadius: 3,
          my: 4
        }}
      >
        <Grid container>
          <Grid item sm={5} xs={12}>
            <Box sx={{ width: '100%', overflow: 'hidden' }}>
              <img
                alt="Mesa"
                src="images/drawers.jpg"
                width="120%"
                height="100%"
              />
            </Box>
          </Grid>
          <Grid item sm={7} xs={12} sx={{ p: 4 }}>
            <Typography
              fontWeight={600}
              variant="h6"
              color="primary"
              sx={{ lineHeight: 1.3 }}
            >
              Shift the overall look and feel by adding these wonderful touches
              to furniture in your home
            </Typography>
            <Typography
              fontWeight={400}
              variant="subtitle2"
              color="primary"
              sx={{ fontSize: 12, my: 2 }}
            >
              Ever been in a room and felt like something was missing? Perhaps
              it felt slightly bare and uninviting. I’ve got some simple tips to
              help you make any room feel complete.
            </Typography>
            <Stack direction="row" justifyContent="space-between">
              <Stack direction="row" spacing={2}>
                <Avatar src="images/avatar-michelle.jpg" />
                <Stack justifyContent="space-between">
                  <Typography
                    fontWeight={700}
                    color="primary"
                    sx={{ fontSize: 12 }}
                  >
                    Michelle Appleton
                  </Typography>
                  <Typography
                    fontWeight={400}
                    color="secondary"
                    sx={{ fontSize: 12 }}
                  >
                    16 Mar 2023
                  </Typography>
                </Stack>
              </Stack>
              <Fab size="small">
                <ShareIcon />
              </Fab>
            </Stack>
          </Grid>
        </Grid>
      </Paper>
    </Box>
  )
}
