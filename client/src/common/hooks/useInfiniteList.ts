import { useEffect, useState } from 'react';

type data = {
  visibleList: Array<Record<string, any>>;
  handleNext: () => void;
  hasMore: boolean;
};

export const useInfiniteList = (list: Array<Record<string, any>>, chunkLength: number): data => {
  const [visibleList, setVisibleList] = useState<Array<Record<string, any>>>(list);
  const [visibleLength, setVisibleLength] = useState(chunkLength);

  useEffect(() => {
    setVisibleLength(chunkLength);
    setVisibleList(list.slice(0, chunkLength));
  }, [list]);

  useEffect(() => {
    setVisibleList(list.slice(0, visibleLength));
  }, [visibleLength]);

  const handleNext = () => setVisibleLength(visibleLength + chunkLength);
  const totalLength = list.length;
  const hasMore = totalLength > visibleLength;

  return {
    visibleList,
    handleNext,
    hasMore
  };
};
