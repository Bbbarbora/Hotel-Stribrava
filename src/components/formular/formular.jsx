import React, { useState } from 'react';

export default function BookingForm() {
  // Stavové proměnné formuláře
  const [checkIn, setCheckIn] = useState('');
  const [checkOut, setCheckOut] = useState('');
  const [guests, setGuests] = useState(1);
  const [mealPlan, setMealPlan] = useState('none');
  const [extraBed, setExtraBed] = useState(false);
  const [pet, setPet] = useState(false);

  // Kostra odeslání
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: přidat logiku odeslání
    console.log('Form submitted');
  }

  return (
    <div className="container booking-form my-8">
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-4">
          <label htmlFor="checkIn" className="form-label">Datum příjezdu</label>
          <input
            type="date"
            id="checkIn"
            className="form-control"
            value={checkIn}
            onChange={e => setCheckIn(e.target.value)}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="checkOut" className="form-label">Datum odjezdu</label>
          <input
            type="date"
            id="checkOut"
            className="form-control"
            value={checkOut}
            onChange={e => setCheckOut(e.target.value)}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="guests" className="form-label">Počet osob</label>
          <input
            type="number"
            id="guests"
            min="1"
            className="form-control"
            value={guests}
            onChange={e => setGuests(Number(e.target.value))}
          />
        </div>

        <div className="form-group mb-4">
          <label htmlFor="mealPlan" className="form-label">Stravování</label>
          <select
            id="mealPlan"
            className="form-control"
            value={mealPlan}
            onChange={e => setMealPlan(e.target.value)}
          >
            <option value="none">Bez stravy</option>
            <option value="breakfast">Snídaně</option>
            <option value="halfBoard">Polopenze</option>
            <option value="fullBoard">Plná penze</option>
          </select>
        </div>

        <div className="form-check mb-4">
          <input
            type="checkbox"
            id="extraBed"
            className="form-check-input"
            checked={extraBed}
            onChange={e => setExtraBed(e.target.checked)}
          />
          <label htmlFor="extraBed" className="form-check-label">
            Přistýlka pro dítě
          </label>
        </div>

        <div className="form-check mb-4">
          <input
            type="checkbox"
            id="pet"
            className="form-check-input"
            checked={pet}
            onChange={e => setPet(e.target.checked)}
          />
          <label htmlFor="pet" className="form-check-label">
            Domácí mazlíček
          </label>
        </div>

        <div className="mb-4">
          <span className="fw-bold">Celková cena: </span>
          <span>0 Kč</span>
        </div>

        <button
          type="submit"
          className="btn btn-primary btn-block"
        >
          Odeslat poptávku
        </button>
      </form>
    </div>
  );
}
