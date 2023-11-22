import Card from 'react-bootstrap/Card';

function Footer() {
  return (
    <Card className="bg-secondary text-light">
      <Card.Header>Pie de Pagina</Card.Header>
      <Card.Body>
        <blockquote className="blockquote">
          
          <footer className="blockquote-footer text-light">
            Alguien famoso <cite title="Source Title">Alguna vez dijo</cite>
          </footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default Footer;