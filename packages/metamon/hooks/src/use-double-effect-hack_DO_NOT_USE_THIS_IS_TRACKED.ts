/* eslint-disable camelcase */
import { useEffect, useRef } from 'react'

// Define the function using TypeScript syntax
function useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED<T>(
  effect: () => T,
  cleanup: (() => void) | undefined,
) {
  // Create refs to store values across renders
  const timeoutRef = useRef<any | null>(null)
  const cleanupRef = useRef<any | undefined>(cleanup)

  // Use useEffect to handle the logic
  useEffect(() => {
    // Store the current timeout reference
    const currentTimeout = timeoutRef.current

    // If a timeout is active, clear it
    if (currentTimeout !== null) {
      clearTimeout(currentTimeout)
      timeoutRef.current = null
    } else {
      // If no timeout is active, execute the provided effect and store the cleanup function
      cleanupRef.current = effect()
    }

    // Return a cleanup function to clear the timeout and execute the stored cleanup
    return () => {
      function clearAndExecuteCleanup() {
        timeoutRef.current = null
        const storedCleanup = cleanupRef.current
        if (storedCleanup) {
          storedCleanup()
        }
      }

      // Set a timeout to ensure the cleanup is executed after the component updates
      timeoutRef.current = setTimeout(clearAndExecuteCleanup, 0)
    }
  }, [])

  // Return the useEffect function
  return useEffect
}

// Export the function as the default
export default useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED

/* 

__d("useDoubleEffectHack_DO_NOT_USE_THIS_IS_TRACKED", ["clearTimeout", "err", "react", "setTimeout"], (function(a, b, c, d, e, f, g) {
    "use strict";
    b = d("react");
    var h = b.useEffect
      , i = b.useRef;
    function a(a, b) {
        var d = i(null)
          , e = i();
        h(function() {
            var b = d.current;
            b !== null ? (c("clearTimeout")(b),
            d.current = null) : e.current = a();
            return function() {
                function a() {
                    d.current = null;
                    var a = e.current;
                    a && a()
                }
                d.current = c("setTimeout")(a, 0)
            }
        }, [])
    }
    e = h;
    f = e;
    g["default"] = f
}
), 98);

*/
