import { NextResponse } from "next/server";

export function GET() {
  const userData = [
    {
      name: "yash lodhi",
      age: 17,
      class: "12th",
      school: "yogi arvind",
    },
    {
      name: "goku",
      age: 99,
      class: "never went",
      school: "he don't know what is it",
    },
    {
      name: "kallusama",
      age: 22,
      class: "gradute",
      school: "rrs",
    },
  ];
  return NextResponse.json({ result: userData, sucess: true }, { status: 200 });
}
