export function postDate(post) {
  return new Date(
    post.id.match(/^\d{4}-\d{1,2}-\d{1,2}/)[0] + "T00:00:00", // i HATE javascript
  );
}

export function formattedPostDate(post) {
  return postDate(post).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
