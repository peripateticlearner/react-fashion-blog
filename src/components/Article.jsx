
const Article = ({ title, image, content }) => {
  return (
    <article>
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p>{content}</p>
      <a href="#">Continue reading...</a>
    </article>
  );
};

export default Article;
