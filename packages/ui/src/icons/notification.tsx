import * as React from 'react'
import { SVGProps } from 'react'
const SVGComponent = ({
  selected,
  ...props
}: SVGProps<SVGSVGElement> & { selected?: boolean }) => (
  <svg
    viewBox="0 0 32 32"
    className="x1lliihq x1k90msu x2h7rmj x1qfuztq x5e5rjt"
    fill="currentColor"
    height={32}
    width={32}
    {...props}
  >
    {selected ? (
      <path
        fill="currentColor"
        d="M9.555 24.787l6.5-1.156c.389-.07.715.324.555.685A4.496 4.496 0 0 1 12.5 27a4.448 4.448 0 0 1-3.233-1.383c-.271-.284-.098-.761.288-.83zm-.937-19.43A3.433 3.433 0 0 1 8.5 4.5c0-.33.06-.643.147-.946C9.063 2.084 10.4 1 12 1a3.48 3.48 0 0 1 2.729 1.336c.374.47.627 1.03.72 1.65 2.804.7 5.119 2.88 5.923 5.889l.424 1.88c.122.696.848 1.33 1.616 2.002 1.072.937 2.288 1.999 2.56 3.656.13.793-.086 2.944-2.634 3.398L7.2 23.683a4.221 4.221 0 0 1-.733.067c-2.003 0-2.77-1.646-2.9-2.356-.305-1.65.477-3.066 1.166-4.316.495-.897.962-1.744.846-2.405l-.241-1.92c-.255-2.998 1.055-5.743 3.28-7.396z"
      />
    ) : (
      <path
        fill="currentColor"
        d="M6.046 17.802c.599-1.084 1.218-2.206 1.017-3.352l-.234-1.853c-.3-3.52 2.06-6.634 5.488-7.244.396-.07.79-.104 1.178-.104 2.97 0 5.62 1.996 6.42 4.984l.409 1.816c.207 1.183 1.17 2.024 2.1 2.837.926.81 1.883 1.645 2.067 2.77v.002c.025.141.185 1.391-1.417 1.676L6.936 22.205c-1.481.267-1.83-.766-1.894-1.084-.208-1.122.408-2.239 1.004-3.319M10 4.5c0-1.103.898-2 2-2 .838 0 1.555.52 1.852 1.264a8.232 8.232 0 0 0-1.798.113 8.202 8.202 0 0 0-2.05.655c0-.01-.004-.02-.004-.032m5.5 18c0 1.654-1.346 3-3 3a2.983 2.983 0 0 1-2.896-2.246l5.873-1.045c.009.097.023.193.023.291m-9.033 1.25c.227 0 .472-.022.732-.068l.924-.165A4.477 4.477 0 0 0 12.5 27c2.482 0 4.5-2.019 4.5-4.5 0-.186-.02-.37-.044-.554l6.38-1.136c2.552-.453 2.768-2.607 2.636-3.399-.274-1.656-1.49-2.718-2.561-3.654-.767-.672-1.493-1.306-1.616-2.002l-.423-1.88c-.805-3.009-3.121-5.178-5.923-5.878C15.203 2.307 13.758 1 11.999 1c-1.93 0-3.5 1.57-3.5 3.5 0 .292.047.577.119.857-2.224 1.653-3.535 4.398-3.28 7.397l.24 1.918c.117.661-.35 1.508-.845 2.405-.69 1.25-1.471 2.667-1.166 4.316.13.71.896 2.357 2.9 2.357"
      />
    )}
  </svg>
)
export default SVGComponent
