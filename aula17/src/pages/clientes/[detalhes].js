import { useRouter } from 'next/router';

export default function Detalhes() {
  return (
    <h1>Código do cliente: {useRouter().query.detalhes}</h1>
  );
}