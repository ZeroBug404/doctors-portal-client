import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Appointmentinfo from './Appointmentinfo';
import BookingModal from './BookingModal';

const AvilableAppointments = ({date}) => {
    const [appointments, setAppointments] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch('appointments.json')
        .then(res => res.json())
        .then(data => setAppointments(data))
    },[])

    return (
        <div className='text-center my-12 px-12'>
            <h3 className='text-primary font-bold text-lg'>Available Appointments On {format(date, 'PP')}</h3>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>
                {
                    appointments.map(appointment => <Appointmentinfo 
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    ></Appointmentinfo>)
                }
                {treatment && <BookingModal setTreatment={setTreatment} date={date} treatment={treatment}></BookingModal>}
            </div>
        </div>
    );
};

export default AvilableAppointments;