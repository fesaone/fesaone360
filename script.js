const image360 = document.getElementById('image360');
const totalImages = 48;
let currentImage = 1;

const images = [
  'https://images.ctfassets.net/x7j9qwvpvr5s/785XKRCdpoCCJBmkJBag9x/65cbac2f5e2d40201f845ccd68bbb46c/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_00.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/oGeU3imu6h8JMuHbuOUTp/cab2f9de5d40187a35ec31d52a5d1c91/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_01.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/2B1tU4CstTGdgHwfGrhdU7/4ad69168d6a982439b4f73695223d55b/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_02.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/5BvSxBbFWVPz52NHxzywy6/256d80cee9928f8f75852d981ef60001/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_03.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/71TSY11HWm0oB8iAEyb53P/27d061a78b3d9b6a7389926586c1c2e7/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_04.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/43M68ZDBuWnhmr2H59NNtY/4aedd9ac4c1b0ff3ed2dba6c1e43d31f/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_05.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/1ulk7ooJjD5wqFYZ0kRYPT/779a7ecc8dbafb565c57ceb18cdca6b7/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_06.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/D0GIOdm5ENxFBilQvjZpr/b8d419e78e9ce733919711b6b2dfdc3f/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_07.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/1RJqvIJcLabA0VGzeepQHH/90f28c6c965fd7078c5f05fdb072a17e/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_08.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/5ElAFqhx2rP5NzPec4RXk/a821280fa9e3854eaf927022cd02d9ad/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_09.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/7cYPboS48VbUxZtA4YvxQC/f60995bb5dd62c99c8a17f5a4b153e84/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_10.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/6l1dz0rFxBwLttrPs6W6zh/cf4b42964aea3a5748a3363cde725f60/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_11.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/2F0JyRn0a225WqIBmTBiqp/2a787f3b7c607a653c2f271a0d22ab74/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_12.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/5kVczt5qKg2wQXOly9ZX82/6cd34858850247a7cf42f7fc45c56bc5/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_13.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/3M5pyPfEW1uo6iqsbqaHtK/e0e83d1177b4fbed1f2fc68cf53d74f3/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_14.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/3kF78bBer6aBlx3o0hr3yT/d67a5527dad2b6e76f3edcbf8851c2e0/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_15.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/FXvTtHovGgvCaLzXoTYbt/e4aa9c444e9a66dd3f9ca7e18163876a/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_16.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/4cDnbFbv4oDLTfhGprbdXF/6f28cff83ef8a8e26533732aac88c14b/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_17.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/2eFGICHUR4ZYoX7FrCN6hk/0c3b3bab8d1d629c7199e82325f16ee7/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_18.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/2MTccdCGY0Ctitbb8J86y/1c2366f7b3f3df2eef9428111d0fd89a/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_19.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/2ymDiJVPa9K0MvBKpxyPZg/6693d58a1f9ebbdac8a2245d4f11d3aa/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_20.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/5Al2nfquHlKW55DsWQcEjS/5050e62b5e08be1baaae91f52b544d7e/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_21.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/36a7BuXZZ7oSvytgpSfPSp/7eca9fce7e863c73e653c0f9d603379d/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_22.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/1Q0dD5nfvXXvIHELSNLSFc/a6848a6abf2abaf4a96397516659f35e/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_23.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/4L6eo2tygoj6tUkgnNRVRg/3e0224c29b74784e81f255fa7c64e951/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_24.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/67raiOmq6vanm1eu5nrmOy/6f806442d1cfd85c3244a7411c81be88/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_25.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/203JCdGda5h2v7wxF5TOpq/e7f64c3d1a0877d1b09485006e5f74ae/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_26.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/IcfbdicXVUsV1X8Ew6tdC/ba5167340c80fe22ceaf8847c1f8bf43/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_27.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/5wXAiwMKDLM4PIFuhTXIWw/c420cdc1fc5013bfd22ffa211f241f5e/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_28.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/DpyhvZyerfb7lcc82rk2H/f2ad730bc88fa218b0e8e72d7dbbd99c/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_29.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/6Wmv6V3r4h0jjVcNLYvGVz/09f7f127e8b8ada9330c73200eb7cf12/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_30.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/5bjEHzL6rItuoXYXDRU2NH/515c8660faf216e0ca38336e6f6a77b0/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_31.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/6eq2RZ61GimD7K31mXcufq/1478310dd332abc4d868b682253e3e6a/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_32.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/3in8ZdNizR2YE7o8R7NP4q/7dc0e52cc4fa5ba903a512bc3106cbb2/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_33.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/3fl0Tuz7FN6FNpDrVRAPPY/8b1bf570fa9e2720dcf3dfbdb7cba4fd/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_34.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/1CXv6Kqxms2ynBXTyQfQws/1ed6dffc6422d2a39d97912a5a0baa8b/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_35.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/5qQ3VhdfQkXsAweDC2seIh/7c3de35da038c0106d560425ee70d4d6/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_36.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/63uiLbPC6Cgw9B34L0yvyX/097bc5e776416a5434cd27400d5d9ae4/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_37.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/5Pyijokb0nk9OjMt7uLGox/de793445b05fd7faaa4670141990f06d/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_38.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/2MJORNXTsV8YMv5lkY0U2Q/4f081b9912ec89fc0782f0f9b6bb4d1b/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_39.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/2un9DFxY83VUEvH0nlMWlx/9a131a4335449d1103a0e31d76b7add0/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_40.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/4YLnZTnOGceeMNBSx0rF4p/277947c6abdd4579c27863edff16c902/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_41.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/1AKoGlPTm4UVQQV417GY6M/8b9ba01bcfff9a94af36e425de069269/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_42.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/4RC6Oh8FrPE1QWCSH7MY34/230a0336060b676fe304cd2c9f390960/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_43.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/5ycM0cmOITsFI4dNyYnika/c43497dd317b5468d3d7d0db466bd703/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_44.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/4jGGMrha1S6zqU1kc8QnCs/f9e29d91cf38d5fd55986151db4007b4/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_45.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/67EagaMwwaiV4e0WVQRYz1/8dbf7d8db4c17a4427c259778f4713fa/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_46.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/5rqnuX6gkvgH3QJ5zVkkAE/52f8d5ba36d2072038b5f1a69bdc4f01/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_47.png?w=1920&fm=webp&q=95',
  'https://images.ctfassets.net/x7j9qwvpvr5s/785XKRCdpoCCJBmkJBag9x/65cbac2f5e2d40201f845ccd68bbb46c/PANV4R_SPIN_SCARICO_ALTO_E_FRIZIONE_00.png?w=1920&fm=webp&q=95',
];

image360.style.backgroundImage = `url('${images[currentImage - 1]}')`;

let isMouseDown = false;
let startX;

function updateImage() {
  image360.style.backgroundImage = `url('${images[currentImage - 1]}')`;
}

function handleStart(e) {
  isMouseDown = true;
  startX = e.clientX || e.touches[0].clientX;
}

function handleMove(e) {
  if (!isMouseDown) return;

  const x = e.clientX || e.touches[0].clientX;
  const dx = x - startX;
  if (Math.abs(dx) > 5) {
    if (dx < 0) {
      currentImage++;
      if (currentImage > totalImages) currentImage = 1;
    } else {
      currentImage--;
      if (currentImage < 1) currentImage = totalImages;
    }

    updateImage();
    startX = x;
  }
}

function handleEnd() {
  isMouseDown = false;
}

image360.addEventListener('mousedown', handleStart);
image360.addEventListener('mousemove', handleMove);
image360.addEventListener('mouseup', handleEnd);
image360.addEventListener('mouseleave', handleEnd);

image360.addEventListener('touchstart', handleStart);
image360.addEventListener('touchmove', handleMove);
image360.addEventListener('touchend', handleEnd);
