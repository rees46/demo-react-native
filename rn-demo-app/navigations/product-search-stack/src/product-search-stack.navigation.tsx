import React from 'react';
import {appRoutes} from '@navigations/constants'
import {ScreenStack} from '@navigations/screen-stack-framgent'
import {productSearchStackParams} from "./product-search-stack.constants";

export default () => <ScreenStack groupName={appRoutes.Home.groupName} screens={productSearchStackParams} />