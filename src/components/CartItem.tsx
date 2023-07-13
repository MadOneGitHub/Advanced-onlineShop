import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrency } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { removeFromCart } = useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "8rem ", height: "6rem", objectFit: "fill" }}
      />
      <div className="me-auto">
        <div style={{ fontSize: "1.1rem", fontWeight: 700 }}>
          {item.name}{" "}
          {quantity > 1 && (
            <span
              className="text-muted"
              style={{ fontSize: ".70rem", fontWeight: 700 }}
            >
              x{quantity}
            </span>
          )}
        </div>
        <div
          className="text-muted"
          style={{ fontSize: ".85rem", fontWeight: 700 }}
        >
          {formatCurrency(item.price)}
        </div>
      </div>
      <div style={{ fontSize: ".90rem", fontWeight: 620 }}>
        {formatCurrency(item.price * quantity)}
      </div>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
