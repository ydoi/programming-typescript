export default null

interface Currency {
  unit: 'EUR' | 'GBP' | 'JPY' | 'USD'
  value: number
}

namespace Currency {
  export let DEFAULT: Currency['unit'] = 'USD'
  export function from(value: number, unit = Currency.DEFAULT): Currency {
    return {unit, value}
  }
}