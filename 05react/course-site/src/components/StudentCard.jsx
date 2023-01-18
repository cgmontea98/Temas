import Card from 'react-bootstrap/Card';

function StudentCard({student}) {
  
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="{student.photo}" />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Link href="{student.site}">Mas info</Card.Link>
      </Card.Body>
    </Card>
  );
}

export default StudentCard;

