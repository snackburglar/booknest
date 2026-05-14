import Link from "next/link";

export default function ErrorPage() {
  return (
    <section className="mx-auto max-w-3xl px-4 py-20 text-center">
      <h1 className="mt-3 text-3xl font-bold text-ink">
        BookNest hit an error.
      </h1>
      <p className="mt-4 text-stone-600">
        An unexpected error occurred while loading this page.
      </p>
      <Link
        href="/"
        className="mt-8 inline-flex rounded-md bg-moss px-5 py-3 font-semibold hover:bg-moss/90"
      >
        Go home
      </Link>
    </section>
  );
}
