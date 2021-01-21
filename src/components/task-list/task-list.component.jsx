import { Fragment } from "react";
import { gql, useQuery } from "@apollo/client";

const TODOS_QUERY = gql`
  query {
    todos {
      data {
        id
        user_id
        task_id
        project_type
        notes
        accuracy
        payment
        time_spent
        deadline
        created_at
        updated_at
      }
      paginatorInfo {
        currentPage
        lastPage
      }
    }
  }
`;

const TaskList = () => {
  const { loading, error, data } = useQuery(TODOS_QUERY);

  if (loading)
    return (
      <Fragment>
        <h2>Loading....</h2>
      </Fragment>
    );
  if (error)
    return (
      <Fragment>
        <h2>Error Found</h2>
      </Fragment>
    );

  return (
    <Fragment>
      {data.todos.data.map(({ id, notes }) => (
        <div key={id}>
          <p>{notes}</p>
        </div>
      ))}

      <button className="border-2 p-2">Load More</button>

    </Fragment>
  );
};

export default TaskList;
