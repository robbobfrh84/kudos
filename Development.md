# Development

Everything setup and installed? (No? Jump to "Frontend & Backend Installs")
- Open 3 seperate Terminal tabs or windows & `cd` to into folders: 
  - frontend: `npm run dev`
  - backend: `node index.js` (or `npm run dev` for hot reload)
  - backend: `npx prisma studio` (DB table views, or open pgAdmin)

To generate a migration (or update if changes are made):
- `npx prisma migrate dev --name init`

### Seeding (😱 NOTE! It's gonna wipe all your data!)
- `node prisma/tests_seed.js`
- `node prisma/boards_seed.js`

### Testing API Urls
`/boards`:
- `http://localhost:3001/boards/1` - Where 1 is the id of a created board.
- `http://localhost:3001/boards` - Gets all boards.

`/cards`:
- `http://localhost:3001/cards/1` - Gets all cards, where 1 is id of a created board.

`/tests`:
- `http://localhost:3001/tests`
- `http://localhost:3001/tests/test`


# Installs

### Frontend & Backend Installs:
- `cd frontend` > `npm install` > `npm run dev`
- `cd backend` > `npm install` > `node index.js`

# Database setup / install
Download and install these applications
- postgresSQL
- pgAdmin

### Setup Prisma
- `cd backend` 
- `npm install prisma -g` (Install prisma globally, if not already.)
- `npx prisma init` 
- `npx prisma generate` (Run update commands if needed.)

In .env
- See: `POSTGRES_URL="postgresql://johndoe:yourpassword@postgres:5432/mydb?schema=public"`
  - Change `johndoe` to `postgres`
  - Then, Change to your variables: `> POSTGRES_URL="postgresql://postgres:<password>@postgres:5432/<db_name>?schema=public"`
    - Here's a complete example of how mine looks: `DATABASE_URL="postgresql://postgres:okokok@localhost:5432/kudos?schema=public"`

To generate a migration (or update if changes are made):
- `npx prisma migrate dev --name init`
- Now you can open pgAdmin and navigage to db.
- Also, run: `npx prisma studio` to see db info in browser. 

### Setting up Prisma & Express
First run:
- `npx prisma generate` (See Gotchas 👇, if you're having issues here)
- then you can run `node index.js`

### Gotchas

Sometimes when running `node index.js` you're told to run `prisma generate` and after running, you don't get any errors, but when you try `node index.js` you're still told to run `prisma generate`. My issue was with how prismaClient was being initiated in my `routs/tests.js` file. 
- `const { PrismaClient } = require('@prisma/client')`

It needed to be changed to...
- `const { PrismaClient } = require('../generated/prisma');`

It's confusing because I didn't see any messages indicating this change.

