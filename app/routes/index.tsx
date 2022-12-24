import { useMatches } from "@remix-run/react";
import type { loader as rootLoader } from "~/root";

export default function Index() {
  const matches = useMatches();

  type RootLoaderData = typeof rootLoader;
  /**
   * TYPE of `data` is:
   * const data: () => TypedJsonResponse<{
   *   label: string;
   *   count: number;
   * }>
   */
  const data = matches[0].data as RootLoaderData;
  const { count, label } = data;

  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>
        {label}: {count}
      </h1>
    </div>
  );
}
