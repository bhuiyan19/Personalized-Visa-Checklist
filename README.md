# 🌍 Personalized Visa Checklist Generator

A live, interactive web application that generates customized visa application checklists based on your destination country, visa type, and nationality.

## ✨ Features

- **Interactive Interface**: Beautiful, user-friendly web interface
- **Personalized Checklists**: Get customized document lists based on:
  - Destination country (USA, UK, Canada, Australia, Germany, France, Japan, Singapore, UAE, Schengen)
  - Visa type (Tourist, Student, Work, Business, Transit)
  - Your nationality
- **Real-time Progress Tracking**: Check off items as you complete them and see your progress
- **Download Feature**: Export your checklist as a text file for offline reference
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Live Tool**: Runs on a local server for instant access

## 🚀 Quick Start

### 📱 Mobile Version (Easiest - No Installation Required!)

**Perfect for mobile users!** Just open the file directly in your browser:

1. Download or access: `visa-checklist-mobile.html`
2. Open it in any web browser (Chrome, Safari, Firefox, etc.)
3. Works instantly - no server or installation needed!
4. Fully responsive and mobile-optimized

**This is the simplest way to use the tool on mobile devices!**

### 💻 Desktop Version (With Server)

#### Prerequisites

- Node.js (version 12 or higher)
- npm (comes with Node.js)

#### Installation

1. Clone or download this repository
2. Navigate to the project directory:
   ```bash
   cd Personalized-Visa-Checklist
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

#### Running the Tool

Start the live server:
```bash
npm start
```

The tool will be available at: **http://localhost:3000**

Open your web browser and visit the URL to start using the tool.

## 📖 How to Use

1. **Select Destination Country**: Choose where you want to apply for a visa
2. **Select Visa Type**: Pick the type of visa you need (Tourist, Student, Work, etc.)
3. **Enter Your Nationality**: Type your nationality
4. **Generate Checklist**: Click the button to create your personalized checklist
5. **Track Progress**: Check off items as you gather them
6. **Download**: Save your checklist for offline reference

## 🎯 Supported Countries

- United States (USA)
- United Kingdom (UK)
- Canada
- Australia
- Germany
- France
- Japan
- Singapore
- United Arab Emirates (UAE)
- Schengen Countries

## 📋 Visa Types

- Tourist / Visitor Visa
- Student Visa
- Work Visa
- Business Visa
- Transit Visa

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js with Express
- **Styling**: Custom CSS with modern gradients and animations
- **No External Dependencies**: Pure JavaScript, no frameworks required

## 📁 Project Structure

```
Personalized-Visa-Checklist/
├── visa-checklist-mobile.html  # 📱 Standalone mobile version (no server needed!)
├── index.html                  # Main HTML file
├── styles.css                  # Styling and responsive design
├── app.js                      # Interactive functionality
├── server.js                   # Express server
├── package.json                # Project configuration
├── .gitignore                  # Git ignore rules
└── README.md                   # This file
```

## 🎨 Features in Detail

### Common Documents
- Valid passport (minimum 6 months validity)
- Completed visa application form
- Recent passport-sized photographs
- Proof of travel insurance
- Flight reservation/itinerary
- Accommodation booking confirmation

### Visa-Specific Documents
Each visa type includes additional specific requirements (employment letters, acceptance letters, financial documents, etc.)

### Country-Specific Requirements
Each destination country has unique requirements (DS-160 for USA, TB tests for UK, OSHC for Australia, etc.)

## ⚠️ Important Note

This tool provides **general guidance** only. Always verify requirements with the official embassy or consulate of your destination country, as visa requirements can change and may vary based on individual circumstances.

## 🔧 Development

To modify the checklist data, edit the `visaChecklists` and `countrySpecific` objects in `app.js`.

To change styling, modify `styles.css`.

To add new features, update the relevant HTML, CSS, and JavaScript files.

## 📝 License

MIT License - feel free to use and modify this tool for your needs.

## 🤝 Contributing

Contributions are welcome! Feel free to:
- Add more countries
- Include additional visa types
- Improve the UI/UX
- Add new features

## 📞 Support

For issues or questions, please open an issue in the repository.

---

**Made with ❤️ to help make visa applications easier**
