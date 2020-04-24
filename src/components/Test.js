const semverCompare = (currentVersion, latestVersion) => {
  const currentVersionArr = currentVersion.split('.');
  const latestVersionArr = latestVersion.split('.');
  for (var i = 0; i < latestVersionArr.length; i++) {
    const a = parseInt(latestVersionArr[i], 10) || 0;
    const b = parseInt(currentVersionArr[i], 10) || 0;
    if (a > b) {
      return true;
    }
  }
  return false;
};

const testUpdate = () => {
  console.log('compare 1.2.0 - 1.2 =>', semverCompare('1.2.0', '1.2')); // false
  console.log('compare 1.2.0 - 1.3 =>', semverCompare('1.2.0', '1.3')); // true
  console.log('compare 00001 - 1.0.0 =>', semverCompare('00001', '1.0.0')); // false
  console.log('compare 1.2 - 1.2.0 =>', semverCompare('1.2', '1.2.0')); // false
  console.log('compare 1.2.0 - 1.2.1 =>', semverCompare('1.2.0', '1.2.1')); // true
  console.log('compare 2.2.0 - 1.2 =>', semverCompare('2.2.0', '1.2')); // false
  console.log('compare 2.2.0 - 2.2 =>', semverCompare('2.2.0', '2.2')); // false
  console.log('compare 2.2.0 - 2.2.1 =>', semverCompare('2.2.0', '2.2.1')); // true
};

testUpdate();
