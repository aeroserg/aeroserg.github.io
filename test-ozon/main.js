document.addEventListener('DOMContentLoaded', () => {
    const progressBar = document.getElementById('progress-bar');
    const valueInput = document.getElementById('value-input');
    const animateToggle = document.getElementById('animate-toggle');
    const hideToggle = document.getElementById('hide-toggle');
    const progressBlock = document.getElementById('progress-block');

    valueInput?.addEventListener('input', () => {
        const value = parseInt(valueInput.value) > 100 ? 100 : isNaN(parseInt(valueInput.value)) ? 0 : parseInt(valueInput.value);
        valueInput.value = value;
        const dashArray = `${value}, 100`;
        progressBar?.setAttribute('stroke-dasharray', dashArray);
    });

    animateToggle?.addEventListener('change', () => {
        if (animateToggle.checked) {
            progressBlock?.classList.add('animated');
        } else {
            progressBlock?.classList.remove('animated');
        }
    });

    hideToggle?.addEventListener('change', () => {
        if (hideToggle.checked) {
            progressBlock?.classList.add('hidden');
        } else {
            progressBlock?.classList.remove('hidden');
        }
    });
});
