AFRAME.registerComponent('aframe-look-at-component');
AFRAME.registerComponent('components/tour');
AFRAME.registerComponent('components/panorama');
AFRAME.registerComponent('components/hotspot');
AFRAME.registerComponent('components/helper');
AFRAME.registerComponent('../dist/no-click-look-controls', NoClickLookControls);

document.addEventListener('DOMContentLoaded', () => {
  console.log('Initialized app');
});
