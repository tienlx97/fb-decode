import { useContext, useEffect, useRef } from 'react'
import { HiddenSubtreePassiveContext } from '@negiganaito/context'
import { isWithinThreshold } from '@negiganaito/utils/common/pointer-event-distance'

export function useOnOutsideClick(onClickOutside: any, options: any) {
  const ref = useRef<any>(null)
  const context = useContext(HiddenSubtreePassiveContext)
  const clickStartEvent = useRef(null)

  useEffect(() => {
    const targetRef = ref.current
    if (!onClickOutside || !targetRef) {
      return
    }
    // var i = options || {},
    //   j = i.isTargetEligible
    // i = i.triggerOutsideClickOnDrag

    const { isTargetEligible, triggerOutsideClickOnDrag = false } = options

    // var triggerOutsideClickOnDrag = i === void 0 ? !1 : i

    function isOutsideTarget(node: any) {
      return (
        node instanceof Node &&
        !targetRef.contains(node) &&
        (!isTargetEligible || isTargetEligible(node))
      )
    }

    function handlePointerDown(event: any) {
      if (event.isPrimary) {
        const isOutside = isOutsideTarget(event.target)
        isOutside && (clickStartEvent.current = event)
      }
    }

    function handlePointerUp(event: any) {
      if (
        clickStartEvent.current &&
        isOutsideTarget(event.target) &&
        event.isPrimary
      ) {
        const isWithinThresholdValue = isWithinThreshold(
          clickStartEvent.current,
          event,
        )

        ;(isWithinThresholdValue || triggerOutsideClickOnDrag) &&
          onClickOutside(event)
      }
      clickStartEvent.current = null
    }

    function handleClick(event: any) {
      isOutsideTarget(event.target) && onClickOutside(event)
    }

    let usePointerEvents = 'PointerEvent' in window
    let isEventListenersAdded = false

    function addEventListeners() {
      isEventListenersAdded ||
        (usePointerEvents
          ? (document.addEventListener('pointerup', handlePointerUp),
            document.addEventListener('pointerdown', handlePointerDown))
          : document.addEventListener('click', handleClick)),
        (isEventListenersAdded = true)
    }

    function removeEventListeners() {
      isEventListenersAdded &&
        (usePointerEvents
          ? (document.removeEventListener('pointerup', handlePointerUp),
            document.removeEventListener('pointerdown', handlePointerDown))
          : document.removeEventListener('click', handleClick)),
        (isEventListenersAdded = false)
    }

    const currentState = context.getCurrentState()
    currentState.hiddenOrBackgrounded || addEventListeners()

    const subscription = context.subscribeToChanges((subscription: any) => {
      subscription.hiddenOrBackgrounded
        ? setTimeout(() => {
            removeEventListeners()
          }, 0)
        : addEventListeners()
    })

    return function () {
      subscription.remove()
      removeEventListeners()
    }
  }, [onClickOutside, context, options])
  return ref
}
