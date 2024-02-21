
# Image Search Engine - Mobile Application
This is an image search engine full-stack mobile application.

## Introductions
This project is a full-stack mobile application for searching and displaying images according to various 
parameters, based on external api.

## Features

* **Authorization.** 
* **Display images on 3X3 square by category.**
* **Pagination.**
* **Display details about the image by clicking on it.**

## Methods

| Method              | Explanation                                                                                                           |                             
| ------------------- | ----------------------------------------------------------------------------------------------------------------------|
| **Global State**    | Management with Redux.                                                                                                |
| **AsyncStorage**    | Token storage.                                                                                                        |
| **complexity O(1)** | Creating function with a complexity of O(1), see an explained example in path "Service/ImagesCollectionService".      |
| **Authentication**  | User identity verification.                                                                                           |
| **REST API**        | Using the Express library to read (get) and update (post) data.                                                       |


**N-Tiers Architecture** 
![N-Tiers-Architecture](/frontend/assets/n-triers-architecture.png)

## Tech Stack

**Client:** React Native, React Native Elements, TypeScript, Redux, JWT, Axios, AsyncStorage, expo .

**Server:** Node.js, Express, CORS, JWT, Axios, Joi.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Lior-Halperin/Image-search-engine.git
```
**The following commands must be applied for both layers, frontend and backend.**

Go to the project directory:

```bash
  cd Image-search-engine\enter the layer name
```

Install dependencies:

```bash
  npm install
```

Install expo-cli:

```bash
  npm install -g expo-cli
```
**Use ngrok**

Install ngrok:

https://bin.equinox.io/c/bNyj1mQVY4c/ngrok-v3-stable-windows-amd64.zip

Open your command line tnd navigate ti the ngrok folder:

```bash
   cd your path\ngrok
```

Create a secure public URL for port 3001 web server:

```bash
   ngrok http 3001
```

Go to file Config.ts located frontend/src/Utils/Config and use the ngrok URL in the appropriate place.

**The following commands are only for backend layers** 

```bash
   cd Image-search-engine\backend
```
Start the server

```bash
  npm start
```

**The following commands are only for frontend layers** 
Run the app

```bash
   cd Image-search-engine\frontend

```
```bash
npx expo start
```

press a for android emulator
```bash
a
```

I recommend to use android studio to display a virtual mobile simulator
see explanation at  https://www.youtube.com/watch?v=0-S5a0eXPoc&list=PL7SWe83BfZpGchElwYEueVL0Kf3VlYpxQ&index=6

## Authors

- [@Lior-Halperin](https://www.github.com/Lior-Halperin)

[![linkedin](https://img.shields.io/badge/linkedin-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/lior-halperin-25a90b219/)


