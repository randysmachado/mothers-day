import styles from './styles.module.scss';

export function Team() {
  return (
    <section className={styles.team}>
      <h2>Feliz Dia das Mães</h2>
      <h3>Dos teus Filhos</h3>

      <div className={styles.photoSons}>
        <div className={styles.avatar}>
          <img src="/images/randys.jpg" alt="Randys" />
          <p>Randys</p>
        </div>

        <div className={styles.avatar}>
        <img src="/images/ronnys.jpg" alt="Ronnys" />
          <p>Ronnys</p>
        </div>
      </div>

      <h3>Nós te Amamos!!</h3>
    </section>
  );
}