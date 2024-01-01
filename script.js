document.addEventListener('DOMContentLoaded', function(){
    const fireworkContainer = document.querySelector('.firework-container')
    function createFirework(){
        const firework = document.createElement('div');
        firework.className = 'firework';
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        firework.style.left = `${posX}px`;
        firework.style.top = `${posY}px`;

        fireworkContainer.appendChild(firework);
    }
    function lauchFirework(){
        setInterval(createFirework, 1);
    }
    lauchFirework();
})