import React from 'react'
import { MiComponente } from '../components/MiComponente'
import { CardWithConfig } from '../components/CardWithConfig';
import Card from '../components/Card';

function withLoggin (Componente) {

    console.log('Ya tengo logging');
    
    return Componente
}

const NuevoComponente = withLoggin(MiComponente)

export const Patterns = () => {
  return (
    <>
        <MiComponente/>
        <NuevoComponente/>
        <CardWithConfig 
            header='Esto es el header' 
            body='Esto es el body' 
            footer='Esto es el footer'
        />
        <Card>
            <Card.Body>BODY</Card.Body>
            <Card.Header>HEADER</Card.Header>
            <Card.Footer>FOOTER</Card.Footer>
        </Card>
    </>
  )
}
