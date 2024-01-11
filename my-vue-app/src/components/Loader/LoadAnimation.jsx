import {ClimbingBoxLoader} from 'react-spinners';
import {HashLoader} from 'react-spinners';
const LoadAnimation = () => {
    return (
        <div className="spinnerContainer" >
            <div className="spinner">
                < HashLoader color={'aqua'}
                    size={80} />
            </div>
        </div>
    );
}
export default LoadAnimation;