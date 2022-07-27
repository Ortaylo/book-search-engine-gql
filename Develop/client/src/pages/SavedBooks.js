import React, { useState, useEffect } from 'react';
import { Jumbotron, Container, CardColumns, Card, Button } from 'react-bootstrap';

import { getMe, deleteBook } from '../utils/API';
import Auth from '../utils/auth';
import { removeBookId } from '../utils/localStorage';
import { useMutation,useQuery } from '@apollo/client';
import { REMOVE_BOOK } from '../utils/mutations';
import { GET_ME } from '../utils/queries';
const SavedBooks = () => {
  const [userData, setUserData] = useState({});
  const {data: user,loading: userLoading, error: userError} = useQuery(GET_ME,{
    variables:{username: 'Ortaylo'}
  })
  const [removeBook, {data,loading, error }] = useMutation(REMOVE_BOOK);
 
  // use this to determine if `useEffect()` hook needs to run again

  // create function that accepts the book's mongo _id value as param and deletes the book from the database
  const handleDeleteBook = async (bookId) => {
    console.log(bookId)

    
    console.log('2')      
    await removeBook({variables: {_id: user.me._id,bookId: bookId} })
    
      console.log(data)
      if(error){
        console.log(error)
      } 
  };

  // if data isn't here yet, say so
  // if (!userDataLength) {
  //   return <h2>LOADING...</h2>;
  // }
  if (userLoading) {
    return <h2>USER LOADING</h2>
  }
  const books = user.me.savedBooks
  // return (
  //   <>
  //   <h2>{user.me.username}</h2>
  //   <h2>{user.me.email}</h2>
  //   <h2>{books.length}</h2>
  //   </>
  // )
  return (
    <>
      <Jumbotron fluid className='text-light bg-dark'>
        <Container>
          <h1>Viewing saved books!</h1>
        </Container>
      </Jumbotron>
      <Container>
        <h2>
          {books.length
            ? `Viewing ${books.length} saved ${books.length === 1 ? 'book' : 'books'}:`
            : 'You have no saved books!'}
        </h2>
        <CardColumns>
          {books.map((book) => {
            return (
              <Card key={book.bookId} border='dark'>
                {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                <Card.Body>
                  <Card.Title>{book.title}</Card.Title>
                  <p className='small'>Authors: {book.authors}</p>
                  <Card.Text>{book.description}</Card.Text>
                  <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                    Delete this Book!
                  </Button>
                </Card.Body>
              </Card>
            );
          })}
        </CardColumns>
      </Container>
    </>
  );
};

export default SavedBooks;
