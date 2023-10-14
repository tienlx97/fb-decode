import { useState } from 'react'

export default function useProfileFormField(profileValue: string) {
  const [value, setValue] = useState(profileValue)

  const isDifferent = JSON.stringify(value) !== JSON.stringify(profileValue)

  return [value, setValue, isDifferent]
}
