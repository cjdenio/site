import got from "got";
import * as jose from "jose";
import cookie from "cookie";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const { access_token }: { access_token?: string } = await got
    .post("https://github.com/login/oauth/access_token", {
      form: {
        client_id: process.env.NEXT_PUBLIC_GITHUB_CLIENT_ID,
        client_secret: process.env.GITHUB_CLIENT_SECRET,
        code: req.query.code,
      },
      headers: {
        Accept: "application/json",
      },
    })
    .json();

  if (!access_token) {
    return res.redirect("/");
  }

  const { login: username } = await got("https://api.github.com/user", {
    headers: {
      Authorization: `Bearer ${access_token}`,
    },
  }).json();

  const jwt = await new jose.SignJWT({
    username,
  })
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime("7d")
    .sign(Buffer.from(process.env.JWT_SECRET, "hex"));

  res.setHeader(
    "Set-Cookie",
    cookie.serialize("gadzooks_auth", jwt, {
      maxAge: 604800,
      path: "/",
      httpOnly: true,
    })
  );
  res.redirect("/#guestbook");
}
