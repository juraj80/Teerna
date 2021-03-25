# Teerna Server

The Teerna Server is an Express Application that performs three basic functions:

1. It serves the Teerna Client and its static files.
1. It creates the Teerna API for HTTP interaction.
1. It creates the Teerna WebSocket for real-time interaction.


## Development

It is important to keep the codebase as consistent as possible. The Teerna
Server attempts to follow the standards used in Teerna Client in order to allow
the codebase to look somewhat familiar to any developer involved.

The project uses `yarn` as a package manager, `firebase` as authentication
provider, `ws` as a WebSocket library and `Express` as the application
framework.

**Please, be aware that this documentation presumes that the current working directory is the root of the Teerna Server**.

### Tools

- `firebase-tools` is provided as a dev dependency. This implies that when
  invoking the tool you need to provide the full path to the files in
  `node_modules`. To avoid this you may wish to install it globally or add an
  alias to the tool.

### Tests

In order to test the API we need to use the firebase auth emulator.

[Firebase Emulator Workflow](https://firebase.google.com/docs/emulator-suite/connect_and_prototype?database=Firestore)


The Firebase Admin SDK connects to the Authentication Emulator when the [`FIREBASE_AUTH_EMULATOR_HOST`](https://firebase.google.com/docs/emulator-suite/connect_auth#admin_sdks) environment variable is set.
This environment variable is set automatically when the emulator is started using the command:

`npm run start-emulators`






