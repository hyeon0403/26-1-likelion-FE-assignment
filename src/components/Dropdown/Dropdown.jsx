import "./Dropdown.css";

function Dropdown({ options, value, onChange }) {
  return (
    <select className="dropdown" value={value} onChange={onChange}>
      {options?.map((opt, i) => (
        <option key={i}>{opt}</option>
      ))}
    </select>
  );
}

export default Dropdown;