import { VRInstance } from 'react-vr-web';

function init(bundle, parent, options) {
  const vr = new VRInstance(bundle, 'image_gallery', parent, {
    ...options
  });
  vr.render = function() { };
  vr.start();
  return vr;  
}

window.ReactVR = {init};
