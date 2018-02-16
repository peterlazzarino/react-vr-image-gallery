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
          <Gallery images={[
            { 
              type: imageTypes.SQUARE,
              source: asset("sun.jpg") 
            }, 
            { 
              type: imageTypes.SQUARE,
              source: asset("star_bg.jpg") 
            }, 
            { 
              type: imageTypes.SQUARE,
              source: asset("earth.jpg") 
            },
            { 
              type: imageTypes.SQUARE,
              source: asset("sun.jpg") 
            },
            { 
              type: imageTypes.SQUARE,
              source: asset("earth_alt.jpg") 
            }]
          }/>
      </View>
    );
  }
};

AppRegistry.registerComponent('image_gallery', () => image_gallery);
