# Use official Python image as base
FROM python:3.9-slim

# Set environment variables
ENV SECRET_KEY 'SECRET_KEY'

ENV MONGO_DBNAME 'Cluster0'

# Set working directory
WORKDIR /app

# Install pipenv
RUN pip install --upgrade pip && \
    pip install pipenv

# Copy and install requirements
COPY requirements.txt requirements.txt

# Install dependencies
RUN pip install -r requirements.txt

# Copy the rest of the application
COPY . .

# Expose port 5000 to the outside world
EXPOSE 5000

# Command to run the Flask application
CMD ["pipenv", "run", "flask", "run", "--host=0.0.0.0"]