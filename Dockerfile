# Use the Python image to create the container
FROM python:3.9-slim

# Set the working directory to /app
WORKDIR /app

# Copy the updated requirements.txt file to the container
COPY ./requirements.txt .

# Install the dependencies in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Copy the rest of the application code into the container
COPY . /app

# Expose port 8000 for the Django app
EXPOSE 8000

# Run the Django app (adjust this command based on your app's entry point)
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
