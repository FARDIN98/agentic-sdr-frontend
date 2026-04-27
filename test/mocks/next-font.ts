/* Vitest mock for next/font/google and next/font/local.
   next/font requires Next.js's compiler transform; Vite can't process it.
   Returns a stub that mirrors the next/font return shape: a className /
   variable / style object so tests reading these props don't crash. */
type FontReturn = {
  className: string;
  variable: string;
  style: { fontFamily: string; fontStyle?: string; fontWeight?: string };
};

const stub = (): FontReturn => ({
  className: "mocked-font",
  variable: "--mocked-font",
  style: { fontFamily: "mocked", fontStyle: "normal" },
});

export const Hind_Siliguri = stub;
export const Noto_Serif_Bengali = stub;
export const Geist = stub;
export const Geist_Mono = stub;
export const Inter = stub;
export const Roboto = stub;
export default stub;
