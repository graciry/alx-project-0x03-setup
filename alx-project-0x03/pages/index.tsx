import React from "react";
import { useRouter } from "next/router";
import Button from "@/components/common/Button";

export default function Home() {
  const router = useRouter();

  const handleStart = () => {
    router.push("/get-started");
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1>Welcome to Splash App</h1>
        <Button
          buttonLabel="Get Started"
          buttonSize="text-lg"
         buttonBackgroundColor="blue"

          action={handleStart}
        />
      </div>
    </div>
  );
}
