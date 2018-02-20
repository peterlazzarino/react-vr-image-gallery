import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  View,
} from 'react-vr';
import Gallery, { imageTypes } from "react-vr-image-gallery";

export default class image_gallery_demo extends React.Component {
  render() {
    return (
      <View>
        <Pano source={asset('chess-world.jpg')}/>
        <Text
          style={{
            backgroundColor: '#777879',
            fontSize: 0.8,
            fontWeight: '400',
            layoutOrigin: [0.5, 0.5],
            paddingLeft: 0.2,
            paddingRight: 0.2,
            textAlign: 'center',
            textAlignVertical: 'center',
            transform: [{translate: [0, 1.8, -3]}],
          }}>
          hello
        </Text>
          <Gallery type={imageTypes.SQUARE} initialImage={1} images={[
              asset("sun.jpg"),
              asset("star.jpg"),
              asset("earth.jpg"),
              asset("earth.jpg") 
            ]
          }/>
      </View>
    );
  }
};

AppRegistry.registerComponent('image_gallery_demo', () => image_gallery_demo);
