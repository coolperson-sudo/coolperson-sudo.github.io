// Create the popup element dynamically
const popup = document.createElement('div');
popup.style.position = 'absolute';
popup.style.width = '150px';
popup.style.height = '150px';
popup.style.backgroundColor = '#ff6347';
popup.style.borderRadius = '50%';
popup.style.display = 'flex';
popup.style.justifyContent = 'center';
popup.style.alignItems = 'center';
popup.style.color = 'white';
popup.style.fontSize = '20px';
popup.style.fontWeight = 'bold';
popup.style.cursor = 'pointer';
popup.style.userSelect = 'none';
popup.textContent = 'Popup';
document.body.appendChild(popup);

// Set initial position
let popupX = Math.random() * window.innerWidth;
let popupY = Math.random() * window.innerHeight;
popup.style.left = `${popupX}px`;
popup.style.top = `${popupY}px`;

// Function to bounce the popup
function bouncePopup() {
    const bounceSpeed = 15;  // Speed of bounce
    let directionX = (Math.random() > 0.5 ? 1 : -1) * bounceSpeed;
    let directionY = (Math.random() > 0.5 ? 1 : -1) * bounceSpeed;

    setInterval(() => {
        popupX += directionX;
        popupY += directionY;

        // Make sure popup doesn't go outside the window
        if (popupX <= 0 || popupX + popup.offsetWidth >= window.innerWidth) directionX *= -1;
        if (popupY <= 0 || popupY + popup.offsetHeight >= window.innerHeight) directionY *= -1;

        // Update position
        popup.style.left = `${popupX}px`;
        popup.style.top = `${popupY}px`;
    }, 50);  // Update every 50ms
}

// Function to move the popup away from cursor
function moveAwayFromCursor(e) {
    const mouseX = e.clientX;
    const mouseY = e.clientY;

    const popupRect = popup.getBoundingClientRect();
    const popupCenterX = popupRect.left + popupRect.width / 2;
    const popupCenterY = popupRect.top + popupRect.height / 2;

    const dx = mouseX - popupCenterX;
    const dy = mouseY - popupCenterY;

    const distance = Math.sqrt(dx * dx + dy * dy);
    const maxDistance = 150;  // Maximum distance to move away

    const moveX = (dx / distance) * maxDistance;
    const moveY = (dy / distance) * maxDistance;

    // Move popup away from the cursor
    popup.style.left = `${popupX - moveX}px`;
    popup.style.top = `${popupY - moveY}px`;
}

// Add event listener for mousemove to move the popup
document.addEventListener('mousemove', moveAwayFromCursor);

// Start the bouncing animation
bouncePopup();
