import React from 'react'
import { useListaDeParticipantes } from '../state/hooks/useListaDeParticipantes'

export default function ListaParticipantes() {
  const participantes: string[] = useListaDeParticipantes()

  return (
    <ul>
      {participantes.map(participante => (<li key={participante}>{participante}</li>))}
    </ul>
  )
}
