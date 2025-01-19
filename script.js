function validateSyntax() {
    let input = document.getElementById('petInput').value;
    // Validation logic goes here 
    console.log('Input received:', input); // Logged the inpit for debugging
    //Initialise the result variable
    let result = ''; // Placeholder for validation result
     if (input.indexOf('pet_') !==0) {// Check if the input starts with 'pet_'
        result = 'Invalid input';
        console.log(result);
    } else {
        let remainingString = input.substring(4);
        console.log('Remaining string after removing "pet_":', remainingString);
        let pattern = /^\d{4}[A-Za-z]+$/;
        if (pattern.test(remainingString)) {
            result = 'Vaild input';
            console.log(result);
        } else {
            result= 'Invalid input';
            console.log(result);
            }
    }    

    // TODO: Write your validation logic here
        // Check if input starts with 'pet_' and followed by alphanumeric characters
        document.getElementById('result').innerText = result;
}

