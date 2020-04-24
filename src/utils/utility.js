import {getVersion} from 'react-native-device-info';

export const semverCompare = latest_version => {
  let currentVersionArr = getVersion().split('.'); //get current version of app from device
  let latestVersionArr = latest_version.split('.'); //get latest version of app from config
  for (var i = 0; i < latestVersionArr.length; i++) {
    const a = parseInt(latestVersionArr[i], 10) || 0;
    const b = parseInt(currentVersionArr[i], 10) || 0;
    if (a > b) {
      return true;
    }
  }
  return false;
};
