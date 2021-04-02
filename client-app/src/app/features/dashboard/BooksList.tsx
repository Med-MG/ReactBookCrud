import React from 'react'
import { Button, Card, Image } from 'semantic-ui-react'
import { Book } from '../../Models/book'

interface Props {
    Books : Book[]
}

const BooksList = ({Books} : Props) => {
    const getRandom = (min: number, max: number) => {
        return Math.floor(Math.random() * (max - min) + min);
      } 
      
    return (
        <Card.Group>
        
            {Books.map(book => (
            <Card key={book.id} >
                <Card.Content>
                <Image
                    floated='right'
                    size='mini'
                    src={`assets/authors/${getRandom(1,7)}.jpg`}
                />
                <Card.Header>{book.title}</Card.Header>
                <Card.Meta>{book.AuthorName}</Card.Meta>
                <Card.Description>
                    {book.PublishDate} <strong>{book.category}</strong>
                </Card.Description>
                </Card.Content>
                <Card.Content extra>
                <div className='ui two buttons'>
                    <Button basic color='green'>
                        Delete
                    </Button>
                    <Button basic color='red'>
                        Edit
                    </Button>
                </div>
                </Card.Content>
            </Card>
            ))}




      </Card.Group>
    )
}

export default BooksList
