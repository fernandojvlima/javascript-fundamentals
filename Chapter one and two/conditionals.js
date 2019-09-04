function verifyGender(gender) {

    if(gender=== 'M') {
        return 'Male';
    } else if (gender === 'F') {
        return 'Female';
    } else {
        return 'Not Especified';
    }
}

var verification = verifyGender('F');

console.log(verification);