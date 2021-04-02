import React from 'react'
import { Grid, GridColumn, Header } from 'semantic-ui-react'
import { Book } from '../../Models/book'
import BookForm from '../form/BookForm'
import BooksList from './BooksList'

interface Props {
    Books : Book[];
    EditMode: boolean;
    createBook: (book: Book) => void
    CloseForm: () => void;
}

export const BooksDashboard = ({Books, EditMode, createBook, CloseForm} : Props) => {
    return (
        <Grid>
            <GridColumn width="10" >
                <BooksList Books={Books}  />
            </GridColumn>
            <GridColumn width="6" >
                {
                     EditMode 
                    && <BookForm CloseForm={CloseForm} createBook={createBook} />
                    
                    }
            </GridColumn>
      </Grid>
    )
}

export default BooksDashboard