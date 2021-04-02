import React, { Fragment, useEffect, useState } from 'react';
import './styles.css';
import axios from 'axios';
import { Header, Container } from 'semantic-ui-react'
import Navbar from './Navbar';
import BooksDashboard from '../features/dashboard/BooksDashboard';
import {v4 as uuid} from 'uuid';
import { Book } from '../Models/book';
function App() {

  const [Books, setBooks] = useState<Book[]>([]);
  const [EditMode, setEditMode] = useState(false);

  const OpenForm = () => {
    setEditMode(true);
  }

  const CloseForm = () => {
    setEditMode(false);
  }

  const createBook = (book: Book) => {
        book.id = uuid()
        axios.post<void>('http://localhost:5000/api/Books', book).then(() => {
          setBooks([...Books, book])
          setEditMode(false);
        })
  }


  useEffect(() => {
    axios.get<Book[]>('http://localhost:5000/api/Books').then(response => {
      console.log(response);
      setBooks(response.data);
    })
  }, [])

  return ( 
    <Fragment>
        <Navbar OpenForm={OpenForm} />
        <Container style={{marginTop: '7em'}}>
            <Header as="h2">List of your books</Header>
            <BooksDashboard Books={Books} CloseForm={CloseForm} createBook={createBook} EditMode={EditMode} />
        </Container>
    </Fragment>
  );
}

export default App;
