# Interactive World Map Project

## Overview
This project is a dynamic web application that displays an interactive map of the world. Built using the **Angular JavaScript framework**, the application highlights countries on a world map upon user interaction and fetches detailed information about each country using the **World Bank API**. The project emphasizes responsive design, interactivity, and real-time data retrieval.

---

## Features
- **Interactive Map:** Hover over or click on a country to highlight it and display information.
- **API Integration:** Retrieves country-specific data, including:
  - Country Name
  - Capital
  - Region
  - Income Level
  - Additional custom properties
- **Dynamic Data Display:** Presents the information alongside the map in a responsive two-column layout.
- **Angular Routing:** Redirects users from the root URL to the `/map` endpoint.
- **Responsive Design:** Optimized for various screen sizes and devices.

---

## How It Works

### Interactive Map
The map is rendered using an SVG file. Each country is interactive and responds to mouse events, such as hover or click.

### Data Integration
Country information is retrieved from the **World Bank API**. Selected country details are displayed in a side panel.

### Angular Features
- **Event Binding:** User interactions with the map trigger API calls to fetch and display relevant data.
- **Routing:** Configures `/map` as the default route for the application.
- **HTTPClient Service:** Handles API calls efficiently and ensures seamless integration with the data layer.

### Two-Column Layout
The user interface is divided into two columns:
1. **Left Column:** Displays the interactive world map.
2. **Right Column:** Displays country-specific data fetched from the API.

---

## File Structure

The key files and directories include:
- `src/`: Contains the Angular application code.
- `map-image.svg`: The SVG file for the world map.
- `angular.json`, `package.json`: Angular and Node.js configuration files.
- `README.md`: This documentation.

---

## Technologies and Versions
```bash
Angular CLI: 14.2.3
Node: 16.15.0
Package Manager: npm 8.11.0
OS: win32 x64
Angular: 14.2.2
```

---

## Installation and Setup

### Prerequisites
Ensure the following tools are installed on your system:
- **Node.js:** Version 16 or higher
- **npm:** Version 8 or higher
- **Angular CLI:** Version 14 or higher

### Steps to Run the Application
1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/interactive-world-map.git
   cd interactive-world-map
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   ng serve
   ```
   The application will be accessible at `http://localhost:4200`.

---

## Contributing
Contributions are welcome! Feel free to fork the repository, create a feature branch, and submit a pull request.

---

## License
This work is licensed under the Creative Commons Attribution-NonCommercial-NoDerivatives 4.0 International License.
To view a copy of this license, visit http://creativecommons.org/licenses/by-nc-nd/4.0/.

---

## Contact
For inquiries or feedback, feel free to reach out:
- **Name:** Lance Roller 
- **GitHub:** https://github.com/Lanceroyy
- **LinkedIn:** https://www.linkedin.com/in/lanceroller/
