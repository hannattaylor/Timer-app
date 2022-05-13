type Props = {
  time: string;
};
function Analog({ time }: Props) {
  console.log(time);

  return <div>Analog --- {time}</div>;
}

export default Analog;
