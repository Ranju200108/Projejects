document.querySelector('.send').addEventListener('click', () => {
    document.getElementById('home-screen').style.display = 'none';
    document.getElementById('select-payee-screen').style.display = 'block';
});

document.querySelector('.back').addEventListener('click', () => {
    document.getElementById('select-payee-screen').style.display = 'none';
    document.getElementById('home-screen').style.display = 'block';
});

const payees = document.querySelectorAll('.payee');
payees.forEach(payee => {
    payee.addEventListener('click', () => {
        document.getElementById('select-payee-screen').style.display = 'none';
        document.getElementById('home-screen').style.display = 'block';
        alert(`Payee ${payee.querySelector('h3').innerText} selected`);
    });
});
