import React, { ChangeEvent, useState } from 'react'
import { Button, Form, Segment } from 'semantic-ui-react';
import { Book } from '../../Models/book';

interface Props {
    CloseForm: () => void;
    createBook: (book: Book) => void
}

const BookForm = ({CloseForm, createBook} : Props) => {

    const Initialstate = {
        id: '',
        title: '',
        PublishDate:'',
        description: '',
        category: '',
        AuthorName: ''
    }

    const [book, setBook] = useState<Book>(Initialstate)

    const handleSubmit = () => {
        // book.id ? updateBook(book) : createBook(book);
        createBook(book);
    }

    const handleInputChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {name, value} = event.target;
        setBook({...book, [name]: value})
    }
    return (
        <Segment clearing>
            <Form onSubmit={handleSubmit} autoComplete='off' >
                <Form.Field>
                    <label>Title</label>
                    <input placeholder='Title' value={book.title}  name='title' onChange={handleInputChange} />
                </Form.Field>
                <Form.Field>
                    <label>Description</label>
                    <textarea  placeholder='Description' value={book.description} name='description'  onChange={handleInputChange}  />
                </Form.Field>
                <Form.Input placeholder='Date' type='date' value={book.PublishDate} name='PublishDate'  onChange={handleInputChange}  />
                <Form.Input placeholder='Category' name='category' value={book.category}  onChange={handleInputChange}  />
                <Form.Input placeholder='Author name' name='AuthorName' value={book.AuthorName}  onChange={handleInputChange}  />
                <Button  loading={false} floated='right' positive type='submit' content='Submit' />
                <Button onClick={CloseForm} floated='right' type='button' content='Cancel' />
            </Form>
        </Segment>
    )
}

export default BookForm
