# react-vr-image-gallery

VR image gallery with transition animations and gaze-enabled control buttons.

Currently supports square images only, will add more. Restrictions due to react-vr image constraints requiring exact image measurements for rendering. [More info on react-vr images](https://facebook.github.io/react-vr/docs/images.html).


### Sample usage

```javascript
import React from 'react';
import {
  asset,
  View,
} from 'react-vr';
import Gallery, { imageTypes } from "react-vr-image-gallery";

export default class ImageGallery extends React.Component {
  render() {
    return (
      <View>
          <Gallery type={imageTypes.SQUARE} images={[
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
```
