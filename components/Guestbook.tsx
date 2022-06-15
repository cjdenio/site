import { useQuery, gql, useMutation } from "@apollo/client";
import { useRef } from "react";

const FETCH_GUESTBOOK = gql`
  query FetchGuestbook {
    me {
      username
    }

    guestbook {
      id
      username
      message
      favoriteColor
    }
  }
`;

const SIGN_GUESTBOOK = gql`
  mutation SignGuestbook($message: String!, $favoriteColor: String) {
    createGuestbookEntry(message: $message, favoriteColor: $favoriteColor) {
      id
    }
  }
`;

export default function Guestbook() {
  const { loading, error, data } = useQuery(FETCH_GUESTBOOK);
  const [signGuestbook] = useMutation(SIGN_GUESTBOOK, {
    refetchQueries: [FETCH_GUESTBOOK],
  });

  const form = useRef(null);

  async function handleSubmit(e) {
    e.preventDefault();

    const message = e.target.message.value;
    const favoriteColor = e.target.color.value;

    await signGuestbook({ variables: { message, favoriteColor } });

    form.current.reset();
  }

  if (loading) return <p>Loading...</p>;
  if (error) return <p>error!</p>;

  return (
    <div className="mb-10 text-left">
      <form className="mb-5 relative" onSubmit={handleSubmit} ref={form}>
        {!data.me && (
          <div className="absolute -inset-3 rounded-md bg-zinc-900/80 backdrop-blur-sm flex flex-col items-center justify-center">
            <a
              href={`https://github.com/login/oauth/authorize?client_id=${process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID}`}
              className="btn"
            >
              Sign in with GitHub
            </a>
            <small className="text-xs mt-3">(it'll be quick, i promise)</small>
          </div>
        )}
        {data.me && (
          <div className="flex items-center mb-3">
            <img
              src={`https://github.com/${data.me.username}.png`}
              alt={`${data.me.username}'s avatar`}
              className="w-5 rounded-full mr-2"
            />

            <a
              href={`https://github.com/${data.me.username}`}
              target="_blank"
              rel="noreferrer"
              className="no-underline hover:underline text-zinc-400"
            >
              {data.me.username}
            </a>
          </div>
        )}
        <textarea
          cols={50}
          rows={5}
          name="message"
          className="bg-zinc-800 rounded-lg px-3 py-2 border-transparent border-2 focus:outline-none focus:border-purple-600 transition-colors"
          placeholder="Put your message here!"
          required
        ></textarea>

        <div className="mt-3 flex items-center">
          <input
            type="color"
            name="color"
            id="color"
            className="mr-2"
            defaultValue="#ec3750"
          />
          <label htmlFor="color">What's your favorite color?</label>
        </div>

        <button type="submit" className="btn block mt-3">
          Sign my guestbook!
        </button>
      </form>

      <div className="space-y-5">
        {data.guestbook.map((entry) => {
          return (
            <div key={entry.id}>
              <div className="flex items-center">
                <img
                  src={`https://github.com/${entry.username}.png`}
                  alt={`${entry.username}'s avatar`}
                  className="w-5 rounded-full mr-2"
                />

                <a
                  href={`https://github.com/${entry.username}`}
                  target="_blank"
                  rel="noreferrer"
                  className="no-underline hover:underline text-zinc-400"
                  style={{ color: entry.favoriteColor }}
                >
                  {entry.username}
                </a>
              </div>

              <p>{entry.message}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}
