type props = {
  amountOfItems: number;
}

const ItemCount = ({ amountOfItems } :props) => {
  return (
    <h2>{amountOfItems}</h2>
  )
}

export default ItemCount