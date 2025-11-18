# NBI Clearance Frontend POC

This is a proof-of-concept (POC) for the National Bureau of Investigation (NBI) Clearance Processing System website. This project replicates the design and functionality of the NBI online clearance application portal.

## Features

- **Responsive Design**: Works seamlessly across desktop, tablet, and mobile devices
- **3-Slide Carousel**: Auto-advancing hero section with fade transitions
- **Enhanced Services**: Three feature cards with hover effects
- **Interactive Elements**:
  - Hover effects on cards (rise animation)
  - Hover effects on footer links (slide right)
  - Smooth transitions throughout
- **Official Branding**: Includes NBI logo and official color scheme

## Tech Stack

- **Framework**: Next.js 16.0.3 (App Router)
- **Language**: TypeScript 5.9.3
- **Styling**: Tailwind CSS 3.4.18
- **UI**: React 19.2.0
- **Icons**: Font Awesome 6.4.0

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js**: Version 18.0.0 or higher ([Download here](https://nodejs.org/))
- **npm**: Version 9.0.0 or higher (comes with Node.js)
- **Git**: For cloning the repository ([Download here](https://git-scm.com/))

To check if you have these installed, run:

```bash
node --version
npm --version
git --version
```

## Setup Instructions

Follow these steps to set up and run the project on your local machine:

### 1. Clone the Repository

```bash
git clone https://github.com/NatoKim-WSG/frontend_poc.git
cd frontend_poc
```

Or if you're using the directory name with spaces:

```bash
cd "frontend poc"
```

### 2. Install Dependencies

Install all required packages:

```bash
npm install
```

This will install:
- Next.js
- React
- TypeScript
- Tailwind CSS
- All necessary dev dependencies

### 3. Run the Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at:
```
http://localhost:3000
```

### 4. Build for Production (Optional)

To create an optimized production build:

```bash
npm run build
```

Then start the production server:

```bash
npm start
```

## Project Structure

```
frontend poc/
├── app/
│   ├── layout.tsx          # Root layout with Font Awesome
│   ├── page.tsx            # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Hero.tsx            # Hero carousel section
│   ├── Features.tsx        # Enhanced services cards
│   └── Footer.tsx          # Footer with links
├── public/
│   └── nbilogo.jpg         # NBI official logo
├── package.json            # Dependencies and scripts
├── tsconfig.json           # TypeScript configuration
├── tailwind.config.ts      # Tailwind CSS configuration
├── postcss.config.js       # PostCSS configuration
└── README.md               # This file
```

## Available Scripts

- `npm run dev` - Starts the development server on port 3000
- `npm run build` - Creates an optimized production build
- `npm start` - Runs the production server
- `npm run lint` - Runs ESLint to check for code issues

## Configuration Files

### package.json
Contains all project dependencies and scripts. Key dependencies:
- next: ^16.0.3
- react: ^19.2.0
- react-dom: ^19.2.0
- tailwindcss: ^3.4.18
- typescript: ^5.9.3

### tailwind.config.ts
Tailwind CSS configuration with custom colors and theme extensions.

### tsconfig.json
TypeScript configuration for strict type checking and path aliases.

## Features Breakdown

### 1. Header Component
- Government branding (Republic of the Philippines, DOJ)
- NBI logo with official seal
- Desktop navigation menu
- Contact information (phone, email)
- Sticky positioning for better UX

### 2. Hero Carousel
- 3 slides with auto-advance (5 seconds)
- Smooth fade transitions (1000ms)
- Clickable navigation dots
- Responsive design
- Content:
  - Slide 1: Official NBI Service
  - Slide 2: Nationwide Coverage
  - Slide 3: Services for OFWs

### 3. Enhanced Services
- 3 feature cards:
  - Online Appointment
  - Door-to-Door Delivery
  - E-Wallet Payments
- Overlaying circular icons
- Hover effects (card rises)
- NEW badges
- Action buttons

### 4. Footer
- 4-column layout (Quick Links, Services, Resources, Contact)
- Yellow section headings with underlines
- Hover effects on links (slide right)
- Social media icons
- NBI seal and description
- Copyright notice

## Customization

### Colors
The project uses the official NBI color scheme:
- Navy Blue: `#003B7A`
- Dark Navy: `#0B1F3F`
- Red: `#DC2626`
- Yellow: `#FCD34D`

### Fonts
The project uses system fonts with Font Awesome icons loaded from CDN.

## Troubleshooting

### Port Already in Use
If port 3000 is already in use, you can specify a different port:

```bash
npm run dev -- -p 3001
```

### Build Errors
If you encounter build errors, try:

1. Delete node_modules and reinstall:
```bash
rmdir /s /q node_modules
npm install
```

2. Clear Next.js cache:
```bash
rmdir /s /q .next
npm run dev
```

### TypeScript Errors
Ensure you're using Node.js version 18 or higher and TypeScript 5.x.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

This is a proof-of-concept project. For contributions or suggestions, please contact the repository owner.

## License

This project is for demonstration purposes only. All NBI branding and official information are property of the National Bureau of Investigation, Philippines.

## Contact

For questions or support:
- Email: info@nbi.gov.ph
- Phone: (02) 8525-9406 / (02) 8523-8231

---

**Note**: This is a frontend POC and does not include backend functionality or actual NBI clearance processing capabilities.
