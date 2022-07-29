import Link from 'next/link';
import styles from '../styles/Nav.module.css';

export default function Nav(props) {
  const bgcolor = props.bgcolor || "#0070f3";
  return (
    <div className={styles.nav}>
      <h1>{props.message ?? 'Meu app Next.js'}</h1>
      <Link href={props.url || '/'}>
        <a style={{
          backgroundColor: bgcolor,
        }}>Link</a>
      </Link>
    </div>
  );
}