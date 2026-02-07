# Positivus – Digital Marketing Website

A modern, responsive digital marketing website built using **React** and **Tailwind CSS**, based on the **Positivus Figma design**.  
The project focuses on clean UI, reusable components, and pixel-perfect responsiveness for both **desktop and mobile**.

---

## 🚀 Tech Stack

- **React (Vite)**
- **Tailwind CSS**
- **JavaScript (ES6+)**
- **Figma (UI Reference)**

---

## ✨ Features

- Fully responsive (Desktop & Mobile)
- Reusable UI components
- Clean, modern design
- Testimonial slider (custom logic, no library)
- Service cards & accordion sections
- Accessible & scalable structure

---

## 📁 Project Structure

src/
├── assets/ # Images, icons, SVGs
├── components/ # Reusable UI components
│ ├── SectionTitle.jsx
│ ├── ServiceCard.jsx
│ ├── TestimonialCard.jsx
│ └── ...
├── data/ # Static data (services, testimonials)
│ ├── services.js
│ └── testimonials.js
├── pages/ # Page sections
│ ├── Services.jsx
│ ├── Testimonials.jsx
│ └── ...
├── App.jsx
└── main.jsx


---

## 🧩 Reusable Components

### `SectionTitle`
Used across:
- Services
- Working Process
- Testimonials

Supports:
- Desktop: title on left, description on right
- Mobile: title centered, description below

---

### `ServiceCard`
- Image + title layout
- Hover effects
- Figma-accurate spacing

---

### `TestimonialCard`
- Speech bubble design
- Name & role outside the card
- Active/inactive state styling
- Mobile: single card
- Desktop: three cards

---

## 📱 Responsive Behavior

| Section        | Mobile                         | Desktop                        |
|---------------|--------------------------------|--------------------------------|
| Section Title | Centered                       | Left + Right layout            |
| Testimonials  | 1 card                         | 3 cards (center active)        |
| Navigation    | Stacked                        | Horizontal                     |
| Footer        | Column layout                  | Grid layout                    |

---

## 🛠️ Installation & Setup

```bash
# Clone repository
git clone https://github.com/your-username/positivus.git

# Navigate to project
cd positivus

# Install dependencies
npm install

# Run development server
npm run dev
