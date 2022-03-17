const appsync = require('./graphlql-client').appsync;
const gql = require('graphql-tag');

const getUserQuery = gql`
    mutation createTodoIAM($input: CreateTodoIAMInput!) {
        createTodoIAM(input: $input) {
            id
            name
            description
        }
    }
`;

async function getEmployeeById () {
  const item = {
    input: {
      name: "Lambda Item",
      description: "Item Generated from Lambda"
    }
  };
  return appsync
    .mutate({
      mutation: getUserQuery,
      fetchPolicy: 'no-cache',
      variables: item
    })
    .then((res) => console.log(res))
    .catch((err) => err);
};

exports.handler = async (event) => {
  console.log(await(getEmployeeById()))
}
