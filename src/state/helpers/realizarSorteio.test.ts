import React from 'react';
import { realizarSorteio } from './realizarSorteio';

describe('dado um sorteio de amigo secreto', () => {
  test('cada participante não sorteie o próprio nome', () => {

    const participante = [
      'Ana',
      'Catarina',
      'Jorje',
      'Ronaldo',
      'Jailson',
      'Jonilson'
    ]

    const sorteio = realizarSorteio(participante)
    participante.forEach(participante => {
      const amigoSecreto = sorteio.get(participante)
      expect(amigoSecreto).not.toEqual(participante)
    })

  })
})