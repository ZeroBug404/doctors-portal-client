import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import 'react-day-picker/dist/style.css';
import bg from '../../assets/images/bg.png';
import chair from '../../assets/images/chair.png';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className="w-full h-full bg-no-repeat bg-cover" style={{backgroundImage: `url(${bg})`}}>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            className="max-w-md rounded-lg shadow-2xl"
            alt=""
          />
          <div className="px-10 ">
            <DayPicker 
            mode="single"
            selected={date}
            onSelect={setDate}
            />
          <p>You Picked {format(date, 'PP')}</p>
          </div>
        </div>
      </div>
    </div>
    );
};

export default AppointmentBanner;