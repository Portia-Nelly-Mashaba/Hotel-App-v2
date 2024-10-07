import React, { useEffect, useState } from 'react';
import { Link, useLocation, useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';
import { SpinnerDotted } from 'spinners-react';

const Summary = () => {
    const { state } = useLocation(); // Get the passed state
    const { id } = useParams();
    const [room, setRoom] = useState(state || null); // Initialize with passed state
    const [loading, setLoading] = useState(!state); // Set loading based on passed state

    useEffect(() => {
        const fetchRoom = async () => {
            if (!state) { // Only fetch if state is not provided
                try {
                    const roomDoc = doc(db, 'rooms', id); // Fetch room by ID
                    const roomData = await getDoc(roomDoc);
                    if (roomData.exists()) {
                        console.log('Room data:', roomData.data());
                        setRoom(roomData.data());
                    }
                    setLoading(false);
                } catch (error) {
                    console.error('Error fetching room data: ', error);
                }
            }
        };
        fetchRoom();
    }, [id, state]);

    // Check if room exists before trying to destructure its properties
    if (!state && loading) {
        return (
            <div className='h-screen fixed bottom-0 top-0 bg-black/90 w-full z-50 flex justify-center items-center'>
                <SpinnerDotted />
            </div>
        );
    }
    if (!room) {
        return <p className="text-lg text-red-500">No room details available.</p>;
    }

    // Destructure properties from room
    const { imageURL, roomType, description } = room;
    console.log('Room data:', room);

    // If state was passed, use its properties
    const { numberOfNights, totalAmount, checkInDate, checkOutDate, adults, kids } = state || {};
    console.log('State data:', state);
  

     return (
       <section>

        
       
<div className="py-14 px-4 md:px-6 2xl:px-20 2xl:container 2xl:mx-auto">
 

  <div className="flex justify-start item-start space-y-2 flex-col">
    <h1 className="text-3xl dark:text-white lg:text-4xl font-semibold leading-7 lg:leading-9 text-gray-800">Booking Summary</h1>
    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">write the date <Link to={'/'}>Edit</Link></p>
    <p className="text-base dark:text-gray-300 font-medium leading-6 text-gray-600">
                        Check-in: {checkInDate} | Check-out: {checkOutDate} | Adults: {adults} | Kids: {kids} | Nights: {numberOfNights}
                        <Link to={'/'}> Edit</Link>
                    </p>
  </div>
  <div className="mt-10 flex flex-col xl:flex-row jusitfy-center items-stretch w-full xl:space-x-8 space-y-4 md:space-y-6 xl:space-y-0">
    <div className="flex flex-col justify-start items-start w-full space-y-4 md:space-y-6 xl:space-y-8">
      <div className="flex flex-col justify-start items-start dark:bg-gray-800 bg-gray-50 px-4 py-4 md:py-6 md:p-6 xl:p-8 w-full">
        <p className="text-lg md:text-xl dark:text-white font-semibold leading-6 xl:leading-5 text-gray-800">{roomType}</p>
        <p className="text-base mt-4 dark:text-gray-300 leading-4 text-gray-600">{description}</p>
        <div className="mt-4 md:mt-6 flex flex-col md:flex-row justify-start items-start md:items-center md:space-x-6 xl:space-x-8 w-full">
          <div className="max-w-lg text-center">
            <img className="h-auto max-w-full rounded-lg" src={imageURL} alt="" />
          </div>
        </div>

        <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Booking Details</h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Room Type</p>
            <p claclassName="text-base dark:text-gray-300 leading-4 text-gray-600">{roomType}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Check-In Date </p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{checkInDate}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Check-Out Date</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{checkOutDate}</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Room No</p>
            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{roomType}</p>
          </div>
        </div>
      </div>

    </div>
    <div className="bg-gray-50 dark:bg-gray-800 w-full xl:w-96 flex justify-between items-center md:items-start px-4 py-6 md:p-6 xl:p-8 flex-col">
      <div className="flex flex-col px-4 py-6 md:p-6 xl:p-8 w-full bg-gray-50 dark:bg-gray-800 space-y-6">
          <h3 className="text-xl dark:text-white font-semibold leading-5 text-gray-800">Amount </h3>
          <div className="flex justify-center items-center w-full space-y-4 flex-col border-gray-200 border-b pb-4">
            <div className="flex justify-between w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Total Nights</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">{numberOfNights}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">Rent Per Night</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">R{numberOfNights}</p>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-base dark:text-white leading-4 text-gray-800">No of people</p>
              <p className="text-base dark:text-gray-300 leading-4 text-gray-600">9</p>
            </div>
          </div>
          <div className="flex justify-between items-center w-full mb-10">
            <p className="text-base dark:text-white font-semibold leading-4 text-gray-800">Total Amount</p>
            <p className="text-base dark:text-gray-300 font-semibold leading-4 text-gray-600">{totalAmount}</p>
          </div>
          {/* <div className="flex w-full justify-center items-center md:justify-start md:items-start">
            <button className="mt-6 md:mt-0 dark:border-white dark:hover:bg-gray-900 dark:bg-transparent dark:text-white py-5 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 border border-gray-800 font-medium w-96 2xl:w-full text-base font-medium leading-4 text-gray-800">Edit Details</button>
          </div> */}
          <div class="w-full flex justify-center items-center">
            <button class="hover:bg-black dark:bg-white dark:text-gray-800 dark:hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-800 py-5 w-96 md:w-full bg-gray-800 text-base font-medium leading-4 text-white">Pay Now</button>
          </div>
        </div>
      </div>
    </div>
  </div>

        </section>
    );
};

export default Summary;