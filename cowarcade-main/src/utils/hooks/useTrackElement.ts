import { useRef, useEffect, useState, RefObject } from 'react';

interface HTMLEventElement extends HTMLElement {
  addEventListener: (x: string, y: () => void) => void;
  removeEventListener: (x: string, y: () => void) => void;
}

export type HTMLRefElement = RefObject<HTMLEventElement> | null;

export type ElementStateType = 'active' | 'hover' | null;

export function useTrackElement(): [HTMLRefElement, ElementStateType] {
  const [isHover, setHover] = useState<boolean>(false);
  const [isActive, setActive] = useState<boolean>(false);

  const ref = useRef<HTMLEventElement>(null);

  const handleMouseOver = () => setHover(true);
  const handleMouseOut = () => setHover(false);

  const handleMouseDown = () => setActive(true);
  const handleMouseUp = () => setActive(false);

  useEffect(() => {
    const node = ref.current;

    if (node) {
      node.addEventListener('mouseover', handleMouseOver);
      node.addEventListener('mouseout', handleMouseOut);

      node.addEventListener('mousedown', handleMouseDown);
      node.addEventListener('mouseup', handleMouseUp);

      return () => {
        node.removeEventListener('mouseover', handleMouseOver);
        node.removeEventListener('mouseout', handleMouseOut);

        node.addEventListener('mousedown', handleMouseDown);
        node.addEventListener('mouseup', handleMouseUp);
      };
    }
  }, [ref.current]);

  const state = computeStateElement(isHover, isActive);

  return [ref, state];
}

function computeStateElement(
  isHover: boolean,
  isActive: boolean
): ElementStateType | null {
  if (isHover && isActive) return 'active';

  if (isHover && !isActive) return 'hover';

  if (!isHover && isActive) return 'active';

  if (!isHover && !isActive) return null;

  return null;
}
