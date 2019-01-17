import React from 'react';

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
  console.log(ua);
  return mobiles.some(mobile => ua.includes(mobile));
};

export default function withMobileDetection(Component) {
  function WithMobileDetection(props) {
    return <Component {...props} isMobile={detectMobile()} />;
  }

  WithMobileDetection.displayName = `withMobileDetection(${Component.displayName
    || Component.name
    || 'Component'})`;

  return WithMobileDetection;
}
