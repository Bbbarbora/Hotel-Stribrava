import {useState} from 'react';

export const BookingForm = () => {
    // Stavové proměnné formuláře
    const [checkIn, setCheckIn] = useState('');
    const [checkOut, setCheckOut] = useState('');
    const [guests, setGuests] = useState(1);
    const [mealPlan, setMealPlan] = useState('none');
    const [extraBed, setExtraBed] = useState(false);
    const [pet, setPet] = useState(false);
    const [invalidEnter, setInvalidEnter] = useState(false);
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState(1);
  
    // Kostra odeslání
    function handleSubmit(e) {
      e.preventDefault();
      // TODO: přidat logiku odeslání
      console.log('Form submitted');
    } 

return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Od:
        <input
          type="date"
          id="checkIn"
          value={checkIn}
          onChange={(e) => setCheckIn(e.target.value)}
          required
        />
        </label>
      </div>

      <div>
        <label>Do:
        <input
          type="date"
          id="checkOut"
          value={checkOut}
          onChange={(e) => setCheckOut(e.target.value)}
          required
        />
        </label>
      </div>

      <div>
        <label>Počet osob:
        <input
          type="number"
          id="guests"
          min="1"
          value={guests}
          onChange={(e) => setGuests(Number(e.target.value))}
          required
        />
        </label>
      </div>

      <div>
        <label>Stravování:
        <select
          id="mealPlan"
          value={mealPlan}
          onChange={(e) => setMealPlan(e.target.value)}
        >
          <option value="none">Žádný</option>
          <option value="breakfast">Snídaně</option>
          <option value="halfBoard">Polopenze</option>
          <option value="fullBoard">Plná penze</option>
        </select>
        </label>
      </div>

      <div>
        <label>Přistýlka pro dítě:
          <input
            type="checkbox"
            id="extraBed"
            checked={extraBed}
            onChange={(e) => setExtraBed(e.target.checked)}
          />
        </label>
      </div>

      <div>
        <label>Domácí mazlíček:
          <input
            type="checkbox"
            id="pet"
            checked={pet}
            onChange={(e) => setPet(e.target.checked)}
          />
        </label>
      </div>

      <div>
        <label>Bezbariérový přístup:
          <input
            type="checkbox"
            id="invalidEnter"
            checked={invalidEnter}
            onChange={(e) => setInvalidEnter(e.target.checked)}
          />
        </label>
      </div>

      <div>
        <label>Email:
        <input
          type="text"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        </label>
        </div>

        <div>
        <label>Telefon:
        <input
          type="tel"
          id="phone"
            placeholder="+420 123 456 789"
            pattern="^\+?[0-9\s\-]{7,15}$"
          required
        />
        </label>
        </div>

      <button type="submit">Odeslat poptávku</button>
    </form>
  );
};
