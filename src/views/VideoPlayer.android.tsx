import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  Dimensions,
  View,
  Text,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Video from 'react-native-video';
import {SampleVideo} from '../assets/videos';
import Orientation from 'react-native-orientation-locker';
import {FullscreenClose, FullscreenOpen} from '../assets/icons';

export const VideoPlayer: React.FC = () => {
  const [fullscreen, setFullscreen] = useState<boolean>(false);

  useEffect(() => {
    Orientation.addOrientationListener(handleOrientation);

    return () => {
      Orientation.removeOrientationListener(handleOrientation);
    };
  }, []);

  return (
    <View style={styles.container}>
      <View>
        <Video
          source={SampleVideo}
          style={fullscreen ? styles.fullscreenVideo : styles.video}
          controls={true}
          resizeMode={'contain'}
        />
        <TouchableOpacity
          onPress={handleFullscreen}
          style={styles.fullscreenButton}>
          {fullscreen ? <FullscreenClose /> : <FullscreenOpen />}
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus enim
        suscipit ipsa impedit laboriosam saepe, sapiente excepturi molestiae
        laudantium, non tempora cumque, quam assumenda deserunt? Similique eaque
        voluptas itaque corporis. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Sequi unde iusto vel facere quibusdam nisi placeat,
        debitis veritatis autem deserunt at voluptas nam ut mollitia qui fugit
        minus minima quod.
      </Text>
    </View>
  );

  function handleOrientation(orientation: string) {
    orientation === 'LANDSCAPE-LEFT' || orientation === 'LANDSCAPE-RIGHT'
      ? (setFullscreen(true), StatusBar.setHidden(true))
      : (setFullscreen(false), StatusBar.setHidden(false));
  }

  function handleFullscreen() {
    fullscreen
      ? Orientation.unlockAllOrientations()
      : Orientation.lockToLandscapeLeft();
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ebebeb',
  },
  video: {
    height: Dimensions.get('window').width * (9 / 16),
    width: Dimensions.get('window').width,
    backgroundColor: 'black',
  },
  fullscreenVideo: {
    height: Dimensions.get('window').width,
    width: Dimensions.get('window').height,
    backgroundColor: 'black',
  },
  text: {
    marginTop: 30,
    marginHorizontal: 20,
    fontSize: 15,
    textAlign: 'justify',
  },
  fullscreenButton: {
    position: 'absolute',
    top: 0,
    right: 0,
    backgroundColor: 'red',
    padding: 10,
  },
});
