import { useQuery, gql } from '@apollo/client';

const query=gql`
  query GetTodosWithUser{
    getTodos {
      id
      title
      completed
      user {
        email
        name
      }
    }
  }
`;

// const query = gql`
//     query GetTodosWithUser {
//         getTodos {
//             id
//             title
//             completed
//             user {
//                 email
//                 name
//             }
//         }
//     }
// `;

function App() {
  const { data, loading } = useQuery(query);
  if (loading) return <h1>Loding....</h1>
  return (
    <div>
      {JSON.stringify(data)};

    </div>
  )
}

export default App
