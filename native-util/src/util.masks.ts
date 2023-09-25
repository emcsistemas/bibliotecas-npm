type MASK_TYPES =
  | 'numbers'
  | 'cep'
  | 'telephone'
  | 'currency'
  | 'cpf'
  | 'cnpj'
  | 'cpfcnpj'

function maskCEP(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{5})(\d)/, '$1-$2')
  return value
}

function maskPhone(value: string) {
  value = value.replace(/\D/g, '')
  value = value.replace(/^(\d{2})(\d)/, '($1)$2')
  value = value.replace(/(\d)(\d{4})$/, '$1-$2')
  return value
}

function maskCurrency(value: string, putSymbol: boolean) {
  value = value.replace(/\D/g, '')
  value = value.replace(/(\d)(\d{2})$/, '$1,$2')
  value = value.replace(/(?=(\d{3})+(\D))\B/g, '.')
  return putSymbol ? 'R$ ' + value : value
}

function maskCPF(value: string) {
  value = value.replace(/\D/g, '')

  if (value.length > 11) {
    value = value.substring(0, 11)
  }

  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d)/, '$1.$2')
  value = value.replace(/(\d{3})(\d{1,2})$/, '$1-$2')
  return value
}

function maskCNPJ(value: string) {
  value = value.replace(/\D/g, '')

  if (value.length > 14) {
    value = value.substring(0, 14)
  }

  value = value.replace(/^(\d{2})(\d)/, '$1.$2')
  value = value.replace(/^(\d{2})\.(\d{3})(\d)/, '$1.$2.$3')
  value = value.replace(/\.(\d{3})(\d)/, '.$1/$2')
  value = value.replace(/(\d{4})(\d)/, '$1-$2')
  return value
}

function maskCPFCNPJ(value: string) {
  value = value.replace(/\D/g, '')

  if (value.length > 14) {
    value = value.substring(0, 14)
  }

  if (value.length <= 11) {
    return maskCPF(value)
  } else {
    return maskCNPJ(value)
  }
}

function maskNumbers(value: string) {
  value = value.replace(/\D/g, '')
  return value
}

export {
  MASK_TYPES,
  maskCEP,
  maskCNPJ,
  maskCPF,
  maskCPFCNPJ,
  maskCurrency,
  maskPhone,
  maskNumbers,
}
