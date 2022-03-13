import React, {CSSProperties, useEffect, useState} from "react";
import {API, graphqlOperation} from "aws-amplify";
import {listTodos} from "../graphql/queries";
import {createTodo} from "../graphql/mutations";
import { useAuthenticator } from '@aws-amplify/ui-react';


const initialState = {name: '', description: '', id: 0}

interface FormState {
  name: string;
  description: string;
  id: number;
}

function HomePage() {
  const [formState, setFormState] = useState<FormState>(initialState)
  const [todos, setTodos] = useState<Array<FormState>>([])
  const { user, signOut } = useAuthenticator((context) => [context.user]);

  useEffect(() => {
    fetchTodos()
  }, [])

  async function fetchTodos() {
    try {
      const todoData: any = await API.graphql(graphqlOperation(listTodos))
      const todos = todoData.data.listTodos.items
      setTodos(todos)
    } catch (err) {
      console.log('error fetching todos')
    }
  }

  async function addTodo() {
    try {
      if (!formState.name || !formState.description) return
      const todo = {...formState}
      setTodos([...todos, todo])
      setFormState(initialState)
      await API.graphql(graphqlOperation(createTodo, {input: todo}))
    } catch (err) {
      console.log('error creating todo:', err)
    }
  }

  function setInput(key: string, value: string) {
    setFormState({...formState, [key]: value})
  }

  return (
    <div style={container}>
      <h1>Hello {user.attributes!.preferred_username} ({user.username})</h1>
      <button onClick={signOut}>Sign out</button>
      <br/>
      <h2>Amplify Todos</h2>
      <input
        onChange={event => setInput('name', event.target.value)}
        style={styles.input}
        value={formState.name}
        placeholder="Name"
      />
      <input
        onChange={event => setInput('description', event.target.value)}
        style={styles.input}
        value={formState.description}
        placeholder="Description"
      />
      <button style={styles.button} onClick={addTodo}>Create Todo</button>
      {
        todos.map((todo, index) => (
          <div key={todo.id ? todo.id : index} style={styles.todo}>
            <p style={styles.todoName}>{todo.name}</p>
            <p style={styles.todoDescription}>{todo.description}</p>
          </div>
        ))
      }
    </div>
  );
}

const styles = {
  input: {border: 'none', backgroundColor: '#ddd', marginBottom: 10, padding: 8, fontSize: 18},
  todoName: {fontSize: 20, fontWeight: 'bold'},
  todoDescription: {marginBottom: 0},
  button: {backgroundColor: 'black', color: 'white', outline: 'none', fontSize: 18, padding: '12px 0px'},
  todo: {marginBottom: 15},
}

const container: CSSProperties = {
  width: '50%',
  margin: '0 auto',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: 20
}

export default HomePage;
