import React from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
import {VideoPlayer} from './src/views';

const App: React.FC = () => {
  return <VideoPlayer />;
};

AppRegistry.registerComponent(appName, () => App);
