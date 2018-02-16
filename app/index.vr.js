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
import { Provider } from "react-redux";
import Gallery from "./components/gallery/gallery";
import store from "./redux/store";
import { imageTypes } from "./components/gallery/imageTypes";

export default class image_gallery extends React.Component {
  render() {
    const earthRadius = 1.5;
    return (
      <Provider store={store}>
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
              }]
            }/>
        </View>
      </Provider>
    );
  }
};

AppRegistry.registerComponent('image_gallery', () => image_gallery);
