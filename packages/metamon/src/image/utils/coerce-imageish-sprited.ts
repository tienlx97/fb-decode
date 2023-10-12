export default function coerceImageishSprited(spriteOption?: any) {
  if (
    !spriteOption ||
    typeof spriteOption !== 'object' ||
    !spriteOption.sprited
  ) {
    return null
  }
  return spriteOption.sprited === 1
    ? {
        type: 'css',
        className:
          spriteOption.spriteMapCssClass + ' ' + spriteOption.spriteCssClass,
        identifier: spriteOption.loggingID,
      }
    : {
        type: 'cssless',
        style: {
          backgroundImage: "url('" + spriteOption.spi + "')",
          backgroundPosition: spriteOption.p,
          backgroundSize: spriteOption.sz,
          width: spriteOption.w + 'px',
          height: spriteOption.h + 'px',
          backgroundRepeat: 'no-repeat',
          display: 'inline-block',
        },
        identifier: spriteOption.loggingID,
      }
}
