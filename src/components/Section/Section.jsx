import s from './Section.module.css';
export default function Section({ children }) {
  return (
    <section className={s.cardClass}>
      <div className={s.container}>{children}</div>
    </section>
  );
}
