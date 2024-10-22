window.onload = () => {
    const loader = document.querySelector('.loader');
    setTimeout(() => {
        loader.classList.add('loader-hidden');
    }, 2000);
};