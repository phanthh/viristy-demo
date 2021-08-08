import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import { formatDistance } from 'date-fns';
import { Link as RouterLink } from 'react-router-dom';
import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
// material
import { Box, Stack, Link, Card, Button, Divider, Typography, CardHeader } from '@material-ui/core';
// utils
import { mockImgCover } from '../../../utils/mockImages';
//
import Scrollbar from '../../Scrollbar';
import { fDate } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const PROJECTSNAME = [
  'Seven Knights - mobile RPG adventure game ⚔️🧙🏻‍♂️',
  'Customer Relationship Management (CRM) - Dashboard',
  'CitySmart - Hero Landing Page 😁',
  'Cryptocurrency Website.😍',
  'Lips Love Brand Guidelines'
];

const PROJECTS = [...Array(5)].map((_, index) => {
  const setIndex = index + 1;
  return {
    title: PROJECTSNAME[index],
    description: faker.lorem.paragraphs(),
    image: mockImgCover(setIndex),
    postedAt: faker.date.past(6)
  };
});

// ----------------------------------------------------------------------

ProjectsItem.propTypes = {
  projects: PropTypes.object.isRequired
};

function ProjectsItem({ projects }) {
  const { image, title, description, postedAt } = projects;

  return (
    <Stack direction="row" alignItems="center" spacing={2}>
      <Box
        component="img"
        alt={title}
        src={image}
        sx={{ width: 48, height: 48, borderRadius: 1.5 }}
      />
      <Box sx={{ minWidth: 240 }}>
        <Link to="#" color="inherit" underline="hover" component={RouterLink}>
          <Typography variant="subtitle2" noWrap>
            {title}
          </Typography>
        </Link>
        <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
          {description}
        </Typography>
      </Box>
      <Typography variant="caption" sx={{ pr: 3, flexShrink: 0, color: 'text.secondary' }}>
        {fDate(postedAt)}
      </Typography>
    </Stack>
  );
}

export default function ProfileProjects() {
  return (
    <Card>
      <CardHeader title="Projects" />

      <Scrollbar>
        <Stack spacing={3} sx={{ p: 3, pr: 0 }}>
          {PROJECTS.map((projects) => (
            <ProjectsItem key={projects.title} projects={projects} />
          ))}
        </Stack>
      </Scrollbar>

      <Divider />

      <Box sx={{ p: 2, textAlign: 'right' }}>
        <Button
          to="#"
          size="small"
          color="inherit"
          component={RouterLink}
          endIcon={<Icon icon={arrowIosForwardFill} />}
        >
          View all
        </Button>
      </Box>
    </Card>
  );
}
