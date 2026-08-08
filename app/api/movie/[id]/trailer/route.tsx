import { NextResponse } from "next/server";

type Context = {
  params: Promise<{
    id: string;
  }>;
};

export async function GET(
  request: Request,
  { params }: Context
) {
  try {
    const { id } = await params;

    const apiKey = process.env.NEXT_PUBLIC_TMDB_API_KEY;

    if (!apiKey) {
      return NextResponse.json(
        { error: "TMDB API key is missing" },
        { status: 500 }
      );
    }

    const response = await fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${apiKey}&language=en-US`
    );

    if (!response.ok) {
      return NextResponse.json(
        { error: "TMDB request failed" },
        { status: response.status }
      );
    }

    const data = await response.json();

    console.log("TMDB VIDEO DATA:", data);

    const trailer = data.results?.find(
      (video: {
        key: string;
        site: string;
        type: string;
        official?: boolean;
      }) =>
        video.site === "YouTube" &&
        video.type === "Trailer" &&
        video.official === true
    );

    const fallbackTrailer = data.results?.find(
      (video: {
        key: string;
        site: string;
        type: string;
      }) =>
        video.site === "YouTube" &&
        video.type === "Trailer"
    );

    const selectedTrailer = trailer || fallbackTrailer;

    if (!selectedTrailer) {
      return NextResponse.json({
        key: null,
        message: "Trailer not available",
      });
    }

    return NextResponse.json({
      key: selectedTrailer.key,
    });

  } catch (error) {
    console.error("Trailer API error:", error);

    return NextResponse.json(
      { error: "Failed to load trailer" },
      { status: 500 }
    );
  }
}