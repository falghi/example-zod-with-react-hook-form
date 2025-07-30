# React Hook Form + Zod Example

A comprehensive example project demonstrating how to use [React Hook Form](https://react-hook-form.com/) with [Zod](https://zod.dev/) for form validation in a Next.js application.

## 🚀 Features

- **Form Validation**: Robust validation using Zod schemas
- **Notes Management**: Add, delete, and manage items with name, quantity, and price
- **TypeScript**: Full TypeScript support with inferred types from Zod schemas
- **Code Quality**: Prettier formatting and ESLint configuration

## 📁 Project Structure

```
src/
├── app/
│   ├── page.tsx              # Homepage with navigation
│   ├── notes/
│   │   ├── page.tsx          # Notes management page
│   │   ├── schema.ts         # Zod validation schemas
│   │   └── useNotes.ts       # Custom hook for notes functionality
│   └── utils/
│       └── number.ts         # Number parsing utilities
```

## 🛠️ Technologies Used

- [Next.js 15](https://nextjs.org/) - React framework
- [React Hook Form](https://react-hook-form.com/) - Form state management
- [Zod](https://zod.dev/) - Schema validation
- [TypeScript](https://www.typescriptlang.org/) - Type safety
- [Prettier](https://prettier.io/) - Code formatting

## 🏃‍♂️ Getting Started

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd example-zod-with-react-hook-form
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Formatting

```bash
# Format all files
npm run format

# Check formatting without changes
npm run format:check
```

### Linting

```bash
npm run lint
```

## 📚 Learning Resources

This project serves as a practical example for:

- **React Hook Form**: Form state management and validation
- **Zod**: Schema validation and type inference
- **Custom Hooks**: Reusable state management patterns
- **TypeScript**: Type safety with form data
- **Next.js App Router**: File-based routing and layouts

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Note**: This is an example project created for educational purposes. The notes page saves data to localStorage for demonstration - in a real application, you would implement proper backend authentication and data persistence.
