let timer = 0;
let interval = null;
let eggState = 0; // 0 = runny, 1 = sunny side up, 2 = medium, 3 = hard, 4 = burnt

document.getElementById('egg').addEventListener('click', () => {

    const egg = document.getElementById('egg');
    egg.style.display = 'block';
  
    // Start the timer if not already running
    if (!interval) {
        interval = setInterval(() => {
        timer += 10;
        document.querySelector('.time').textContent = timer / 10;

        // Update egg state every 10 seconds
        eggState++;
        updateEggAppearance(egg, eggState);

        // Stop timer after burnt state
        if (eggState > 4) {
            clearInterval(interval);
            interval = null;
        }
        }, 10000);
    }
});

document.getElementById('plate').addEventListener('click', () => {
    const plate = document.getElementById('plate');
    plate.style.backgroundImage = `url(egg_${eggState}.png)`; // Replace with corresponding egg image
});

function updateEggAppearance(egg, state) {
    switch (state) {
        case 1:
        egg.style.backgroundColor = '#f5e6d9'; // Slightly cooked white
        break;
        case 2:
        egg.style.backgroundColor = '#fff3b0'; // Medium white
        break;
        case 3:
        egg.style.backgroundColor = '#ffeb99'; // Well-cooked
        break;
        case 4:
        egg.style.backgroundColor = '#8b4513'; // Burnt
        break;
        default:
        egg.style.backgroundColor = 'white';
    }
}
