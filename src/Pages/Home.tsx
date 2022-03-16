import * as React from 'react';
import { Container, Card } from 'react-bootstrap';


const Home = () => {
    return (
        <>
            <Container>
                <h2 className="mt-4">Welcome home!</h2>
                {[1, 2, 3, 4, 5].map((v, i) => {
                    return (
                        <Card key={v + i} style={{ width: '18rem' }}>
                            <Card.Body>
                                <Card.Title>Card Title</Card.Title>
                                <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
                                <Card.Text>
                                    Some quick example text to build on the card title and make up the bulk of
                                    the card's content.
                                </Card.Text>
                                <Card.Link href="#">Card Link</Card.Link>
                                <Card.Link href="#">Another Link</Card.Link>
                            </Card.Body>
                        </Card>
                    )
                })}

            </Container>
        </>)
}

export default Home