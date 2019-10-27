import React from 'react';
import {StyleSheet, Dimensions} from 'react-native';
import Video from 'react-native-video';
import {SampleVideo} from '../assets/videos';

export const VideoPlayer: React.FC = () => {
  return (
    <Video
      source={SampleVideo}
      style={styles.video}
      controls={true}
      resizeMode={'cover'}
    />
  );
};

const styles = StyleSheet.create({
  video: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').width * (9 / 16),
    backgroundColor: 'black',
  },
});
