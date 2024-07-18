import '../../../style.css'

const ItemStatus = ({ id }: { id: string; }) => {
  return (
    <div className='status-container'>
      <button>
        <img src="../../../src/assets/previous.svg" alt="previous" />
      </button>
      <button>
        <img src="../../../src/assets/next.svg" alt="next" />
      </button>
    </div>
  )
}

export default ItemStatus