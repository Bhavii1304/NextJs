function NewsArticleList({ articles }: any) {
  return (
    <>
      <h1>List of news articles</h1>
      {articles.map((article: any) => {
        return (
          <div key={article.id}>
            <h2>
              {article.id} {article.title} | {article.category}
            </h2>
          </div>
        );
      })}
    </>
  );
}

export default NewsArticleList;

export async function getServerSideProps() {
  try {
    const response = await fetch("https://localhost:4000/db.json"); // Assuming db.json is served from localhost
    if (!response.ok) {
      throw new Error(`Failed to fetch data: ${response.statusText}`);
    }
    const data = await response.json();
    console.log("Fetched data:", data);
    return {
      props: {
        news: data.news || [], // Extract news articles from data
        products: data.products || [], // Extract products from data
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        news: [],
        products: [],
      },
    };
  }
}
