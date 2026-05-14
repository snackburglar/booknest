const BASE_URL = "https://openlibrary.org";

export const featuredGenres = [
  "Fantasy",
  "Science Fiction",
  "History",
  "Programming",
  "Mystery",
  "Romance",
];

export function coverUrl(coverId, size = "M") {
  return coverId
    ? `https://covers.openlibrary.org/b/id/${coverId}-${size}.jpg`
    : null;
}

export function workIdFromKey(key) {
  return key?.replace("/works/", "") ?? "";
}

export function authorIdFromKey(key) {
  return key?.replace("/authors/", "") ?? "";
}

export function plainText(value) {
  if (!value) {
    return "";
  }

  return typeof value === "string" ? value : (value.value ?? "");
}

export async function searchBooks(query, limit = 12) {
  const params = new URLSearchParams({
    q: query,
    limit: String(limit),
    fields:
      "key,title,author_name,author_key,first_publish_year,cover_i,subject",
  });

  try {
    const response = await fetch(`${BASE_URL}/search.json?${params}`);

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.docs ?? [];
  } catch {
    return [];
  }
}

export async function getWork(workId) {
  try {
    const response = await fetch(`${BASE_URL}/works/${workId}.json`);

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}

export async function getAuthor(authorId) {
  try {
    const response = await fetch(`${BASE_URL}/authors/${authorId}.json`);

    if (!response.ok) {
      return null;
    }

    return await response.json();
  } catch {
    return null;
  }
}

export async function getAuthorWorks(authorId, limit = 8) {
  try {
    const response = await fetch(
      `${BASE_URL}/authors/${authorId}/works.json?limit=${limit}`,
    );

    if (!response.ok) {
      return [];
    }

    const data = await response.json();
    return data.entries ?? [];
  } catch {
    return [];
  }
}
