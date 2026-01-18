// Visa Checklist Data
const visaChecklists = {
    common: [
        "Valid passport (minimum 6 months validity)",
        "Completed visa application form",
        "Recent passport-sized photographs",
        "Proof of travel insurance",
        "Flight reservation/itinerary",
        "Accommodation booking confirmation"
    ],
    Tourist: [
        "Bank statements (last 3-6 months)",
        "Employment letter or leave approval",
        "Travel itinerary",
        "Hotel reservations",
        "Return flight tickets",
        "Proof of sufficient funds"
    ],
    Student: [
        "Letter of acceptance from educational institution",
        "Proof of tuition fee payment",
        "Academic transcripts and certificates",
        "Language proficiency test results (IELTS/TOEFL/etc.)",
        "Statement of purpose",
        "Financial documents showing ability to cover expenses",
        "Sponsor letter (if applicable)",
        "Medical examination results"
    ],
    Work: [
        "Job offer letter",
        "Employment contract",
        "Employer invitation letter",
        "Professional qualifications/certificates",
        "Resume/CV",
        "Previous employment records",
        "Company registration documents",
        "Tax documents"
    ],
    Business: [
        "Business invitation letter",
        "Company registration certificate",
        "Business bank statements",
        "Trade license",
        "Previous business travel history",
        "Meeting/conference invitation",
        "Company profile"
    ],
    Transit: [
        "Valid visa for final destination (if required)",
        "Confirmed onward flight tickets",
        "Proof of short stay duration"
    ]
};

const countrySpecific = {
    USA: [
        "DS-160 confirmation page",
        "SEVIS fee payment receipt (for students)",
        "Interview appointment confirmation"
    ],
    UK: [
        "TB test results (from approved clinics)",
        "Financial sponsor documents",
        "Biometric appointment confirmation"
    ],
    Canada: [
        "Police clearance certificate",
        "Medical examination by panel physician",
        "Proof of ties to home country"
    ],
    Australia: [
        "Health insurance (OSHC for students)",
        "Character requirements documents",
        "Skills assessment (for work visa)"
    ],
    Schengen: [
        "Travel medical insurance (minimum €30,000 coverage)",
        "Cover letter explaining purpose of visit",
        "Proof of accommodation for entire stay"
    ]
};

// DOM Elements
const destinationSelect = document.getElementById('destination');
const visaTypeSelect = document.getElementById('visaType');
const nationalityInput = document.getElementById('nationality');
const generateBtn = document.getElementById('generateBtn');
const checklistSection = document.getElementById('checklist');
const checklistContent = document.getElementById('checklistContent');
const downloadBtn = document.getElementById('downloadBtn');
const resetBtn = document.getElementById('resetBtn');

// Event Listeners
generateBtn.addEventListener('click', generateChecklist);
resetBtn.addEventListener('click', resetForm);
downloadBtn.addEventListener('click', downloadChecklist);

function generateChecklist() {
    const destination = destinationSelect.value;
    const visaType = visaTypeSelect.value;
    const nationality = nationalityInput.value.trim();

    if (!destination || !visaType || !nationality) {
        alert('Please fill in all fields!');
        return;
    }

    // Combine checklists
    let items = [...visaChecklists.common];

    if (visaChecklists[visaType]) {
        items = items.concat(visaChecklists[visaType]);
    }

    if (countrySpecific[destination]) {
        items = items.concat(countrySpecific[destination]);
    }

    // Remove duplicates
    items = [...new Set(items)];

    // Generate HTML
    let html = `
        <div class="checklist-header">
            <h3>${visaType} Visa for ${destination}</h3>
            <p class="applicant-info">Applicant Nationality: ${nationality}</p>
        </div>
        <div class="checklist-items">
    `;

    items.forEach((item, index) => {
        html += `
            <div class="checklist-item">
                <input type="checkbox" id="item-${index}" class="checkbox">
                <label for="item-${index}">${item}</label>
            </div>
        `;
    });

    html += `</div>`;

    checklistContent.innerHTML = html;
    checklistSection.style.display = 'block';

    // Smooth scroll to checklist
    checklistSection.scrollIntoView({ behavior: 'smooth' });
}

function resetForm() {
    destinationSelect.value = '';
    visaTypeSelect.value = '';
    nationalityInput.value = '';
    checklistSection.style.display = 'none';
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function downloadChecklist() {
    const destination = destinationSelect.value;
    const visaType = visaTypeSelect.value;
    const nationality = nationalityInput.value;

    let textContent = `PERSONALIZED VISA CHECKLIST\n`;
    textContent += `${'='.repeat(50)}\n\n`;
    textContent += `Destination: ${destination}\n`;
    textContent += `Visa Type: ${visaType}\n`;
    textContent += `Applicant Nationality: ${nationality}\n`;
    textContent += `Generated on: ${new Date().toLocaleDateString()}\n\n`;
    textContent += `${'='.repeat(50)}\n\n`;
    textContent += `REQUIRED DOCUMENTS:\n\n`;

    const checkboxes = document.querySelectorAll('.checklist-item');
    checkboxes.forEach((item, index) => {
        const label = item.querySelector('label').textContent;
        const checked = item.querySelector('input').checked;
        textContent += `${index + 1}. [${checked ? 'X' : ' '}] ${label}\n`;
    });

    textContent += `\n${'='.repeat(50)}\n`;
    textContent += `\n⚠️  IMPORTANT NOTE:\n`;
    textContent += `This checklist is for general guidance only.\n`;
    textContent += `Always verify requirements with the official embassy or consulate.\n`;

    // Create and download file
    const blob = new Blob([textContent], { type: 'text/plain' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `visa-checklist-${destination}-${visaType}.txt`;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

// Add live progress tracking
document.addEventListener('DOMContentLoaded', () => {
    document.addEventListener('change', (e) => {
        if (e.target.type === 'checkbox' && e.target.classList.contains('checkbox')) {
            updateProgress();
        }
    });
});

function updateProgress() {
    const checkboxes = document.querySelectorAll('.checkbox');
    const checked = document.querySelectorAll('.checkbox:checked').length;
    const total = checkboxes.length;

    if (total > 0) {
        const percentage = Math.round((checked / total) * 100);

        // Update or create progress indicator
        let progressDiv = document.querySelector('.progress-indicator');
        if (!progressDiv) {
            progressDiv = document.createElement('div');
            progressDiv.className = 'progress-indicator';
            checklistContent.insertBefore(progressDiv, checklistContent.firstChild.nextSibling);
        }

        progressDiv.innerHTML = `
            <div class="progress-bar">
                <div class="progress-fill" style="width: ${percentage}%"></div>
            </div>
            <p class="progress-text">${checked} of ${total} items completed (${percentage}%)</p>
        `;
    }
}
