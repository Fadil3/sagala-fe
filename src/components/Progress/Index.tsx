interface ProgressProps {
  percentage: number;
}

export default function Progress({ percentage }: ProgressProps) {
  return (
    <div className=" min-w-[100px] w-full bg-primary rounded-full h-2">
      <div
        className=" bg-blue-800 h-2 rounded-full transition-all duration-500"
        style={{
          width: `${percentage}%`,
        }}
      ></div>
    </div>
  );
}
