// app/api/token-prices/route.ts
import { NextResponse } from "next/server";

const CMC_API_KEY = process.env.COINMARKETCAP_API_KEY;

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const ids = searchParams.get("ids");

  if (!ids) {
    return NextResponse.json({ error: "Missing token ids" }, { status: 400 });
  }

  try {
    const response = await fetch(
      `https://pro-api.coinmarketcap.com/v2/cryptocurrency/quotes/latest?id=${ids}`,
      {
        headers: {
          "X-CMC_PRO_API_KEY": CMC_API_KEY || "",
        },
      }
    );

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error fetching token prices:", error);
    return NextResponse.json(
      { error: "Failed to fetch prices" },
      { status: 500 }
    );
  }
}
