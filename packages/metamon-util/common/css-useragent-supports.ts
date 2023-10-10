import { isBrowser } from '../user-agent'

const cssUserAgentSupports = {
  webkitLineClamp: () =>
    isBrowser('IE') || isBrowser('Edge < 17') || isBrowser('Firefox < 68'),
}

export default cssUserAgentSupports
