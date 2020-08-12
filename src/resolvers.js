const users = [
    { id: 1, name: 'Francisco', email: 'francisco@tests.com'},
    { id: 2, name: 'Ferreira', email: 'ferreira@testes.com'},
];

module.exports = {
    Query: {
        users: ()=> user,
        user: ()=> users[0]
    },
    Mutation: {
        createUser: ()=>users[0]
    },

}