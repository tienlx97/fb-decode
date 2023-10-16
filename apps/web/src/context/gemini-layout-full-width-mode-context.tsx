import { useWorkGalahadVariant } from './work-galahad-variant-state'

export function useGeminiLayoutUserSettingsFullWidthMode() {
  const { hasRiverKnight } = useWorkGalahadVariant()
  return hasRiverKnight !== !0
}
