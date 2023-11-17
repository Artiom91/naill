import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import ru from "date-fns/locale/ru";
import { format, addDays } from "date-fns";
import backgroundImage from "../img/back.jpg";

const TimeSelect = () => {
  const [formData, setFormData] = useState({
    service: "",
    name: "",
    phone: "",
    email: "",
    terms: false,
  });

  const timeOptions = ["09:00", "14:00", "16:00", "18:00", "11:00"];

  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [showTimeSelect, setShowTimeSelect] = useState(false);

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };

  const handleNextButtonClick = () => {
    setShowTimeSelect(true);
  };

  const handleTimeChange = (time) => {
    setSelectedTime(time);
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const formattedDate = selectedDate
      ? format(selectedDate, "dd.MM.yyyy")
      : "";
    const formattedTime = selectedTime || "";
    const formattedTimestamp = `${formattedDate} ${formattedTime}`;

    const formDataWithTimestamp = {
      ...formData,
      timestamp: formattedTimestamp,
      service:
        formData.service === "35"
          ? "Acoperire ojă semipermanentă - 350 Lei"
          : "Acoperire Gel - 400 Lei",
    };

    console.log("Form Data:", formDataWithTimestamp);
  };

  const minDate = new Date();
  const maxDate = addDays(minDate, 30);

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
  };

  const calendarStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  return (
    <div style={backgroundStyle}>
      <div className="flex justify-center items-center h-screen">
        <div
          className="w-full max-w-lg bg-white p-8 rounded shadow-md"
          style={calendarStyle}
        >
          {!showTimeSelect && (
            <div className="mb-4">
              <label
                htmlFor="datepicker"
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Выберите дату
              </label>
              <DatePicker
                selected={selectedDate}
                onChange={handleDateChange}
                dateFormat="MMMM d, yyyy"
                locale={ru}
                minDate={minDate}
                maxDate={maxDate}
                inline
              />
              {!selectedDate && (
                <small className="text-red-500">Obligatoriu de setat</small>
              )}
              {selectedDate && (
                <button
                  onClick={handleNextButtonClick}
                  className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800 mt-2"
                >
                  Далее
                </button>
              )}
            </div>
          )}

          {showTimeSelect && (
            <div>
              <div className="mb-4">
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Выберите время
                </label>
                <div className="flex flex-wrap">
                  {timeOptions.map((time) => (
                    <div key={time} className="flex items-center mb-2 mr-4">
                      <input
                        type="radio"
                        id={time}
                        name="selectedTime"
                        value={time}
                        checked={selectedTime === time}
                        onChange={() => handleTimeChange(time)}
                        className="form-radio h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                      />
                      <label
                        htmlFor={time}
                        className="ml-2 text-sm text-gray-700"
                      >
                        {time}
                      </label>
                    </div>
                  ))}
                  {!selectedTime && (
                    <small className="text-red-500">Obligatoriu de setat</small>
                  )}
                </div>
              </div>

              <div className="mb-4">
                <label
                  htmlFor="inputservice"
                  className="block text-sm font-medium text-gray-700"
                >
                  Serviciul Dorit
                </label>
                <div className="mt-1">
                  <select
                    id="inputservice"
                    className="form-select block w-full py-2 px-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring focus:border-blue-300 transition duration-150 ease-in-out"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                  >
                    <option value="35">
                      Acoperire ojă semipermanentă - 350 Lei
                    </option>
                    <option value="37">Acoperire Gel - 400 Lei</option>
                  </select>
                  <small className="text-red-500">Obligatoriu de setat</small>
                </div>
              </div>

              <form onSubmit={handleSubmit}>
                <div className="mb-4">
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Нume, Prenume
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="form-input mt-1 block w-full rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    value={formData.name}
                    name="name"
                    placeholder="Nume Prenume"
                    required
                    onChange={handleChange}
                  />
                  <small className="text-red-500">Obligatoriu de setat</small>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Numarul De Telefon
                  </label>
                  <input
                    type="text"
                    id="phone"
                    className="form-input mt-1 block w-full rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    name="phone"
                    value={formData.phone}
                    placeholder="061 234 567"
                    required
                    onChange={handleChange}
                  />
                  <small className="text-red-500">Obligatoriu de setat</small>
                </div>

                <div className="mb-4">
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="form-input mt-1 block w-full rounded-md shadow-sm transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                    name="email"
                    value={formData.email}
                    placeholder="Introduceți emailul"
                    required
                    onChange={handleChange}
                  />
                  <small className="text-red-500">Obligatoriu de setat</small>
                </div>

                <div className="mb-4 flex items-center">
                  <input
                    className="form-checkbox h-4 w-4 text-blue-600 transition duration-150 ease-in-out"
                    type="checkbox"
                    id="gridCheck1"
                    name="terms"
                    value="0"
                    checked={formData.terms}
                    onChange={handleChange}
                  />
                  <label className="ml-2 block text-sm leading-5 text-gray-900">
                    Sund de acord cu{" "}
                    <a
                      href=""
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      className="text-blue-600"
                    >
                      Termeni si conditii
                    </a>
                  </label>
                  <small className="text-red-500 ml-1">
                    Obligatoriu de setat
                  </small>
                </div>

                <div className="form-group text-center">
                  <button
                    type="submit"
                    name="do_programming"
                    className="bg-blue-500 text-white py-2 px-4 rounded focus:outline-none focus:shadow-outline-blue active:bg-blue-800"
                  >
                    Programează-te
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TimeSelect;
