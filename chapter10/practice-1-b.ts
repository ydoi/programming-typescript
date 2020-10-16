enum Color2 {
  RED = '#ff0000',
  GREEN = '#00ff00',
  BLUE = '#0000ff'
}

namespace Color2 {
  export function getClosest(to: string): Color2 | null {
    Object.entries(Color2).forEach((value, key) => {
      return value[1] === to ? key : null
    })
    return null
  }
}