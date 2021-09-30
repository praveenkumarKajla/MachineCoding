


export interface OrderItem {
    id: string,
    quantity: number;

}
export interface OrderData {
    items: Array<OrderItem>
    address_id: string;
    user_id: string;
    restaurant_id: string;
}