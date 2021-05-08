import styles from './styles.module.scss';

export function Testimonial() {
  return (
    <section className={styles.testimonial}>
      <div className={styles.testimonial__text}>
        <h2>Mãe, por você eu desviro todos os chinelos. <img src="/images/chinelo.svg" alt="Chinelo" /></h2>
        <h3>Te Amo!</h3>
      </div>

      <div className={styles.testimonial__photo}>
        <img src="/images/testimonial-photo.jpg" alt="Testimonial Photo" />
      </div>
    </section>
  )
}