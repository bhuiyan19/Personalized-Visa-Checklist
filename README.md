# 🌍 Personalized Visa Checklist & Eligibility Checker

A comprehensive, interactive web application that checks your visa eligibility and generates customized document checklists based on your profile, destination country, and visa type.

## ✨ Features

### 🎯 Complete Tool (visa-tool-complete.html) - **RECOMMENDED**
- **44 Countries**: Easy, Medium, Hard, and Very Hard destinations
- **Eligibility Checker**: Answer questions to calculate your eligibility score
- **Scoring System**: Pass/fail based on difficulty level (40-70 points required)
- **Cost Information**: Estimated visa processing costs
- **Processing Time**: Expected timeframes for each country
- **Personalized Checklist**: Document list based on visa type and eligibility
- **Mobile Optimized**: Works perfectly on all devices without server

### 📋 Basic Checklist Tool
- **Interactive Interface**: Beautiful, user-friendly web interface
- **Personalized Checklists**: Get customized document lists based on:
  - Destination country
  - Visa type (Tourist, Student, Work, Business, Transit)
  - Your nationality
- **Real-time Progress Tracking**: Check off items as you complete them and see your progress
- **Download Feature**: Export your checklist as a text file for offline reference
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices

## 🚀 Quick Start

### 🌟 Complete Tool with Eligibility Checker (RECOMMENDED!)

**The most comprehensive option - includes eligibility scoring + checklist:**

1. Open: **`visa-tool-complete.html`**
2. No installation or server needed!
3. Works on any device (mobile, tablet, desktop)
4. Features:
   - 44 countries with difficulty levels
   - Eligibility assessment with scoring
   - Personalized document checklist
   - Cost and processing time info

**Perfect for anyone who wants to check if they're eligible before applying!**

### 📱 Simple Checklist Version (Basic)

**For quick document checklist only:**

1. Download or access: `visa-checklist-mobile.html`
2. Open it in any web browser (Chrome, Safari, Firefox, etc.)
3. Works instantly - no server or installation needed!
4. Get document checklist without eligibility assessment

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

## 🎯 Supported Countries (44 Total)

### ✅ EASY (7 countries)
Nepal, Maldives, Sri Lanka, Vietnam, Turkey, Kenya, Ethiopia

### ⚠️ MEDIUM (12 countries)
Malaysia, Thailand, Singapore, UAE/Dubai, India, Indonesia, China, South Korea, Saudi Arabia, Philippines, Hong Kong, Pakistan

### 🔴 HARD (17 countries)
Japan, United Kingdom, Schengen Countries (Austria, Belgium, Denmark, Finland, France, Germany, Greece, Italy, Netherlands, Norway, Poland, Portugal, Spain, Sweden, Switzerland)

### ⛔ VERY HARD (4 countries)
USA, Canada, Australia, New Zealand

## 📋 Visa Types

- Tourist / Visitor Visa
- Student Visa
- Work Visa
- Business Visa
- Transit Visa

## 🎯 Eligibility Scoring System

The complete tool assesses your eligibility based on multiple factors:

### Scoring Criteria:
- **Passport Validity**: 8-30 points (depending on difficulty)
- **Employment Status**: 15-20 points
- **Financial Status**: 12-20 points (bank balance & income)
- **Travel History**: 8-15 points
- **Property Ownership**: Up to 8 points
- **Family Ties**: Up to 10 points
- **Previous Rejections**: 0-10 points

### Passing Scores by Difficulty:
- **Easy**: 40/100 points required
- **Medium**: 55/100 points required
- **Hard**: 65/100 points required
- **Very Hard**: 70/100 points required

*Pass the eligibility check to receive your personalized document checklist!*

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js with Express
- **Styling**: Custom CSS with modern gradients and animations
- **No External Dependencies**: Pure JavaScript, no frameworks required

## 📁 Project Structure

```
Personalized-Visa-Checklist/
├── visa-tool-complete.html     # 🌟 Complete tool with eligibility checker (RECOMMENDED!)
├── visa-checklist-mobile.html  # 📱 Simple checklist version (no server needed!)
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
