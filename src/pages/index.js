import { searchBooks } from "@/api/library";

export default function Home({ books }) {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10 sm:px-6">
      {books.map((book) => (
        <article key={book.key} className="p-5">
          <h2 className="text-lg font-medium text-stone-900">{book.title}</h2>
          <p className="mt-1 text-sm text-stone-600">
            by {book.author_name?.[0]}
          </p>
        </article>
      ))}
    </section>
  );
}

export async function getServerSideProps() {
  const books = await searchBooks("react", 5);

  return {
    props: {
      books,
    },
  };
}
