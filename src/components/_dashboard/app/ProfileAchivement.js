import arrowIosForwardFill from '@iconify/icons-eva/arrow-ios-forward-fill';
import Icon from '@iconify/react';
// material
import { Box, Button, Card, CardContent, CardHeader, Divider, Typography } from '@material-ui/core';
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator
} from '@material-ui/lab';
import faker from 'faker';
import PropTypes from 'prop-types';
import { Link as RouterLink } from 'react-router-dom';
// utils
import { fDate } from '../../../utils/formatTime';

// ----------------------------------------------------------------------

const TIMELINES = [
  {
    title: 'Finalist - sanoma Data Challenge',
    time: faker.date.past(5),
    type: 'order1'
  },
  {
    title: '2nd - Health and Safety Monitoring Deephack',
    time: faker.date.past(5),
    type: 'order2'
  },
  {
    title: 'Part of Jordan Innovation Program',
    time: faker.date.past(5),
    type: 'order3'
  },
  {
    title: '1st - Zero Emission Mobility DeepHack',
    time: faker.date.past(5),
    type: 'order4'
  },
  {
    title: 'Runner ups - Ericsson Together Apart Hackathon, UAE',
    time: faker.date.past(5),
    type: 'order5'
  }
];

// ----------------------------------------------------------------------

OrderItem.propTypes = {
  item: PropTypes.object,
  isLast: PropTypes.bool
};

function OrderItem({ item, isLast }) {
  const { type, title, time } = item;
  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor:
              (type === 'order1' && 'primary.main') ||
              (type === 'order2' && 'success.main') ||
              (type === 'order3' && 'info.main') ||
              (type === 'order4' && 'warning.main') ||
              'error.main'
          }}
        />
        {isLast ? null : <TimelineConnector />}
      </TimelineSeparator>
      <TimelineContent>
        <Typography variant="subtitle2">{title}</Typography>
        <Typography variant="caption" sx={{ color: 'text.secondary' }}>
          {fDate(time)}
        </Typography>
      </TimelineContent>
    </TimelineItem>
  );
}

export default function ProfileAchivement() {
  return (
    <Card
      sx={{
        '& .MuiTimelineItem-missingOppositeContent:before': {
          display: 'none'
        }
      }}
    >
      <CardHeader title="Achivements" />
      <Timeline sx={{ p: 2, ml: 4 }}>
        {TIMELINES.map((item, index) => (
          <OrderItem key={item.title} item={item} isLast={index === TIMELINES.length - 1} />
        ))}
      </Timeline>
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
