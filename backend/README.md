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
    then within the parentheses place your environmental variables

3. Get into your pipenv and run your Flask app

   ```bash
       pipenv shell
   ```

   ```bash
       flask run
   ```

## Class Method Breakdown For Model Directory

1.  ## init()

    - **Description**: Constructor Method for initializing a object
    - **Parameters**: Depends on the class and its properties
    - Initializes "created_at" and "updated_at" attributes on object initialization.

2.  ## save_One()

    - **Description**: Inserts a single object into the database collection.
    - **Returns**: The inserted object's ID if successful; otherwise, returns an error message

3.  ## save_Many()

    - **Description**: Saves a list of objects to the database.
    - **Returns**: The inserted object's ID if successful; otherwise, returns an error message.
    - Uses the insert_many method to insert multiple objects.

4.  ## get_ById()

    - **Description**: Retrieves a user from the database by ID.
    - **Parameters**: Id
    - **Returns**: the Object's data if found, otherwise returns an error message.
    - Converts the ObjectId to a string for JSON serialization.

5.  ## get_All()

    - **Description**: Retrieves all objects from the database.
    - **Returns**: message and the list of objects if found,otherwise returns a error message
    - Coverts ObjectsIds to strings fro Json serialization.

6.  ## get_Aggregate()

    - **Description**: Performs an aggregation query on the object collection using the specified pipeline.
    - **Parameters**: Pipeline (generally just an array of aggregates that you want to run).
    - **Returns**: A message and the aggregated results if found; otherwise, returns an error message.
    - Coverts ObjectsIds to strings fro Json serialization.

7.  ## put_Update()

    - **Description**: Updates an object in the database with the provided data.
    - **Parameters**: Id, updated_Object
    - **Returns**: A success message if the object is updated; otherwise, returns an error message.
    - Uses the update_on method to update the user based on the provided ID.

8.  ## delete_Item()

    - **Description**: Deletes a object from the database on the provided Id.
    - **Parameters**: Id
    - **Returns**: A success message if the user is deleted; otherwise, returns an error message.

9.  ## to_dict()

    - **Description**: Converts instance properties to a dictionary for easy serialization to JSON
