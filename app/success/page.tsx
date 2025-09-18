import { Suspense } from "react";
import SuccessPage from "@/components/success-page";
import { Loader2 } from "lucide-react";

export default function Page() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center">
        <Loader2 className="h-4 w-4 mr-2 animate-spin"/>
        <span>Loading...</span>
        </div>
    }>
      <SuccessPage />
    </Suspense>
  );
}
