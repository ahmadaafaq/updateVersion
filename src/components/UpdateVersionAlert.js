import {Alert} from 'react-native';
import {appConfig} from '../config/config';

const UpdateVersionAlert = ({force}) => {
  const messagesArr = [];
  const update = {
    text: 'Update',
    onPress: () => console.log('go to app store'),
  };
  if (!force) {
    const nextTime = {
      text: 'Next Time',
      onPress: () => console.log('Next Time'),
      style: 'cancel',
    };
    messagesArr.push(nextTime);
  }
  messagesArr.push(update);
  return Alert.alert(
    'Update Available',
    `A new version of the app is available. Please update to version ${
      appConfig.latest_version
    } now.`,
    messagesArr,
    {cancelable: false},
  );
};

export default UpdateVersionAlert;
