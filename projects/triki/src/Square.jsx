export default function Square ({ value, handleClick, i }) {
  function handle () {
    handleClick(i)
  }
  return (
    <button className='square' onClick={handle}>{value}</button>
  )
}
