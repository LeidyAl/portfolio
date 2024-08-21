import {} from 'react';

import { Card, Typography, Button, Box } from '@mui/material';

const ProjectCard = ({ name, description }) => {
  return (
    <>
      <Card
        elevation={2}
        sx={{
          minHeight: 250,
          bgcolor: 'primary.100',
          p: 2,
          borderRadius: 2,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <Typography variant="h6" fontSize={18} color="primary.900">
          {name}
        </Typography>
        <Typography variant="body2">{description}</Typography>
        <Box display="flex" justifyContent="flex-end">
          <Button variant="contained" color="primary">
            Ver más
          </Button>
        </Box>
      </Card>
    </>
  );
};

export default ProjectCard;
