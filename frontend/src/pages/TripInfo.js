import React from 'react';
import Map from '../components/Map/Map';

export default function TripInfo() {
  const location = {
      address: 'Cod Mountain Fish Co.',
      lat: 36.96578633181195,
      lng: -122.00103392460099,
    }

  return (
    <div className='ml-10 space-y-4 mb-10'>
      <div className='grid grid-cols-2 gap-2 w-full mt-10'>
        <div className='space-y-4'>
          <h3 className='font-bold'>Directions From Highway 17:</h3>
          <ol className="list-decimal ml-10">
            <li>Take the exit onto CA-1 S toward Watsonville/Monterey.</li>
            <li>Continue on CA-1 S for approximately 2 miles.</li>
            <li>Take the Soquel Ave exit.</li>
            <li>Keep right at the fork and merge onto Soquel Ave.</li>
            <li>Continue on Soquel Ave for approximately 0.3 miles.</li>
            <li>Turn left onto Seventh Ave.</li>
            <li>Follow Seventh Ave for approximately 0.4 miles.</li>
            <li>Turn right onto Eaton St.</li>
            <li>Continue on Eaton St for approximately 0.2 miles.</li>
            <li>Turn left onto Lake Ave.</li>
            <li>Take the first right into Santa Cruz Harbor.</li>
            <li>Park at a metered spot and purchase a parking ticket from the pay kiosk.</li>
            <li>Proceed to "S" dock.</li>
          </ol>
          <h3 className='font-bold'>Directions From Highway 1 Heading North:</h3>
          <ol className="list-decimal ml-10">
            <li>Continue on CA-1 N.</li>
            <li>Take the Soquel Dr exit toward Porter St.</li>
            <li>Use the left two lanes to turn left onto Soquel Dr.</li>
            <li>Continue on Soquel Dr for approximately 0.8 miles.</li>
            <li>Turn right onto Seventh Ave.</li>
            <li>Follow Seventh Ave for approximately 0.4 miles.</li>
            <li>Turn right onto Eaton St.</li>
            <li>Continue on Eaton St for approximately 0.2 miles.</li>
            <li>Turn left onto Lake Ave.</li>
            <li>Take the first right into Santa Cruz Harbor.</li>
            <li>Park at a metered spot and purchase a parking ticket from the pay kiosk.</li>
            <li>Proceed to "S" dock.</li>
          </ol>
        </div>
        <Map location={location} zoomLevel={17}/>
      </div>
      <h1 className='font-bold'>Parking:</h1>
      <p> Metered parking is available near the harbor. Be sure to purchase a parking ticket from a kiosk 
        located in the parking lot. Please allow enough time for parking and make your way to "S" Dock promptly.</p>
      <h1 className='font-bold'>What to Bring:</h1>
      <ul className='list-disc ml-10'>
        <li>Comfortable clothing suitable for the weather conditions (layers are recommended)</li>
        <li>Sunscreen, hat, and sunglasses</li>
        <li>Food and beverages for your trip (alcohol is allowed for guests aged 21 or older)</li>
        <li>Cash for deckhand tip (show your appreciation for their assistance)</li>
        <li>A cooler to transport your catch (if you wish to keep your fish)</li>
      </ul>
      <h1 className='font-bold'>Meeting Point:</h1>
      <p>Please arrive at least 30 minutes prior to your scheduled departure time at "S" Dock in the 
        Santa Cruz Harbor. Look for our boat and crew members to check-in and begin your adventure.</p>
      <h1 className='font-bold'>Fishing License</h1>
      <p>You must obtain a CA sport fishing license in order to fish. <a className="underline" href='https://wildlife.ca.gov/Licensing/Fishing'>Click here</a> for information on how to obtain
      and to purchase a fishing license.</p>
      {/* FAQs ?*/}
      <h1 className='font-bold'>Cancellation Policy:</h1>
      <p> If you need to cancel or reschedule your trip, please refer to our Terms and Conditions for the cancellation policy and any 
        applicable fees. We understand that unforeseen circumstances may arise, and we will do our best to accommodate changes whenever possible.</p>
    </div>
  )
}
