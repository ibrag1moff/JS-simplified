import PaidRoute from "@/components/PaidRoute";

export default function ClosuresPage() {
  return (
    <PaidRoute>
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-2xl font-bold mb-4">Closures Example</h1>
        <p className="text-lg">
          This page demonstrates the use of closures in JavaScript.
        </p>
        <p className="mt-2 text-gray-600">
          Check the console for closure examples.
        </p>
      </div>
    </PaidRoute>
  );
}
