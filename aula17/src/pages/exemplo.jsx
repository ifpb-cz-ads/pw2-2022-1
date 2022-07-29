import Link from 'next/link';
import styles from '../styles/Exemplo.module.css';
import Layout from "../components/Layout";

export default function Exemplo() {
  return (
    <Layout>
      <div className={styles.exemplo}>
        <Link href={"/"}>
          <a style={{
            backgroundColor: "blue",
            color: "white",
            borderRadius: "5px",
            padding: "10px 20px"
          }}>Voltar</a>
        </Link>

        <h1>Mais uma página de exemplo com Next</h1>
      </div>
    </Layout>
  );
}