import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';
import { NAV_SCREENS } from "@utils/constants/Navigation";


import { RootStackParamList } from '../../types';

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          [NAV_SCREENS.HOME]: {
            screens: {
              HomeScreen: 'one',
            }
          },
          [NAV_SCREENS.FAVORITES]: {
            screens: {
              HomeScreen: 'one',
            }
          },
          [NAV_SCREENS.NOTIFICATIONS]: {
            screens: {
              HomeScreen: 'one',
            }
          },
          [NAV_SCREENS.PROFILE]: {
            screens: {
              HomeScreen: 'one',
            }
          },
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};

export default linking;
