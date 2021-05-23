Cypress.Commands.add('signup', (username, password) => {
    var username = username || 'username';
    var password = password || 'password';

    cy
        .visit('/signup')
        .url().should('incluide', '/signup')
        .get('#username').type(username)
        .get('#password').type(password)
        .get('#BBQ').click()
        .get('form').submit()
        .url().should('include', '/dashboard');


})