export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        {process.env.NEXT_PUBLIC_EXAMPLE_VAR}
      </h1>
    </main>
  );
}
