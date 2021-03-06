import React from 'react';

import getDisplayName from '../helpers/getDisplayName';

const detectMobile = () => {
  const mobiles = [
    'iphone',
    'ipad',
    'android',
    'blackberry',
    'nokia',
    'opera mini',
    'windows mobile',
    'windows phone',
    'iemobile'
  ];
  const ua = navigator.userAgent.toLowerCase();
  return mobiles.some(mobile => ua.includes(mobile));
};

export default function withMobileDetection(Component) {
  function WithMobileDetection(props) {
    return <Component {...props} isMobile={detectMobile()} />;
  }

  WithMobileDetection.displayName = `withMobileDetection(${getDisplayName(Component)})`;

  return WithMobileDetection;
}
