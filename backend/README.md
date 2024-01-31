### Backend initialization


1. Install dependencies

   ```bash
   pipenv install -r requirements.txt
   ```

2. set up environment variables

   - create `.env` within the backend directory
   - copy and paste

     ```
        # CODMOUNTAINFISH/Backend/.env

         SECRET_KEY = 'SECRET_KEY'
         MONGO_URI = 'MONGO_URI'
         MONGO_DBNAME = 'MONGO_DBNAME'
     ```

3. Get into your pipenv and run your Flask app

   ```bash
       pipenv shell
   ```

   ```bash
       flask run
   ```
