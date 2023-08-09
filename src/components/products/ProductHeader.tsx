import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "../ui/button";

type TitleType = {
  title: string | undefined;
};

export default function ProductHeader({ title }: TitleType) {
  return (
    <div className="flex flex-col gap-2 mt-10">
      <h1 className="">{title}</h1>
      <h3 className="text-muted-foreground">Best accessories for you</h3>
      <Sheet>
        <SheetTrigger>
          <Button>Filter</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}
