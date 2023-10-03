function intersectionObserverEntryIsIntersecting(props: any) {
  return props.isIntersecting != null
    ? props.isIntersecting
    : props.intersectionRatio > 0 ||
        (props.intersectionRect &&
          (props.intersectionRect.height > 0 ||
            props.intersectionRect.width > 0))
}
