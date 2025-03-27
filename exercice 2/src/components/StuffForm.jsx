import { useState } from "react";

export default function StuffForm({ onAddStuff }) {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if(!name || !price) {
      alert("Please fill in both fields");
      return;
    }

    const newStuff = {
      name: name.trim(),
      price: parseFloat(price)
    };
    
    console.log("Submitting:", newStuff);  // Debug log
    onAddStuff(newStuff);
    setName("");
    setPrice("");
  };

  return (
    <form onSubmit={handleSubmit} className="stuff-form">
      <p>Stuff name</p>
      <input 
        type="text" 
        placeholder="Banana" 
        value={name} 
        onChange={(e) => setName(e.target.value)}
      />

      <p>Stuff price</p>
      <input 
        type="number" 
        placeholder="15" 
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        step="0.01"
        min="0"
      />

      <button type="submit">Add Stuff</button>
    </form>
  );
}