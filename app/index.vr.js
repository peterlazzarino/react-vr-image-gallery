import React from 'react';
import {
  AppRegistry,
  asset,
  Pano,
  Text,
  PointLight,
  AmbientLight,
  Sphere,
  View,
} from 'react-vr';
import Gallery from "./components/gallery/gallery";
import { imageTypes } from "./components/gallery/imageTypes";

export default class image_gallery extends React.Component {
  render() {
    return (
      <View>
          <Pano source={asset("star_bg.jpg")} />
          <Gallery type={imageTypes.SQUARE} initialImage={1} images={[
              asset("sun.jpg"),
              asset("star_bg.jpg"),
              asset("earth.jpg"),
              asset("sun.jpg"),
              asset("earth_alt.jpg") 
            ]
          }/>
      </View>
    );
  }
};

AppRegistry.registerComponent('image_gallery', () => image_gallery);
