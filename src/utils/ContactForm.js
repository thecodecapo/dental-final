import React, { useState, useEffect } from "react";
import toast from 'react-hot-toast';
import DateTimePickerComponent from "./DateTimePicker";
import Tooltip from '@mui/material/Tooltip';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDateTimeInvalid, setIsDateTimeInvalid] = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  useEffect(() => {
    const checkDateTimeValidity = () => {
      const input = document.querySelector('input[name="Date & Time"]');
      if (input) {
        setIsDateTimeInvalid(input.getAttribute('aria-invalid') === 'true');
      }
    };

    checkDateTimeValidity();

    const observer = new MutationObserver(checkDateTimeValidity);
    observer.observe(document.body, {
      attributes: true,
      attributeFilter: ['aria-invalid'],
      subtree: true
    });

    return () => observer.disconnect();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    const formData = new FormData(event.target);

    formData.append("access_key", "9d52904a-1f96-4339-bbb6-24d79cade563");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Booking Submitted Successfully!');
      event.target.reset();
      setIsSubmitting(false);
    } else {
      console.log("Error", data);
      toast.error("Failed! Please try again");
      setIsSubmitting(false);
    }
  };

  return (
    <div className="form w-full">
      <div className="form__outer-wrapper w-full">
        <form className="form__container w-full" onSubmit={onSubmit}>
          <div className="field__container">
            <input className="field" type="text" name="name" required />
            <span className="field__label">Name</span>
          </div>
          <div className="field__container">
            <input className="field" type="text" name="number" required />
            <span className="field__label">Mobile</span>
          </div>
          <div className="field__container">
            <input className="field" type="email" name="email" required />
            <span className="field__label">Email</span>
          </div>
          <div className="">
            <DateTimePickerComponent />
          </div>
          <Tooltip
            title={isDateTimeInvalid ? "Select valid date & time" : ""}
            arrow
            placement={isMobile ? "right" : "top"}
            disableInteractive
            PopperProps={{
              style: {
                pointerEvents: 'none',
              },
            }}
          >
            <span>
              <input
                className="form__submit primary__btn"
                type="submit"
                value={isSubmitting ? "Submitting..." : "Book"}
                disabled={isSubmitting || isDateTimeInvalid}
              />
            </span>
          </Tooltip>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
