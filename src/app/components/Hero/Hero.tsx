'use client';
import React, { useState } from 'react';
import styles from './Hero.module.css';

interface FormData {
  name: string;
  date: string;
  time: string;
  persons: string;
}

export default function Hero() {
  const [form, setForm] = useState<FormData>({
    name: '',
    date: '',
    time: '',
    persons: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(form);
    // Add logic here for backend submission
  };

  return (
    <section className={styles.hero}>
      <div className={styles.heroHeader}>
        <img src="../img/logo.svg" className={styles.headerLogo} alt="Logo" />
        <div className={styles.heroNav}>
          <p className={styles.headerText}>Home</p>
          <p className={styles.headerText}>Menu</p>
          <p className={styles.headerText}>About us</p>
          <p className={styles.headerText}>Contact us</p>
        </div>
      </div>
      <div className={styles.heroMain}>
        <div className={styles.heroMainLeft}>
          <h4 className={styles.heroMainHeading}>Best place to find your food love</h4>
          <p className={styles.heroMainText}>
            Vel ullamcorper ultrices volutpat enim dignissim id purus. Urna quam massa urna<br />
            dolor enim dui lectus idristique dignissim pharetra
          </p>
          <div className={styles.heroButtons}>
            <img src="../img/main-menu-button.svg" className={styles.MainMenuButton} />
            <img src="../img/seasonal-menu-button.svg" className={styles.SeasonalMenuButton} />
          </div>
        </div>
        <div className={styles.heroMainRight}>
          <div className={styles.reservationBox}>
            <p className={styles.reservationLabel}>RESERVATION</p>
            <h2 className={styles.reservationTitle}>Book a table</h2>
            <form onSubmit={handleSubmit}>
              <label>Your name</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />

              <label>Select date</label>
              <input type="date" name="date" value={form.date} onChange={handleChange} required />

              <label>Select time</label>
              <input type="time" name="time" value={form.time} onChange={handleChange} required />

              <label>Number of persons</label>
              <select name="persons" value={form.persons} onChange={handleChange} required>
                <option value="">Number of persons</option>
                {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                  <option key={n} value={n}>
                    {n}
                  </option>
                ))}
              </select>
              <label> </label>
              <button type="submit">Book now</button>
            </form>
          </div>
        </div>
      </div>
      <div className={styles.heroLowerTextblock}>
        <div className={styles.heroLowerTextblockUpper}>
          <div className={styles.phoneContainer}>
            <p className={styles.heroLowerTextblockBook}>Book a table by phone</p>
            <p className={styles.heroLowerTextblockNumber}>(525) 847-0411</p>
          </div>
        </div>
        <p className={styles.heroLowerTextblockLower}>
          Vel ullamcorper ultrices volutpat enim dignissim id purusrnav
        </p>
      </div>
    </section>
  );
}