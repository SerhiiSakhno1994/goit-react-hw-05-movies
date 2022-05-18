import s from './ReviewsCard.module.css';
export default function ReviewsCard({ item }) {
  const noLink = item.author_details.avatar_path;

  console.log(item);

  const handleAvatarLink = link => {
    if (!link) return '';

    if (link.includes('http')) return link.substring(1);

    return `https://themoviedb.org/t/p/w45${link}`;
  };
  return (
    <li className={s.container}>
      <img className={s.picture} src={handleAvatarLink(noLink)} alt="" />
      <h3>{item.author}</h3>
      <p>{item.content}</p>
    </li>
  );
}
