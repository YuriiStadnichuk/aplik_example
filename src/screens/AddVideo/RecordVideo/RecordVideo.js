import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { RNCamera } from 'react-native-camera';
import Video from 'react-native-video';
import moment from 'moment'

import styles from './styles';
import { icons, globalStyles } from '../../../constants';

class RecordVideo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      recording: false,
      videoUri: null,
      paused: false,
      camera: 'back',
      timer: 30,
    };
  }

  async startRecording() {
    this.setState({ recording: true, videoUri: null, timer: 30 });
    clearInterval(this.clockCall);
    this.startTimer();
    const { uri, codec = 'mp4' } = await this.camera
      .recordAsync({ maxDuration: 30 })
      .then(data => {
        this.setState({ videoUri: data.uri, recording: false });
      })
      .catch(err => console.log(err));

  }

  stopRecording() {
    this.camera.stopRecording();
    clearInterval(this.clockCall);
  }

  opPressRepeat = () => {
    this.setState({ paused: false });
  };

  switchCamera = () => {
    const { camera } = this.state;
    camera === 'back'
      ? this.setState({ camera: 'front' })
      : this.setState({ camera: 'back' });
  };

  startTimer = () => {
    this.clockCall = setInterval(() => {
      this.decrementClock();
    }, 1000);
  };

  decrementClock = () => {
    const { timer } = this.state;
    if (timer === 0) {
      clearInterval(this.clockCall);
    }
    timer !== 0
      ? this.setState(prevState => ({ timer: prevState.timer - 1 }))
      : null;
  };

  uploadVideo = () => {
    const {setVideo, navigation} = this.props

    const video = {
      name: moment(new Date()).format('YYYYMMDDHHMMSS'),
      type: 'video/mp4',
      uri: this.state.videoUri
    }
    setVideo(video)

    navigation.navigate('Heading')
  }

  render() {
    const { navigation } = this.props;
    const { recording, videoUri, paused, camera, timer } = this.state;

    let button = (
      <TouchableOpacity
        style={styles.recordingButton}
        onPress={this.startRecording.bind(this)}>
        <icons.StartRecording />
      </TouchableOpacity>
    );
    if (recording) {
      button = (
        <TouchableOpacity
          style={styles.recordingButton}
          onPress={this.stopRecording.bind(this)}>
          <icons.StopRecording />
        </TouchableOpacity>
      );
    }

    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={camera}
          flashMode={RNCamera.Constants.FlashMode.on}
        />

        <View style={styles.buttonsContainer}>
          {recording ? <Text style={styles.countDown}>{timer} с </Text> : null}

          <icons.ThinX style={styles.X} onPress={() => navigation.goBack()} />
          {videoUri !== null && paused === true ? (
            <icons.Repeat
              style={styles.repeatIcon}
              onPress={() => this.opPressRepeat()}
            />
          ) : null}
          <View style={styles.bottomBlock}>
            {recording ? null : (
              <Text style={styles.bottomText}>
                {videoUri !== null
                  ? 'Нажмите, чтобы  перезаписать'
                  : 'Нажмите, чтобы начать запись'}
              </Text>
            )}
            <View style={styles.bottomButtonsBlock}>
              {recording ? null : (
                <TouchableOpacity onPress={() => navigation.navigate('ChooseFromGallery')}>
                  <icons.Picture />
                </TouchableOpacity>

              )}
              {button}
              {recording ? null : videoUri !== null ? (
                <TouchableOpacity
                  onPress={() => { this.uploadVideo()}}
                >
                  <icons.Check />
                </TouchableOpacity>

              ) : (
                  <TouchableOpacity onPress={this.switchCamera} >
                    <icons.SwitchCamera />
                  </TouchableOpacity>
                )}
            </View>
          </View>
        </View>

        {videoUri !== null ? (
          <Video
            onEnd={() => this.setState({ paused: true })}
            paused={paused}
            resizeMode="cover"
            source={{ uri: videoUri }}
            ref={ref => {
              this.player = ref;
            }}
            style={styles.backgroundVideo}
          />
        ) : null}
      </View>
    );
  }
}

export default RecordVideo;
