    function typeOfDrink(preference,age) {
        if (preference === 'beer' && age >=18) {
            return 'Grab a beer';
        }

        if(preference === 'beer' && age < 18) {
            return 'Sorry, you have to wait more, grab a Pepsi';
        }

        if(preference !== 'beer'){
            return 'Wherever';
        }
    }

    var checkId = typeOfDrink('beer',15);

    console.log(checkId);

// && , || , != , 