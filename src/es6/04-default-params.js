function newUser(name, age, city) {
    var name = name || 'Oscar';
    var age = age || 35;
    var city = city || 'MX';
    console.log(name, age, city);
}
newUser();
newUser('Pedro', 20, 'CO');

// es6
function newAdmi(name = 'admi123', age = 32, contry = 'CL') {
    console.log(name, age, contry )
    
}
newAdmi();
newAdmi('soad', 20, 'PE');