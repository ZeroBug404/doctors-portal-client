import chair from '../../assets/images/chair.png';
import bg from '../../assets/images/bg.png';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';
import 'react-day-picker/dist/style.css';

const AppointmentBanner = ({date, setDate}) => {
    return (
        <div className="w-full h-full bg-no-repeat bg-cover" style={{backgroundImage: `url(${bg})`}}>
      <div class="hero min-h-screen">
        <div class="hero-content flex-col lg:flex-row-reverse">
          <img
            src={chair}
            class="max-w-md rounded-lg shadow-2xl"
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