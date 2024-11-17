<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Bouncing Popup</title>
    <style>
        body {
            margin: 0;
            padding: 0;
            height: 100vh;
            overflow: hidden;
            background-color: #f0f0f0;
        }
        #popup {
            position: absolute;
            width: 150px;
            height: 150px;
            background-color: #ff6347;
            border-radius: 50%;
            display: flex;
            justify-content: center;
            align-items: center;
            color: white;
            font-size: 20px;
            font-weight: bold;
            cursor: pointer;
            user-select: none;
            transition: all 0.1s ease;
        }
    </style>
</head>
<body>

    <div id="popup">Popup</div>

    <script>
        const popup = document.getElementById('popup');
        
        // Initial random position for the popup
        let popupX = Math.random() * window.innerWidth;
        let popupY = Math.random() * window.innerHeight;
        popup.style.left = `${popupX}px`;
        popup.style.top = `${popupY}px`;

        // Set random initial speed and direction
        let speedX = Math.random() * 10 + 2; // Random speed between 2 and 12
        let speedY = Math.random() * 10 + 2; // Random speed between 2 and 12

        function bouncePopup() {
            setInterval(() => {
                // Update popup position
                popupX += speedX;
                popupY += speedY;

                // Bounce off the edges of the window
                if (popupX <= 0 || popupX + popup.offsetWidth >= window.innerWidth) speedX *= -1;
                if (popupY <= 0 || popupY + popup.offsetHeight >= window.innerHeight) speedY *= -1;

                // Apply the updated position
                popup.style.left = `${popupX}px`;
                popup.style.top = `${popupY}px`;
            }, 16); // 60 frames per second
        }

        function moveAwayFromCursor(e) {
            const mouseX = e.clientX;
            const mouseY = e.clientY;

            // Get the center position of the popup
            const popupRect = popup.getBoundingClientRect();
            const popupCenterX = popupRect.left + popupRect.width / 2;
            const popupCenterY = popupRect.top + popupRect.height / 2;

            const dx = mouseX - popupCenterX;
            const dy = mouseY - popupCenterY;

            const distance = Math.sqrt(dx * dx + dy * dy);
            const maxDistance = 150;  // Maximum distance to move away

            const moveX = (dx / distance) * maxDistance;
            const moveY = (dy / distance) * maxDistance;

            // Move the popup away from the cursor
            popup.style.left = `${popupX - moveX}px`;
            popup.style.top = `${popupY - moveY}px`;
        }

        // Add event listener for mousemove to move the popup
        document.addEventListener('mousemove', moveAwayFromCursor);

        // Start bouncing the popup
        bouncePopup();
    </script>

</body>
</html>
