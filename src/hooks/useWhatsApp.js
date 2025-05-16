import { useState } from "react";

export function useWhatsApp() {
  const [selectedItem, setSelectedItem] = useState(null);

  const items = ["+573153506153", "+573126607710", "+573117244489"];
  const seller = [ 'Redes', 'Redes', 'Mayorista']

  const handleItemClick = (index) => {
    setSelectedItem(index);
  };

  const generateWhatsAppLink = (phoneNumber, message) => {
    const url = `https://wa.me/${phoneNumber}`;
    const encodedMessage = encodeURIComponent(message);
    return `${url}?text=${encodedMessage}`;
  };

  return {
    items,
    seller,
    selectedItem,
    handleItemClick,
    generateWhatsAppLink,
  };
}
