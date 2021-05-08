import styles from './styles.module.scss';
import quotes from './content.js';

export function Quotes() {
  return (
    <section className={styles.quotes__wrapper}>

      {quotes.map((quote, i) => (
        <div className={styles.quote} key={i}>

          <h2>{quote.title}</h2>

            <div className={`${styles.quote__box} ${styles.quote__contentLeft}`}>
              <img src="/images/quote-left.svg" alt="Quote" />
              <p>{quote.quoteOne}</p>
            </div>

            <div className={`${styles.quote__box} ${styles.quote__contentRight}`}>
              <img src="/images/quote-right.svg" alt="Quote" />
              <p>{quote.quoteTwo}</p>
            </div>
        
        </div>
      ))}

      <h2>... são tantas qualidades!</h2>
    </section>
  )
}