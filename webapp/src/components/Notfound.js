import React from "react";
import Alert from 'react-bootstrap/Alert';
import "../styles/Notfound.css";

function Notfound() {
  return (
    <Alert variant="info">
      <Alert.Heading>Lo siento, el resultado de tu búsqueda no ha sido encontrado</Alert.Heading>
      <p>
        Intentalo nuevamente.
      </p>
      <hr />
      <p className="mb-0">
        Esperamos próximamente agregar el resultado de tu búsqueda!
      </p>
    </Alert>
  );
}

export default Notfound;
