interface Props {
  text: string;
  onClick?: () => void;
  className?: string;
}

const Button = ({ text, onClick, className }: Props) => {
  return (
    <button onClick={onClick} className={className}>
      {text}
    </button>
  );
};

export default Button;
