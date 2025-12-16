export const LICENSE_MODE =
  process.env.NEXT_PUBLIC_LICENSE_MODE || "demo";

export const isDemo = LICENSE_MODE === "demo";
