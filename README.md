# Face Recognition-Based Banking System
This project is an enhancement of one of my full stack project
## Overview
This project is a highly secure banking system that utilizes face recognition technology instead of traditional passwords for authentication. The system ensures that physical appearance of user is needed. Similarly, if a user has already registered but tries to log in using a photo instead of their real face, the system will detect it as a fake face and deny access

## Tech Stack
- **Frontend:** ReactJS
- **Backend:** MongoDB, Express.js
- **Face Recognition:** Python (OpenCV)

## Features
- **User Registration:** Users must provide a unique username and register using their real face. Fake faces (e.g., printed photos or digital images) are detected and rejected.
- **Secure Login:** The system verifies the user's live face against the registered face. Attempts to log in using a photo instead of the actual person will be detected as fake.
- **Fake Face Detection:** Uses advanced algorithms to differentiate between real human faces and photos/videos.
- **Enhanced Security:** Ensures that only physically present users can access their accounts, preventing unauthorized access.

## How It Works
1. **Registration:**
   - User provides a unique username.
   - Face is scanned in real-time.
   - Fake face detection is applied.
   - If real, the face is stored securely in the database.

2. **Login:**
   - User attempts to log in using their face.
   - System compares the live scan with the stored face data.
   - If a fake face is detected, access is denied.
   - If the face matches, the user is granted access.

## Installation & Setup
### Prerequisites
- Node.js and npm installed
- Python 3.7 installed
- Required dependencies of Python for face recognition can be downloaded by requirements.txt file

### Steps to Run
1. Clone the repository:
   ```sh
   git clone https://github.com/fizaayesha/face-recognition.git
   cd face-recognition
2. **Installation and Working of Project:**  

   ```sh
   # Backend Setup
   ```sh
   cd backend
   npm install
   npm start

   # Frontend Setup
   cd ../frontend
   npm install
   npm start

   # Python Setup (Face Recognition)
   cd ../face_recognition
   pip install -r requirements.txt
   python app.py
