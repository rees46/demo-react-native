import React from 'react';
import { appRoutes } from '@navigations/constants';
import { ScreenStack } from '@navigations/screen-stack-framgent';
import { homeStackParams } from './home-stack.constants';

export default () => (
  <ScreenStack groupName={appRoutes.Home.groupName} screens={homeStackParams} />
);
