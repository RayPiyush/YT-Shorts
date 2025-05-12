import Image from "next/image";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/header/navbar";
import { prisma } from "@/lib/prisma";
import { currentUser } from "@clerk/nextjs/server";
export default async function Home() {
  const user = await currentUser();

  if (!user) {
    return null;
  }

  const loggedInUser = await prisma.user.findUnique({
    where: { clerkUserId: user.id },
  });

  if (!loggedInUser) {
    await prisma.user.create({
      data: {
        name: user.fullName || "Name",
        email: user.emailAddresses[0].emailAddress,
        clerkUserId: user.id,
      },
    });
  }

  return (
    <div className="mx-10">
      <Button>Hello World</Button>
    </div>
  );
}
