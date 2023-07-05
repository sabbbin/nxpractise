import React, {
  CSSProperties,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';

export default function LayoutEffect() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState(90);
  useLayoutEffect(() => {
    const heigh = ref.current?.getBoundingClientRect();
    console.log('height', heigh);
  }, []);
  return (
    <div className="h-96 bg-gray-600">
      <div className="h-[500px]  w-[500px] text-orange-600  bg-red-800">
        adfadsf
      </div>
      <ContentRefa ContentRef={ref as never} />
    </div>
  );
}

export const ContentRefa = ({
  ContentRef,
}: {
  ContentRef: HTMLDivElement | null;
}) => {
  return <div ref={ContentRef as never}>adsfs</div>;
};
