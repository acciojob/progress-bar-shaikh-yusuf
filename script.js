//your JS code here. If required.
let currentCircle = 1;
    const totalCircles = 5;
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');

    function changeCircle(direction) {
        const newCircle = currentCircle + direction;

        if (newCircle >= 1 && newCircle <= totalCircles) {
            document.getElementById(`circle-${currentCircle}`).classList.remove('active');
            document.getElementById(`circle-${newCircle}`).classList.add('active');
            currentCircle = newCircle;

            // Update button states
            prevButton.disabled = currentCircle === 1;
            nextButton.disabled = currentCircle === totalCircles;
        }
    }