"use client"
import { updateCartItemSchema } from "@/lib/validations/cart";
import { zodResolver } from "@hookform/resolvers/zod";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { toast } from "../ui/use-toast";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

interface AddToCartForm {
  productId: number;
}

type Quantity = z.infer<typeof updateCartItemSchema>;

export default function AddToCartForm({ productId }: AddToCartForm) {
  const [isPending, startTransition] = useTransition();

  const form = useForm<Quantity>({
    resolver: zodResolver(updateCartItemSchema),
    defaultValues: {
      quantity: 1,
    },
  });

  function onSubmit(data: Quantity) {
    startTransition(async () => {
      try {
        console.log("yep");
        toast({
          description: "Added to cart",
        });
      } catch (error) {
        console.log(error);
      }
    });
  }

  return (
    <Form {...form}>
      <form
        className="flex flex-col gap-4 w-1/2"
        onSubmit={(...args) => void form.handleSubmit(onSubmit)(...args)}
      >
        <FormField
          control={form.control}
          name="quantity"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Quantity</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  inputMode="numeric"
                  min={0}
                  {...field}
                  onChange={(e) => {
                    const value = e.target.value;
                    const parsedValue = parseInt(value, 10);
                    if (isNaN(parsedValue)) return;
                    field.onChange(parsedValue);
                  }}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <Button disabled={isPending}>Add to cart</Button>
      </form>
    </Form>
  );
}
