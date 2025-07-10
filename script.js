// Current year in footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// List of skills
const skills = [
    'HTML', 'CSS', 'JavaScript', 'React', 'Node.js',
    'C++', 'Python', 'Java', 'SQL', 'Git',
    'Microsoft Suite', 'Autodesk Maya', 'Autodesk Inventor',
    'Problem Solving', 'Teamwork', 'Communication'
];

// Function to create skill elements
function populateSkills() {
    const container = document.getElementById('skills-container');
    skills.forEach(skill => {
        const skillElement = document.createElement('span');
        skillElement.textContent = skill;
        skillElement.classList.add('skill-tag'); // Add a class for styling
        container.appendChild(skillElement);
    });
}

// Call the function when page loads
window.addEventListener('DOMContentLoaded', populateSkills);
