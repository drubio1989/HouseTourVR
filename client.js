// This file contains the boilerplate to execute your React app.
// If you want to modify your application's content, start in "index.js"

import {ReactInstance, Surface} from 'react-360-web';

function init(bundle, parent, options = {}) {
  const r360 = new ReactInstance(bundle, parent, {
    // Add custom options here
    fullScreen: true,
    ...options,
  });

  const buttonsPanel = new Surface(
    400,
    400,
    Surface.SurfaceShape.Flat
  );

  buttonsPanel.setAngle(
    -0.5,
    0
  );

  const infoPanel = new Surface(
    400,
    400,
    Surface.SurfaceShape.Flat
  );

  infoPanel.setAngle(
    0.5,
    0
  );

  r360.renderToSurface(
    r360.createRoot('HousePanel'),
    infoPanel
  );

  r360.renderToSurface(
    r360.createRoot('SelectionPanel'),
    buttonsPanel
  );

  r360.compositor.setBackground(r360.getAssetURL('images/front_door.jpg'));
}

window.React360 = {init};
