import { Icon } from '@iconify/react';
import personFill from '@iconify/icons-eva/person-fill';
import peopleFill from '@iconify/icons-eva/people-fill';
import awardFill from '@iconify/icons-eva/award-fill';
import fileTextFill from '@iconify/icons-eva/file-text-fill';
import lockFill from '@iconify/icons-eva/lock-fill';
import personAddFill from '@iconify/icons-eva/person-add-fill';
import alertTriangleFill from '@iconify/icons-eva/alert-triangle-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'profile',
    path: '/app/profile',
    icon: getIcon(personFill)
  },
  {
    title: 'team',
    path: '/app/team',
    icon: getIcon(peopleFill)
  },
  {
    title: 'events',
    path: '/app/events',
    icon: getIcon(awardFill)
  },
  {
    title: 'blog',
    path: '/app/blog',
    icon: getIcon(fileTextFill)
  },
  {
    title: 'login',
    path: '/login',
    icon: getIcon(lockFill)
  },
  {
    title: 'register',
    path: '/register',
    icon: getIcon(personAddFill)
  },
  {
    title: 'Not found',
    path: '/404',
    icon: getIcon(alertTriangleFill)
  }
];

export default sidebarConfig;
