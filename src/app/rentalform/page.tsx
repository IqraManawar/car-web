

"use client"
import React, { useState } from 'react';

const RentalForm = () => {
  const [billingInfo, setBillingInfo] = useState({
    name: '',
    address: '',
    phoneNumber: '',
    townCity: '',
  });

  const [rentalInfo, setRentalInfo] = useState({
    pickUpLocation: '',
    pickUpDate: '',
    pickUpTime: '',
    dropOffLocation: '',
    dropOffDate: '',
    dropOffTime: '',
  });

  const [paymentMethod, setPaymentMethod] = useState({
    cardNumber: '',
    cardHolder: '',
    expirationDate: '',
    cvc: '',
  });

  const [confirmation, setConfirmation] = useState({
    agreeMarketing: false,
    agreeTerms: false,
  });

  const handleChangeBillingInfo = (e: any) => {
    setBillingInfo({ ...billingInfo, [e.target.name]: e.target.value });
  };

  const handleChangeRentalInfo = (e: any) => {
    setRentalInfo({ ...rentalInfo, [e.target.name]: e.target.value });
  };

  const handleChangePaymentMethod = (e: any) => {
    setPaymentMethod({ ...paymentMethod, [e.target.name]: e.target.value });
  };

  const handleChangeConfirmation = (e: any) => {
    setConfirmation({ ...confirmation, [e.target.name]: e.target.checked });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Submit form data to backend
    console.log('Billing Info:', billingInfo);
    console.log('Rental Info:', rentalInfo);
    console.log('Payment Method:', paymentMethod);
    console.log('Confirmation:', confirmation);
  };

  return (
    <div className="container">
      <h1 className="text-center mb-4">Rental Form</h1>
      <form onSubmit={handleSubmit}>
        <div className="row mb-3">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">Billing Info</div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="name">Name</label>
                  <input
                    type="text"
                    className="form-control"
                    id="name"
                    name="name"
                    value={billingInfo.name}
                    onChange={handleChangeBillingInfo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    className="form-control"
                    id="address"
                    name="address"
                    value={billingInfo.address}
                    onChange={handleChangeBillingInfo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="phoneNumber">Phone Number</label>
                  <input
                    type="tel"
                    className="form-control"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={billingInfo.phoneNumber}
                    onChange={handleChangeBillingInfo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="townCity">Town/City</label>
                  <input
                    type="text"
                    className="form-control"
                    id="townCity"
                    name="townCity"
                    value={billingInfo.townCity}
                    onChange={handleChangeBillingInfo}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">Rental Info</div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="pickUpLocation">Pick-Up Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="pickUpLocation"
                    name="pickUpLocation"
                    value={rentalInfo.pickUpLocation}
                    onChange={handleChangeRentalInfo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pickUpDate">Pick-Up Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="pickUpDate"
                    name="pickUpDate"
                    value={rentalInfo.pickUpDate}
                    onChange={handleChangeRentalInfo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="pickUpTime">Pick-Up Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="pickUpTime"
                    name="pickUpTime"
                    value={rentalInfo.pickUpTime}
                    onChange={handleChangeRentalInfo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dropOffLocation">Drop-Off Location</label>
                  <input
                    type="text"
                    className="form-control"
                    id="dropOffLocation"
                    name="dropOffLocation"
                    value={rentalInfo.dropOffLocation}
                    onChange={handleChangeRentalInfo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dropOffDate">Drop-Off Date</label>
                  <input
                    type="date"
                    className="form-control"
                    id="dropOffDate"
                    name="dropOffDate"
                    value={rentalInfo.dropOffDate}
                    onChange={handleChangeRentalInfo}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="dropOffTime">Drop-Off Time</label>
                  <input
                    type="time"
                    className="form-control"
                    id="dropOffTime"
                    name="dropOffTime"
                    value={rentalInfo.dropOffTime}
                    onChange={handleChangeRentalInfo}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row mb-3">
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">Payment Method</div>
              <div className="card-body">
                <div className="form-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardNumber"
                    name="cardNumber"
                    value={paymentMethod.cardNumber}
                    onChange={handleChangePaymentMethod}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cardHolder">Card Holder</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cardHolder"
                    name="cardHolder"
                    value={paymentMethod.cardHolder}
                    onChange={handleChangePaymentMethod}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="expirationDate">Expiration Date</label>
                  <input
                    type="month"
                    className="form-control"
                    id="expirationDate"
                    name="expirationDate"
                    value={paymentMethod.expirationDate}
                    onChange={handleChangePaymentMethod}
                    required
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="cvc">CVC</label>
                  <input
                    type="text"
                    className="form-control"
                    id="cvc"
                    name="cvc"
                    value={paymentMethod.cvc}
                    onChange={handleChangePaymentMethod}
                    required
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12">
            <div className="card">
              <div className="card-header">Confirmation</div>
              <div className="card-body">
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreeMarketing"
                    name="agreeMarketing"
                    checked={confirmation.agreeMarketing}
                    onChange={handleChangeConfirmation}
                  />
                  <label className="form-check-label" htmlFor="agreeMarketing">
                    Agree to receive marketing materials
                  </label>
                </div>
                <div className="form-group form-check">
                  <input
                    type="checkbox"
                    className="form-check-input"
                    id="agreeTerms"
                    name="agreeTerms"
                    checked={confirmation.agreeTerms}
                    onChange={handleChangeConfirmation}
                    required
                  />
                  <label className="form-check-label" htmlFor="agreeTerms">
                    Agree to terms and conditions
                  </label>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default RentalForm;


