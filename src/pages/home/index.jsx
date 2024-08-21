import { Box, Button, Grid, Typography } from '@mui/material';

import Profile from '../../assets/Profile-Image.png';
import { GitHub, LinkedIn } from '@mui/icons-material';
import ProjectCard from '../../components/project-card';

const Home = () => {
  return (
    <>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        height="100vh"
        bgcolor="primary.950"
      >
        <Grid item container xs={6}>
          <Box
            sx={{
              width: '100%',
              bgcolor: 'primary.200',
              borderRadius: 4,
              padding: 2,
            }}
          >
            <Typography variant="h5">Leidy Álvarez</Typography>
            <Typography variant="h6">Desarrolladora Frontend</Typography>
            <br />
            <Typography variant="body1">
              Desarrolladora front-end con 4 años de experiencia desarrollando
              interfaces de usuario atractivas y funcionales. Cuento con sólidos
              conocimientos en HTML, CSS, JavaScript y TypeScript, además, estoy
              familiarizada con frameworks como React y Next.js; usando
              herramientas como Vitejs.
            </Typography>
            <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
              <a
                href="https://drive.google.com/file/d/1L0tWBQbo3YVE_qZQA0U3CSAOagCGzdA2/view?usp=sharing"
                target="_blank"
              >
                <Button variant="contained" color="primary">
                  CV
                </Button>
              </a>
              <a href="https://github.com/LeidyAl" target="_blank">
                <Button variant="contained" color="primary">
                  <GitHub />
                </Button>
              </a>
              <a
                href="https://www.linkedin.com/in/leidy-marcela-álvarez-mejía/"
                target="_blank"
              >
                <Button variant="contained" color="primary">
                  <LinkedIn />
                </Button>
              </a>
            </Box>
          </Box>
        </Grid>
        <Grid item container xs={4} justifyContent="center">
          <Box
            sx={{
              width: 250,
              bgcolor: 'primary.400',
              height: 250,
              borderRadius: 100,
              overflow: 'hidden',
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <img src={Profile} alt="Imagen Leidy Álvarez" />
          </Box>
        </Grid>
      </Grid>

      {/* PROJECTS */}
      <Grid
        container
        bgcolor="primary.200"
        p={2}
        minHeight="100vh"
        flexDirection="column"
      >
        <Grid item xs={12} my={3}>
          <Typography variant="h5" align="center">
            Un poco de mis proyectos
          </Typography>
        </Grid>
        <Grid item container flex spacing={2}>
          <Grid item xs={3}>
            <ProjectCard
              name="Proyecto 1"
              description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta alias architecto officiis, at sit ipsum rerum commodi itaque pariatur reiciendis ex laudantium exercitationem tempora a dolorum dolor"
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
