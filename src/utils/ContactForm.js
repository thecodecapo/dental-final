import React from "react";
import toast from 'react-hot-toast';
import DateTimePickerComponent from "./DateTimePicker";


function ContactForm() {

  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "9d52904a-1f96-4339-bbb6-24d79cade563");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      toast.success('Booking Submitted Successfully!')
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };

  return (
    <div className="form w-full">
      <div className="form__outer-wrapper w-full">
        
        <form className="form__container w-full" onSubmit={onSubmit}>
          <div className="field__container">
            <input className="field" type="text" name="name" required={"required"}/>
            <span className="field__label">Name</span>
          </div>
          <div className="field__container">
            <input className="field" type="text" name="number" required={"required"}/>
            <span className="field__label">Mobile</span>
          </div>

          <div className="field__container">
            <input className="field" type="email" name="email" required={"required"} />
            <span className="field__label">Email</span>
          </div>
          <div className="">
           <DateTimePickerComponent />
          </div>
          <input className="form__submit primary__btn" type="submit" value={"Book"} />
          </form>
     
      </div>
    </div>
  );
}

export default ContactForm;
