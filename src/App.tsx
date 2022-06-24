import { gql, useQuery } from "@apollo/client";
import { Event } from "./Pages/Event";

const GET_LESSONS_QUERY = gql`
  query {
    lessons {
      id
      title

      teacher {
        name
      }
    }
  }
`;

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY);

  return <Event />;
}

export default App;
