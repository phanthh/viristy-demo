// material
import { Box, Container, Grid, Typography } from '@material-ui/core';
// components
import Page from '../components/Page';
import {
  AppConversionRates,
  AppCurrentSubject,
  AppNewsUpdate,
  AppOrderTimeline,
  AppTasks,
  AppTrafficBySite
} from '../components/_dashboard/app';
import ProfileHeaderAndBanner from '../components/_dashboard/app/ProfileHeaderAndBanner';
import ProfileSkillPieChart from '../components/_dashboard/app/ProfileSkillPieChart';
import ProfileBadges from '../components/_dashboard/app/ProfileBadges';
import ProfileProjects from '../components/_dashboard/app/ProfileProjects';
import ProfileCompetition from '../components/_dashboard/app/ProfileCompetition';
import ProfileAchivement from '../components/_dashboard/app/ProfileAchivement';

// ----------------------------------------------------------------------

export default function Profile() {
  return (
    <Page title="Profile | Virsity Demo">
      <Container maxWidth="xl">
        <Box sx={{ pb: 5 }}>
          <Typography variant="h4">Profile</Typography>
        </Box>
        <Grid container spacing={3}>
          <Grid item xs={8}>
            <ProfileHeaderAndBanner />
          </Grid>
          <Grid item xs={4}>
            <ProfileSkillPieChart />
          </Grid>
          <Grid item xs={8}>
            <ProfileProjects />
          </Grid>
          <Grid item xs={4}>
            <ProfileAchivement />
          </Grid>
          <Grid item xs={8}>
            <ProfileCompetition />
          </Grid>
          <Grid item xs={12} md={6} lg={4}>
            <ProfileBadges />
          </Grid>
        </Grid>
      </Container>
    </Page>
  );
}
