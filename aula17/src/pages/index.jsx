import Nav from '../components/Nav';
import Layout from '../components/Layout';

export default function Index() {
  const msg = "PW2";
  const pontuacao = function (ponto) {
    return msg + ponto;
  }

  return (
    <div>
      <Layout>
        <h1>Olá, {pontuacao("!")}</h1>
      </Layout>
    </div>
  );
}