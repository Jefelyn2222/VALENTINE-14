function openEnvelope() {
    let flap = document.querySelector('.flap');
    let letter = document.querySelector('.letter');

    // Animasi amplop terbuka
    flap.style.transform = 'rotateX(180deg)';

    // Animasi surat muncul
    setTimeout(() => {
        letter.style.opacity = '1';
        letter.style.top = '50px';
    }, 1000);
}
