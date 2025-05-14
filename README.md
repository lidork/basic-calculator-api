# Basic Calculator API

A minimal Express + TypeScript REST API for basic arithmetic operations.

## Features

- Four endpoints:  
  - `GET /add?a=<number>&b=<number>`  
  - `GET /subtract?a=<number>&b=<number>`  
  - `GET /multiply?a=<number>&b=<number>`  
  - `GET /divide?a=<number>&b=<number>` (returns 400 on divide-by-zero)  
- Written in TypeScript  
- Zero external dependencies beyond `express`

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/<your-username>/basic-calculator-api.git
   cd basic-calculator-api
   ```

2. **Install dependencies**  
   ```bash
   npm install
   ```

3. **Run in development mode**  
   ```bash
   npm run dev
   ```  
   Server will be listening at `http://localhost:3000`.

4. **Build & run production**  
   ```bash
   npm run build
   npm start
   ```

## Usage

Open your browser or use `curl` / Postman to call:

```bash
curl "http://localhost:3000/add?a=5&b=3"        # → { "result": 8 }
curl "http://localhost:3000/divide?a=9&b=0"    # → 400 { "error": "Cannot divide by zero" }
```

## Project Structure

```
src/
├── index.ts           # Express app & route handlers
```

## TODO

- [ ] Enable strict type-checking in tsconfig.json 
- [ ] Extract calculator logic into a separate module for cleaner structure.
- [ ] Add input validation (ensure `a` and `b` are numbers, not NaN).
- [ ] Improve error handling to return consistent JSON errors.
- [ ] Write unit tests for all calculator functions.
- [ ] Add middleware for logging incoming requests.
- [ ] Create a simple frontend interface for testing the API (optional).
- [ ] Add TypeScript configuration improvements (e.g., separate `dist` folder).
- [ ] Use environment variables for configuration like port number.

## Future
- [ X ] Use this as a base for a ReactNative front-end
