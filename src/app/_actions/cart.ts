import { cookies } from "next/headers";

export async function addToCartAction() {
    const cookieStore = cookies()
    const cartId = cookieStore.get("cartId")?.value

    if(!cartId) {
        
    }

}