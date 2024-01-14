### README for Citymobis Web Demo

#### Overview
The Citymobis Web Demo is an augmented reality (AR) web application that uses A-Frame, a web framework for building virtual and augmented reality experiences. This application specifically focuses on displaying 3D models at specific GPS coordinates using a user's webcam. It's a simple yet powerful demonstration of AR capabilities in a web environment.

#### Code Description
1. **Index.html**: Sets up the HTML structure. It includes necessary scripts like A-Frame, AR.js, and additional loaders. The `<a-scene>` tag is used to create an AR scene with webcam as the source. An `<a-camera>` tag with GPS-based camera is included within the scene.

2. **script.js**: Contains the main JavaScript logic. It loads and renders 3D models at specific GPS coordinates upon window load. The `staticLoadPlaces` function defines the locations where the models will appear. The `renderPlaces` function creates and appends A-Frame entities to the scene at the specified GPS coordinates.

#### Setup and Running the Application

1. **Prerequisites**:
   - A modern web browser with support for WebRTC (like Chrome, Firefox, Safari).
   - A device with a webcam and location services (like a smartphone or a laptop with a GPS receiver).

2. **Installation**:
   - Clone the GitHub repository or download the project files to your local machine.

3. **Adding 3D Models**:
   - Place your `.gltf` 3D model files in the `./assets/` directory (or modify the path in script.js accordingly).

4. **Running the Application**:
   - Open the `index.html` file in a compatible web browser.
   - Allow the browser to access your webcam and location.
   - The application will display the 3D model at the specified GPS coordinates.

5. **Customization**:
   - To change the location where the 3D model appears, modify the latitude and longitude in the `staticLoadPlaces` function in `script.js`.
   - Adjust the scale or the model path as needed.

#### Notes
- Ensure your device's location services are enabled to accurately display the 3D models at the correct coordinates.
- The application is best experienced in an open space with good GPS reception.
- The demo currently loads a single predefined location. To add more locations, expand the array returned by `staticLoadPlaces` function.

#### Troubleshooting
- If the model doesn't appear, check your device's location accuracy and internet connection.
- Make sure the 3D model paths are correct and accessible.
- Browser compatibility issues may arise; try using different browsers if problems persist.

This demo serves as a basic introduction to AR on the web. You can expand upon it by integrating more complex features and customization options.
