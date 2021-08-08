// material
import sendIcon from '@iconify/icons-mdi/send';
import inviteIcon from '@iconify/icons-mdi/people';
import Icon from '@iconify/react';
import { Box, Button, Card, CardContent, CardMedia, Chip, Typography } from '@material-ui/core';
import { useTheme } from '@material-ui/core/styles';
import account from '../../../_mocks_/account';
// utils
// ----------------------------------------------------------------------

export default function ProfileHeaderAndBanner() {
  const theme = useTheme();
  return (
    <Card>
      <CardMedia
        component="img"
        alt="banner"
        height="280px"
        image={account.coverURL}
        title="banner"
      />
      <img
        style={{
          position: 'absolute',
          width: '172px',
          top: '200px',
          left: '25px',
          borderRadius: '50%',
          border: 'white solid 4px'
        }}
        src={account.photoURL}
        alt="photoURL"
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'vertical',
          position: 'absolute',
          top: '300px',
          right: '25px'
        }}
      >
        <Button
          variant="contained"
          color="primary"
          startIcon={<Icon icon={sendIcon} width={22} height={22} />}
          sx={{ marginRight: theme.spacing(1) }}
        >
          Message
        </Button>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<Icon icon={inviteIcon} width={22} height={22} />}
        >
          Invite
        </Button>
      </Box>
      <CardContent sx={{ paddingLeft: '220px' }}>
        <Typography variant="h3">{account.displayName}</Typography>
        <Typography variant="caption">{account.title}</Typography>
        <Typography variant="subtitle2" sx={{ marginTop: theme.spacing(1) }}>
          {account.loc}
        </Typography>
        <Box display="flex" sx={{ marginTop: theme.spacing(2) }}>
          <Chip size="small" label="UI Design" sx={{ marginRight: theme.spacing(1) }} />
          <Chip size="small" label="UX Research" sx={{ marginRight: theme.spacing(1) }} />
          <Chip size="small" label="Design Interation" />
        </Box>
      </CardContent>
    </Card>
  );
}
