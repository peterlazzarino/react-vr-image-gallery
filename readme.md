##react-vr-image-gallery

VR image gallery with transition animations and gaze-enabled control buttons.

Currently supports square images only, will add more. Restrictions due to react-vr image constraints requiring exact image measurements for rendering. [https://facebook.github.io/react-vr/docs/images.html](More information here).

![Preview image](https://media.giphy.com/media/NlF6CTWiw7pEb8xdPA/giphy.gif)

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

Next and prev buttons can be clicked or looked at for 1 second to navigate. Will add props to adjust timing and add other screen sizes in the future.

Suggestions for future features are welcome.