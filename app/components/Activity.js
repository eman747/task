import React from 'react';
import {ActivityIndicator} from 'react-native';

import palette from '../theme/palette';

export default function Activity() {
  return <ActivityIndicator size="small" color={palette.secondary} />;
}
