type Props = {
  reset: any;
};

function ResetBtn({ reset }: Props) {
  return (
    <section>
      <button onClick={reset}> Starta om här</button>
    </section>
  );
}

export default ResetBtn;
