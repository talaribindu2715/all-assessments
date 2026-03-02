import { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");

  const submitForm = () => {
    alert(`Thank you ${name}, we will contact you ☕`);
  };

  return (
    <div className="page">
      <h1>Contact Us</h1>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" />
      <textarea placeholder="Message"></textarea>
      <button onClick={submitForm}>Send</button>
      <img src="https://images.unsplash.com/photo-1495474472287-4d71bcdd2085" />
    </div>
  );
};

export default Contact;
