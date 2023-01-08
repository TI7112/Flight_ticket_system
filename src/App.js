import {Routes , Route} from 'react-router-dom'
import Booking from './pages/Booking';
import BookingHistory from './pages/BookingHistory';
import CancelBooking from './pages/CancelBooking';
import Homepage from './pages/Homepage';

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Homepage />} />
      <Route path='/online-booking' element={<Booking />} />
      <Route path='/booking-history' element={<BookingHistory />} />
      <Route path='/cancel-booking' element={<CancelBooking />} />
    </Routes>
    </>
  );
}

export default App;
