import { SignUp } from "@clerk/nextjs";
import { neobrutalism } from "@clerk/themes";
 
export default function Page() {
  return (
    <div className="flex items-center justify-center flex-col gap-10">
      <h1 className="text-4xl font-bold mt-20">Sign Up</h1>
      <SignUp appearance={{baseTheme: neobrutalism}}/>
    </div>
  );
}