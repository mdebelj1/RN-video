import React from 'react';
import Slider from '@react-native-community/slider';
import {View, Text, StyleSheet} from 'react-native';

interface Props {
  currentTime: number;
  duration: number;
  onSlide: (data: {seekTime: number}) => void;
}

export const ProgressBar: React.FC<Props> = ({
  currentTime,
  duration,
  onSlide,
}) => {
  const position = getMinutesFromSeconds(currentTime);
  const fullDuration = getMinutesFromSeconds(duration);

  return (
    <React.Fragment>
      <Slider
        value={currentTime}
        minimumValue={0}
        maximumValue={duration}
        step={1}
        onSlidingComplete={handleOnSlide}
        minimumTrackTintColor={'#F44336'}
        maximumTrackTintColor={'#FFFFFF'}
        thumbTintColor={'#F44336'}
        style={styles.wrapper}
      />
      <View style={styles.timeWrapper}>
        <Text style={styles.timeLeft}>{position}</Text>
        <Text style={styles.timeRight}>{fullDuration}</Text>
      </View>
    </React.Fragment>
  );

  function getMinutesFromSeconds(time: number) {
    const minutes = time >= 60 ? Math.floor(time / 60) : 0;
    const seconds = Math.floor(time - minutes * 60);

    return `${minutes >= 10 ? minutes : '0' + minutes}:${
      seconds >= 10 ? seconds : '0' + seconds
    }`;
  }

  function handleOnSlide(time: number) {
    onSlide({seekTime: time});
  }
};

const styles = StyleSheet.create({
  wrapper: {
    height: 40,
    width: '100%',
  },
  timeWrapper: {
    display: 'flex',
    flexDirection: 'row',
    height: 30,
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 5,
    width: '100%',
    zIndex: 2001,
  },
  timeLeft: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    paddingLeft: 10,
  },
  timeRight: {
    flex: 1,
    fontSize: 16,
    color: '#FFFFFF',
    textAlign: 'right',
    paddingRight: 10,
  },
});
