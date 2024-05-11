import { css } from "@pigment-css/react";

export const imageRoot = css({
  // @ts-ignore
  display: "block",
  flexGrow: 0,
  objectFit: "var(--image-object-fit, cover)",
  width: "100%",
  borderRadius: "var(--image-radius, 0)",
});
