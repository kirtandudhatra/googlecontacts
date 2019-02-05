var contactsapi = require('./api/getcontacts');

contactsapi.getSomeAsyncData('481645928944-j7qsb4tqafdc5gp9895dsfto9il6445f.apps.googleusercontent.com','uUFpvKZbJ6tVe4dPfP3ikKXO').then(function(result){
    // Do something with the result
    console.log(result);
})
.catch(function (error){
    // Handle error
    console.log(error);
});


