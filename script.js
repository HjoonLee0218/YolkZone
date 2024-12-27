let interval = null;
let eggState = -1; 

document.addEventListener('DOMContentLoaded', () => {
    const frySound = document.getElementById('frySound');
    const plateSound = document.getElementById('plateSound');

    // start frying
    document.getElementById('smallEgg').addEventListener('click', () => {
        const egg = document.getElementById('egg');
        
        frySound.play();

        egg.style.display = 'block';
        eggState = 0;
        updateEggAppearance(egg, eggState);

        if (!interval) {
    
            interval = setInterval(() => {
    
            eggState++;
            updateEggAppearance(egg, eggState);
    
            if (eggState > 4) { // egg burnt
                clearInterval(interval);
                interval = null;
            }
    
            }, 10000); // every 10s
        }
    });
    
    // put egg on plate
    document.getElementById('smallPlate').addEventListener('click', () => {
        const kitchen = document.getElementById('kitchen');
        const pView = document.getElementById('pView');
        
        if (eggState === -1) {
            plateSound.play();

            pView.style.display = 'flex';
            kitchen.style.display = 'none';

            const plate = document.getElementById('plate2');
            plate.style.backgroundImage = 'url(assets/plate.png)';
        }

        else {
            frySound.pause();
            frySound.currentTime = 0;
            plateSound.play();

            pView.style.display = 'flex';
            kitchen.style.display = 'none';

            const plate = document.getElementById('plate2');
            plate.style.backgroundImage = 'url(assets/plate.png)';

            const eggImg = document.createElement('div');
            eggImg.style.backgroundImage = `url(assets/egg_${eggState}.png)`;
            eggImg.className = 'egg';

            plate.appendChild(eggImg);
        }
    });

    // reset button
    document.getElementById('button').addEventListener('click', () => {
        plateSound.pause();
        clearInterval(interval);
        interval = null;
        eggState = -1;

        const kitchen = document.getElementById('kitchen');
        const pView = document.getElementById('pView');
        const plate = document.getElementById('plate2');
        const egg = document.getElementById('egg');

        egg.style.display = 'none';
        egg.style.backgroundImage = 'url(assets/egg_0.png)';

        plate.innerHTML = '';

        pView.style.display = 'none';
        kitchen.style.display = 'flex';
    })
    
    function updateEggAppearance(egg, state) {
        switch (state) {
            case 1:
            egg.style.backgroundImage = 'url(assets/egg_1.png)'; 
            break;

            case 2:
            egg.style.backgroundImage = 'url(assets/egg_2.png)'; 
            break;
    
            case 3:
            egg.style.backgroundImage = 'url(assets/egg_3.png)'; 
            break;
    
            case 4:
            egg.style.backgroundImage = 'url(assets/egg_4.png)';
            break;
    
            default:
            egg.style.backgroundImage = 'url(assets/egg_0.png)';
        }
    }
})
