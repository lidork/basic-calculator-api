# Basic Calculator API

A minimal Express + TypeScript REST API for basic arithmetic operations.

## Features

- Four endpoints:  
  - `GET /add?a=<number>&b=<number>`  
  - `GET /subtract?a=<number>&b=<number>`  
  - `GET /multiply?a=<number>&b=<number>`  
  - `GET /divide?a=<number>&b=<number>` (returns 400 on divide-by-zero)  
- Written in TypeScript  
- Zero external dependencies beyond `express`, `jest` (tests), `morgan` (logs), `dotenv`

## Getting Started

1. **Clone the repo**  
   ```bash
   git clone https://github.com/<lidork>/basic-calculator-api.git
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
5. **Test with jest**
   ```bash
   npm test
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
├── controllers/
├──── index.ts           # Express app & route handlers
├── modules/
├──── __tests__/
├────── basicfunc.test.ts      #tests for calculation logic
├──── types.ts          # Data types
├── services/
├──── basicfuncService.ts     # Calculation logic
├── config.ts              #configuration implementation
├── index.ts            # Main calls  
.env.example            #example .env file
```
## AI Help
- Every TypeScript file was written entirely by me

- ChatGPT was used as a guide for new features and tackling with new TypeScript Concepts
- ChatGPT was used for writing config files correctly, with explanations for future reference
- ChatGPT was also used in the creation of this very README!


## TODO

- [x] Enable strict type-checking in tsconfig.json 
- [x] Add types, transfer to another module for cleaner structure.
- [x] Extract calculator logic into a separate module for cleaner structure.
- [x] Introduce more complex logic to calculator (pow, avg, sin, cos, tan, root, etc.)
- [x] Add input validation (ensure `a` and `b` are numbers, not NaN).
- [-] Improve error handling to return consistent JSON errors. -> not needed for the scope of this project, idea explored
- [x] Write unit tests for all calculator functions.
- [x] Add middleware for logging incoming requests.
- [x] Add timeout 
- [x] Use environment variables for configuration like port number.
- [ ] Introduce more complicated logic (optional, out of scope)
- [ ] Create a simple frontend interface for testing the API (see future).

## Future
- Use this as a base for a ReactNative frontend

## Thanks
- Ariel Kalif for helping with some bugs.
- Yonatan Ratner for helping with scope control.