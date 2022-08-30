import { useRecoilValue } from "recoil";
import { erroState } from "../atom";

export function useMensagemDeErro() {
  const mensagem = useRecoilValue(erroState)
  return mensagem
}