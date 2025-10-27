export function runCountdown(onDone) {
    //make overlay
    const overlay = document.createElement('div');
    overlay.id = 'countdownOverlay';
    overlay.className = 'countdown-overlay';
    document.body.appendChild(overlay);

    const steps = ['images/3.png', 'images/2.png', 'images/1.png', 'GO!'];
    let i = 0;

    const showStep = () => {
        overlay.innerHTML = `<img src="${steps[i]}" alt="images" class="countdown-img">`;
        overlay.classList.remove('pop'); // reset animation
        void overlay.offsetWidth;
        overlay.classList.add('pop');

        i++;
        if (i < steps.length) {
            setTimeout(showStep, 1000);
        } else {
            setTimeout(() => {
                overlay.remove();
                if (typeof onDone === 'function') onDone();
            }, 700);
        }
};
    showStep();
}
