// Select all skill bars
const skillBars = document.querySelectorAll('.skill-bar-fill');

// Add event listener to each skill bar
skillBars.forEach((skillBar) => {
  skillBar.addEventListener('mouseover', () => {
    // Animate the skill bar on mouseover
    skillBar.style.width = '100%';
  });

  skillBar.addEventListener('mouseout', () => {
    // Reset the skill bar on mouseout
    skillBar.style.width = '0%';
  });
});

// Select all hobby icons
const hobbyIcons = document.querySelectorAll('.hobby i');

// Add event listener to each hobby icon
hobbyIcons.forEach((hobbyIcon) => {
  hobbyIcon.addEventListener('click', () => {
    // Toggle the hobby icon's color on click
    hobbyIcon.classList.toggle('active');
  });
});