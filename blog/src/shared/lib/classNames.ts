type ModsType = Record<string, boolean | string>

export const classNames = (cls: string, mods: ModsType, className: string[]): string => {
  return [
    cls,
    ...Object.entries(mods)
      .filter(([cls, value]) => !!value)
      .map(([cls, value]) => cls),
    ...className,
  ].join(' ')
}
