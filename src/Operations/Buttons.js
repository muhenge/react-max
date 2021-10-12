import './buttons.css'
const Buttons = (props) => {
  const ListenNum = () => {
    console.log(props.num)
  }
  return (
    <div>
      <button type="button" className="" onClick={ListenNum}>{props.num}</button>
    </div>
  )
}

export default Buttons;