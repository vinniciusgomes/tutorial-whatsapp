import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {RNCamera} from 'react-native-camera';

import {
  Container,
  CaptureButton,
  ButtonContainer,
  Flash,
  ChangeCamera,
} from './styles';
import {Icon} from 'native-base';

export default class App extends Component {
  takePicture = async () => {
    if (this.camera) {
      const options = {quality: 1, base64: true};
      const data = await this.camera.takePictureAsync(options);
      this.props.navigation.navigate('VisualizarFoto', {
        imageUri: data.base64,
      });
    }
  };

  render() {
    return (
      <Container>
        <RNCamera
          ref={camera => {
            this.camera = camera;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          autoFocus={RNCamera.Constants.AutoFocus.on}
          flashMode={RNCamera.Constants.FlashMode.off}
          permissionDialogTitle={'Permission to use camera'}
          permissionDialogMessage={
            'We need your permission to use your camera phone'
          }>
          <ButtonContainer>
            <Flash>
              <Icon
                style={{color: '#FFFFFF', fontSize: 28}}
                name="flash"
                type="MaterialCommunityIcons"
              />
            </Flash>
            <CaptureButton onPress={this.takePicture} />
            <ChangeCamera>
              <Icon
                style={{color: '#FFFFFF', fontSize: 28}}
                name="camera-party-mode"
                type="MaterialCommunityIcons"
              />
            </ChangeCamera>
          </ButtonContainer>
        </RNCamera>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});
