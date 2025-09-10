# Trek Bag

Trek Bag is a simple packing list web application built with Next.js and TypeScript. It helps you keep track of items to pack for your trips, allowing you to add, filter, and mark items as packed.

## Features

- Add new items to your packing list
- Mark items as packed or unpacked
- Filter and sort items
- View total and completed item counts
- Responsive and clean UI

## Tech Stack

- [Next.js](https://nextjs.org/)
- [React](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/) (if used in `globals.css`)
- Zustand for state management

## Getting Started

### Prerequisites

- Node.js (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```powershell
   git clone https://github.com/your-username/trek-bag.git
   cd trek-bag
   ```

2. Install dependencies:
   ```powershell
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```powershell
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the app.

## Project Structure

```
app/            # Next.js app directory (pages, layout, styles)
components/     # Reusable React components
hooks/          # Custom React hooks
lib/            # Utility functions and constants
public/         # Static assets (SVGs, images)
stores/         # Zustand stores for state management
types/          # TypeScript type definitions
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

---

Made with ❤️ using Next.js
