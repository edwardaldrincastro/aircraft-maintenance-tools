import { NetInfo } from 'react-native';

export const networkChecker = () => {
    const { type } = NetInfo.getConnectionInfo();
    if (type !== "none") {
        console.log('with network connectivity')
        return 'yes'
    } else {
        console.log('no network connectivity')
        return 'no'

    }
}
