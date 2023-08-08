import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center text-center justify- gap-8 py-24 px-24">
      <Badge className="py-4 px-6 text-lg font-medium" variant="outline">
        More than 200 happy customers
      </Badge>
      <h1 className="text-3xl font-bold leading-tight md:text-5xl lg:text-6xl lg:leading-[1.1] lg:w-">
        Ethics, where our commitment to ethical values is at the heart of
        everything we do
      </h1>
      <h3 className="max-w-[46rem] text-lg text-muted-foreground sm:text-xl">
        we're dedicated to providing you with a shopping experience that aligns
        with your values
      </h3>
      <div className="flex gap-3">
        <Button size="lg">Shop now</Button>
        <Button size="lg" variant="outline">Sell now</Button>
      </div>
    </main>
  );
}
