document.addEventListener("mousedown", function (event) {
  if (event.button === 0) {
    InputDeviceInfo.mouse.left = true;
  }
  if (event.button === 1) {
    InputDeviceInfo.mouse.middle = true;
  }
  if (event.button === 2) {
    InputDeviceInfo.mouse.right = true;
  }
});
