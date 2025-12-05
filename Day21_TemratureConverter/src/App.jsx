import { useState } from "react";

export default function TemperatureConverter() {
  const [celsius, setCelsius] = useState("");
  const [fahrenheit, setFahrenheit] = useState("");

  const handleCelsiusChange = (e) => {
    const c = e.target.value;
    setCelsius(c);

    if (c === "" || isNaN(c)) {
      setFahrenheit("");
      return;
    }

    const f = (parseFloat(c) * 9) / 5 + 32;
    setFahrenheit(f.toFixed(2));
  };

  const handleFahrenheitChange = (e) => {
    const f = e.target.value;
    setFahrenheit(f);

    if (f === "" || isNaN(f)) {
      setCelsius("");
      return;
    }

    const c = ((parseFloat(f) - 32) * 5) / 9;
    setCelsius(c.toFixed(2));
  };

  return (
    <div style={styles.container} className="bg-black">
      <h2>🌡 Temperature Converter</h2>

      <div style={styles.inputGroup}>
        <label>Celsius (°C)</label>
        <input
          type="text"
          value={celsius}
          onChange={handleCelsiusChange}
          style={styles.input}
        />
      </div>

      <div style={styles.inputGroup}>
        <label>Fahrenheit (°F)</label>
        <input
          type="text"
          value={fahrenheit}
          onChange={handleFahrenheitChange}
          style={styles.input}
        />
      </div>
    </div>
  );
}

const styles = {
  container: {
    width: "300px",
    margin: "50px auto",
    padding: "20px",
    borderRadius: "12px",
    background: "#f5f5f5",
    boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
    textAlign: "center",
  },
  inputGroup: {
    marginBottom: "15px",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "10px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    fontSize: "16px",
  },
};
