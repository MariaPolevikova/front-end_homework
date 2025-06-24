
document.getElementById('regForm').addEventListener('submit', (e) => {
    e.preventDefault();

    const userData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        age: document.getElementById('age').value,
    };
    console.log(userData);
})