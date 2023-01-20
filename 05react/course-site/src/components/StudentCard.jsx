import Card from 'react-bootstrap/Card';

function BasicExample({student}) {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={student.photo} />
      <Card.Body>
        <Card.Title>{student.name}</Card.Title>
        <Card.Link href={student.site}>Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default BasicExample;