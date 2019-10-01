import { scale } from '../Components/Helper/Function';
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

let screenHeight = width < height ? height : width
let screenWidth = width < height ? width : height

const Metrics = {
    screenHeight: screenHeight,
    screenWidth: screenWidth,
    CountScale: (val) => {
        return scale(val);
    }
};

export default Metrics;
