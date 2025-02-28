import { NextResponse } from "next/server";

let accessToken = null;
let tokenExpiresAt = 0;

export async function GET() {
  const currentTime = Date.now();

  if (accessToken && currentTime < tokenExpiresAt) {
    return NextResponse.json({ token: accessToken });
  }

  const clientId = process.env.SPOTIFY_CLIENT_ID;
  const clientSecret = process.env.SPOTIFY_CLIENT_SECRET;

  const authString = Buffer.from(`${clientId}:${clientSecret}`).toString(
    "base64"
  );

  try {
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: `Basic ${authString}`,
      },
      body: new URLSearchParams({
        grant_type: "client_credentials",
      }),
    });

    if (!response.ok) {
      throw new Error("Falha ao obter o token do Spotify");
    }

    const data = await response.json();

    accessToken = data.access_token;
    tokenExpiresAt = currentTime + data.expires_in * 1000 - 60000;

    return NextResponse.json({ token: accessToken });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
