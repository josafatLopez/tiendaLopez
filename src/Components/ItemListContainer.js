import ItemCount from './Counter.js/ItemCount'
import Item from './Item'

const ItemListContainer = () => {

  const onAdd = () => {alert('Productos agregados al carrito')}
  
  return (
    <div className='container'>
      <Item title=''/>
      <ItemCount productName={'productOne'} stock={4} initial={1} onAdd={onAdd}/>
      <ItemCount productName={'productOne'} stock={4} initial={0} onAdd={onAdd}/>
    </div>
  )
}

export default ItemListContainer