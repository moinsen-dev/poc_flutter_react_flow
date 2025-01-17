# Flutter React Flow Integration Proof of Concept

A Flutter project that integrates React Flow using WebView and real-time databases.
Please note that this is a proof of concept and not a fully functional or stable implementation!
Mainly created for educational purposes and to showcase the potential of integrating React Flow into Flutter applications.

Its also a test of the openai modell o1-preview. 

## Project Overview

This project aims to create a Flutter package that wraps around the react-flow library, allowing developers to use advanced flow chart and node-based graph capabilities in their Flutter applications. The integration is achieved through WebView and utilizes real-time databases like Firebase or Supabase for data synchronization.

## Getting Started

For more detailed information about the project, please refer to the following documents:

- [Motivation](markdown/0-motivation.md)
- [Initial ChatGPT Conversation](markdown/1-chatgpt-o1-chat.md)
- [AI-Proposed Solution](markdown/2-ai-solution.md)
- [Project Article](markdown/3-medium-article.md)

This project is a starting point for integrating React Flow into a Flutter application. For help getting started with Flutter development, view the [online documentation](https://docs.flutter.dev/), which offers tutorials, samples, guidance on mobile development, and a full API reference.

## Setup for Firebase Firstore database

1. Create a new Firebase project in the [Firebase Console](https://console.firebase.google.com/).

2. Add a new web app to your Firebase project and follow the setup instructions.

3. Change the react-flow-app

```
cd react-flow-app
cp .env.example .env
```

4. Add your Firebase project configuration to the `.env` file.

5. Install the dependencies and start the React Flow app.

```
npm install
npm run start
```

Play around with the React Flow app to see how the data is synchronized with the Firestore database.


Here is a screenshot of the React Flow app running as a standalone web app:

![React Flow App Screenshot](images/screenshot-running-node-web-app.png)

Feel free to explore the app and see how the data is synchronized with the Firestore database.

Screenshot of the firebase database:

![Firebase Database Screenshot](images/screenshot-firebase-database.png)

## Contributing

We welcome contributions from the community! If you're interested in contributing, please read our [Contribution Guidelines](CONTRIBUTING.md).

This project is a proof of concept and not a fully functional or stable implementation and it is not intended for production use or it is maintained!

## License

This project is licensed under the [MIT License](LICENSE.md).

## Contact

For any questions or suggestions, please open an issue in this repository.
Happy to see to see a star!

Happy coding!
