import { useState, useMemo } from "react";
import { isEmailValid, isPostalCodeCA } from "../utils/validation";

const PROVINCES = [
  "Alberta",
  "British Columbia",
  "Manitoba",
  "New Brunswick",
  "Newfoundland and Labrador",
  "Nova Scotia",
  "Ontario",
  "Prince Edward Island",
  "Quebec",
  "Saskatchewan",
  "Northwest Territories",
  "Nunavut",
  "Yukon",
];

export default function Form({ onSubmit }) {
  const [form, setForm] = useState({
    email: "",
    fullName: "",
    address: "",
    city: "",
    province: "Ontario",
    postalCode: "",
  });

  const [touched, setTouched] = useState({});

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  }

  function handleBlur(e) {
    const { name } = e.target;
    setTouched((t) => ({ ...t, [name]: true }));
  }

  const errors = useMemo(() => {
    const e = {};
    if (!form.email) e.email = "Email is required.";
    else if (!isEmailValid(form.email)) e.email = "Please enter a valid email.";

    if (!form.fullName) e.fullName = "Full name is required.";
    if (!form.address) e.address = "Address is required.";
    if (!form.city) e.city = "City is required.";
    if (!form.province) e.province = "Province is required.";

    if (!form.postalCode) e.postalCode = "Postal code is required.";
    else if (!isPostalCodeCA(form.postalCode))
      e.postalCode = "Enter Canadian postal code like M5R 1M3.";

    return e;
  }, [form]);

  const canSubmit = Object.keys(errors).length === 0;

  function handleSubmit(e) {
    e.preventDefault();
    setTouched({
      email: true,
      fullName: true,
      address: true,
      city: true,
      province: true,
      postalCode: true,
    });
    if (!canSubmit) return;

    // Pass a clean snapshot up to App
    onSubmit({
      email: form.email.trim(),
      fullName: form.fullName.trim(),
      address: form.address.trim(),
      city: form.city.trim(),
      province: form.province,
      postalCode: form.postalCode.trim().toUpperCase(),
    });
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-grid">
        {/* Email */}
        <div>
          <label className="label" htmlFor="email">Email</label>
          <input
            id="email"
            className="input"
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="you@example.com"
            autoComplete="email"
          />
          {touched.email && errors.email && (
            <div className="error">{errors.email}</div>
          )}
        </div>

        {/* Full Name */}
        <div>
          <label className="label" htmlFor="fullName">Full Name</label>
          <input
            id="fullName"
            className="input"
            type="text"
            name="fullName"
            value={form.fullName}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="First Last"
            autoComplete="name"
          />
          {touched.fullName && errors.fullName && (
            <div className="error">{errors.fullName}</div>
          )}
        </div>

        {/* Address */}
        <div>
          <label className="label" htmlFor="address">Address</label>
          <input
            id="address"
            className="input"
            type="text"
            name="address"
            value={form.address}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="123 Main St"
            autoComplete="street-address"
          />
          <div className="help">Include unit or apt # if applicable.</div>
          {touched.address && errors.address && (
            <div className="error">{errors.address}</div>
          )}
        </div>

        {/* City */}
        <div>
          <label className="label" htmlFor="city">City</label>
          <input
            id="city"
            className="input"
            type="text"
            name="city"
            value={form.city}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="Toronto"
            autoComplete="address-level2"
          />
          {touched.city && errors.city && (
            <div className="error">{errors.city}</div>
          )}
        </div>

        {/* Province */}
        <div>
          <label className="label" htmlFor="province">Province</label>
          <select
            id="province"
            className="select"
            name="province"
            value={form.province}
            onChange={handleChange}
            onBlur={handleBlur}
          >
            {PROVINCES.map((p) => (
              <option key={p} value={p}>{p}</option>
            ))}
          </select>
          {touched.province && errors.province && (
            <div className="error">{errors.province}</div>
          )}
        </div>

        {/* Postal Code */}
        <div>
          <label className="label" htmlFor="postalCode">Postal Code</label>
          <input
            id="postalCode"
            className="input"
            type="text"
            name="postalCode"
            value={form.postalCode}
            onChange={handleChange}
            onBlur={handleBlur}
            placeholder="M5R 1M3"
            autoComplete="postal-code"
          />
          <div className="help">Format: A1A 1A1 (space optional)</div>
          {touched.postalCode && errors.postalCode && (
            <div className="error">{errors.postalCode}</div>
          )}
        </div>
      </div>

      <button className="button" type="submit" disabled={!canSubmit}>
        Submit
      </button>
    </form>
  );
}
