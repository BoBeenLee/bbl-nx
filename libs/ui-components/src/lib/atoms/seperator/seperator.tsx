import cn from "classnames"

export interface SeperatorProps {
  className?: string;
}

export function Seperator(props: SeperatorProps) {
  const { className } = props;
  return <div className={cn(className, "w-full h-[1px] bg-gray-200 dark:bg-gray-800")} />;
}

export default Seperator;
