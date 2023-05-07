const countAllFromTownFactory = () => {
    const regNumObject = {
        'paarl': 'cl',
        'capeTown': 'ca',
        'Stellies': 'cl',
        'Kuilsriver': 'cf',
        'Bellville': 'cy'
    };
    // create a variable to store the registration
    let currentRegNum = '';
    // create a function that get the registration number from the user
    const getRegNum = (registrationNum) => {
        currentRegNum = registrationNum.toLowerCase().trim();
    };
    // create a function to verify the reistration number to check if its from e.g paarl, cape town
    const fromWhere = () => {
        // code to check where the registration number is from
    };
    // create a function to check if the registration meets our expectations return the registration
        // otherwise prompt the user that the registration is invalid 
    return {
        getRegNum,
        fromWhere
    };
};