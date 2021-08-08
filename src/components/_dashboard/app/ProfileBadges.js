import faker from 'faker';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import emailFill from '@iconify/icons-eva/at-fill';
import twitterFill from '@iconify/icons-eva/twitter-fill';
import facebookFill from '@iconify/icons-eva/facebook-fill';
import linkedinFill from '@iconify/icons-eva/linkedin-fill';
// material
import { Box, Grid, Card, Paper, Typography, CardHeader, CardContent } from '@material-ui/core';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
import account from '../../../_mocks_/account';

// ----------------------------------------------------------------------

const SOCIALS = [
  {
    name: `Facebook ${account.facebook}`,
    value: `${faker.datatype.number(100)} likes`,
    icon: <Icon icon={facebookFill} color="#1877F2" width={32} height={32} />
  },
  {
    name: 'Email',
    value: account.email,
    icon: <Icon icon={emailFill} color="#DF3E30" width={32} height={32} />
  },
  {
    name: 'Linkedin',
    value: account.linkedin,
    icon: <Icon icon={linkedinFill} color="#006097" width={32} height={32} />
  },
  {
    name: `Twitter ${account.twitter}`,
    value: `${faker.datatype.number(100)} followers`,
    icon: <Icon icon={twitterFill} color="#1C9CEA" width={32} height={32} />
  }
];

// ----------------------------------------------------------------------

SiteItem.propTypes = {
  site: PropTypes.object
};

function SiteItem({ site }) {
  const { icon, value, name } = site;

  return (
    <Grid item xs={6}>
      <Paper variant="outlined" sx={{ py: 2.5, textAlign: 'center' }}>
        <Box sx={{ mb: 0.5 }}>{icon}</Box>
        <Typography variant="h6">{value}</Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {name}
        </Typography>
      </Paper>
    </Grid>
  );
}

export default function AppTrafficBySite() {
  return (
    <Card>
      <CardHeader title="Traffic by Site" />
      <CardContent>
        <Grid container spacing={2}>
          {SOCIALS.map((site) => (
            <SiteItem key={site.name} site={site} />
          ))}
        </Grid>
      </CardContent>
    </Card>
  );
}