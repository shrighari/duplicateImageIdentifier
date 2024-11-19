Here’s a detailed `README.md` for your **Duplicate Image Finder** project using Electron:

---

# Duplicate Image Finder

## Description

**Duplicate Image Finder** is a desktop application built using **Electron**, which allows users to select folders on their system and identify duplicate images within those folders. The application compares images based on their content rather than filenames, ensuring that even images with different names but identical content are flagged as duplicates. If any duplicate images are found, they are renamed to include a "Duplicate" label with consecutive numbers.

This tool can help users clean up their image libraries, save space, and organize their files more effectively.

---

## Features

- **Select Multiple Folders**: Users can choose one or more folders to scan for duplicate images.
- **Image Comparison**: Compares images based on content, ignoring filenames, to detect true duplicates.
- **Rename Duplicates**: Duplicate images are renamed with a “Duplicate” label and a consecutive number.
- **Cross-Platform**: Built with Electron, making it compatible with Windows, macOS, and Linux.

---

## Installation

### Prerequisites

Ensure you have **Node.js** and **npm** installed on your machine.

- **Node.js**: [Download and install Node.js](https://nodejs.org/)
- **npm**: npm is included automatically with Node.js.

### Steps to Run the Application

1. **Clone the Repository**

   Clone the repository to your local machine:
   ```bash
   git clone https://github.com/your-username/duplicate-image-finder.git
   cd duplicate-image-finder
   ```

2. **Install Dependencies**

   Inside the project directory, run the following command to install all necessary dependencies:
   ```bash
   npm install
   ```

3. **Run the Application**

   To start the application in development mode, use the following command:
   ```bash
   npm start
   ```

   This will launch the Electron app and you can start selecting folders to scan for duplicate images.

---

## How to Use

1. **Select Folders**: Click the "Select Folders" button to choose the folders you want to scan for duplicate images.
2. **Scan for Duplicates**: The application will scan the selected folders and compare the images based on their content.
3. **Rename Duplicates**: If duplicate images are found, they will be renamed with the prefix "Duplicate" followed by a consecutive number (e.g., `Duplicate-1.jpg`).
4. **Done!**: You can now review your folders to find the renamed duplicate images.

---

## File Structure

- **`index.js`**: The main entry point for the Electron app, responsible for managing the application window and folder interactions.
- **`index.html`**: The HTML file that serves as the UI for the application.
- **`renderer.js`**: Handles the logic for the UI, such as selecting folders, displaying results, and renaming duplicate images.
- **`style.css`**: The CSS file for styling the UI components.

---

## Contributing

We welcome contributions to this project! Here's how you can contribute:

1. **Fork the Repository**: Fork the repository to your GitHub account.
2. **Clone Your Fork**: Clone your fork to your local machine:
   ```bash
   git clone https://github.com/your-username/duplicate-image-finder.git
   ```
3. **Create a Feature Branch**: Create a new branch for your feature:
   ```bash
   git checkout -b feature-branch
   ```
4. **Make Changes**: Make your changes and test them locally.
5. **Commit Your Changes**: Commit your changes to your branch:
   ```bash
   git commit -am "Describe your changes"
   ```
6. **Push to Your Fork**: Push your changes to your fork on GitHub:
   ```bash
   git push origin feature-branch
   ```
7. **Create a Pull Request**: Open a pull request on the original repository with a description of your changes.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Acknowledgments

- **Electron**: A framework for building cross-platform desktop applications using web technologies.
- **Image Comparison**: Custom logic for comparing image contents, ensuring accurate detection of duplicates.

---

Let me know if you need any adjustments or additional sections!
