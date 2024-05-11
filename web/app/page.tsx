"use client";
import { Image } from "@raikou/server";

export default function Page() {
  return (
    <div
      style={{
        padding: "40px",
        width: "200px",
      }}
    >
      <Image
        radius="md"
        src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-7.png"
      />
    </div>
  );
}
