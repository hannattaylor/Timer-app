type Props = {
  time: string;
};
function Digital({ time }: Props) {
  console.log(time);

  return <div>Analog --- {time}</div>;
}

export default Digital;
