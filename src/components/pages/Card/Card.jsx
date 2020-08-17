import React from 'react';
import { Card, Button } from 'react-bootstrap';
import './Card.css';

const CardComponent = (props) => {
  const cardInfo = [
    {
      img: 'https://via.placeholder.com/150/d32776',
      title: 'Project 1',
      text:
        'This is a text to describe my project in a short and simple way. I hope they will like it and click the button.',
    },
    {
      img: 'https://via.placeholder.com/150/d32776',
      title: 'Project 2',
      text:
        'This is a text to describe my project in a short and simple way. I hope they will like it and click the button.',
    },
    {
      img: 'https://via.placeholder.com/150/d32776',
      title: 'Project 3',
      text:
        'This is a text to describe my project in a short and simple way. I hope they will like it and click the button.',
    },
    {
      img: 'https://via.placeholder.com/150/d32776',
      title: 'Project 4',
      text:
        'This is a text to describe my project in a short and simple way. I hope they will like it and click the button.',
    },
    {
      img: 'https://via.placeholder.com/150/d32776',
      title: 'Project 5',
      text:
        'This is a text to describe my project in a short and simple way. I hope they will like it and click the button.',
    },
    {
      img: 'https://via.placeholder.com/150/d32776',
      title: 'Project 6',
      text:
        'This is a text to describe my project in a short and simple way. I hope they will like it and click the button.',
    },
  ];

  const renderCards = (card, index) => {
    return (
      <Card id="card" style={{ width: '18rem' }} key={index}>
        <Card.Img variant="top" src={card.img} />
        <Card.Body>
          <Card.Title>{card.title}</Card.Title>
          <Card.Text>{card.text}</Card.Text>
          <Button id="read-btn" variant="primary" href="">
            To GitHub
          </Button>
        </Card.Body>
      </Card>
    );
  };

  return <div id="card-flex">{cardInfo.map(renderCards)}</div>;
};

export default CardComponent;
