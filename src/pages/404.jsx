import Link from "next/link";

export default function NotFoundPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="mt-3 text-3xl font-bold text-ink">
        This page is not in the nest.
      </h1>
      <p className="mt-4 text-stone-600">
        The book, author, or page you requested could not be found.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-moss px-5 py-3 text-white font-semibold hover:bg-moss/90"
      >
        Go home
      </Link>
    </section>
  );
}
