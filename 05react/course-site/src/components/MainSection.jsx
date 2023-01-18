import students from "../json/students.json";
import CardGroup from 'react-bootstrap/CardGroup';
import StudentCard from "./StudentCard.jsx";

export default function MainSection() {
  const cards = 
  students.map((students) => <StudentCard student={students}></StudentCard>)
 
  return <section><CardGroup>{cards}</CardGroup>
  </section>;
}
