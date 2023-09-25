import { DDD_BRASIL_UF, DDD_PRINCIPAL_UF } from './consts.general'
import { REGEX_IP, REGEX_URL } from './consts.regex'
import { extractNumbers } from './util.numbers'

export function formatCelPhoneToWhatsApp(
  cellPhone?: string,
  uf?: string,
  presentationFormat?: boolean,
  invalidText?: string,
) {
  if (!cellPhone) {
    return
  }

  cellPhone = extractNumbers(cellPhone)

  if (cellPhone.length === 0) {
    return invalidText
  }

  cellPhone = parseInt(cellPhone).toString()

  if (cellPhone.length === 9 && uf) {
    uf = uf.toLocaleUpperCase()

    const ufIndex = DDD_BRASIL_UF.findIndex((siglaUf) => siglaUf === uf)

    if (ufIndex >= 0) {
      cellPhone = DDD_PRINCIPAL_UF[ufIndex] + cellPhone
    }
  }

  if (cellPhone.length === 11) {
    const formatedPhone = '55' + cellPhone

    if (presentationFormat) {
      return (
        '(' +
        formatedPhone.substring(2, 4) +
        ') ' +
        formatedPhone.substring(4, 9) +
        '-' +
        formatedPhone.substring(9, 13)
      )
    } else {
      return formatedPhone
    }
  } else {
    return invalidText
  }
}

export function formatPhoneNumber(phone?: string, uf?: string) {
  if (!phone) {
    return
  }

  phone = extractNumbers(phone)

  if (phone.length === 0) {
    return
  }

  phone = parseInt(phone).toString()

  if ((phone.length === 8 || phone.length === 9) && uf) {
    uf = uf.toLocaleUpperCase()

    const ufIndex = DDD_BRASIL_UF.findIndex((siglaUf) => siglaUf === uf)

    if (ufIndex >= 0) {
      phone = DDD_PRINCIPAL_UF[ufIndex] + phone
    }
  }

  if (phone.length === 10) {
    return (
      '(' +
      phone.substring(0, 2) +
      ') ' +
      phone.substring(2, 6) +
      '-' +
      phone.substring(6, 10)
    )
  } else if (phone.length === 11) {
    return (
      '(' +
      phone.substring(0, 2) +
      ') ' +
      phone.substring(2, 7) +
      '-' +
      phone.substring(7, 11)
    )
  }
}

export function formatIpAdress(ip: string) {
  const isHttps = ip.toLocaleLowerCase().includes('https')
  const onlyIp = ip
    .replace('http://', '')
    .replace('https://', '')
    .replace('/', '')
    .trim()
  const isValid = REGEX_IP.test(onlyIp)

  if (isValid) {
    return (isHttps ? 'https://' : 'http://') + onlyIp.trim()
  } else {
    return ''
  }
}

export function formatUrlAdress(url: string) {
  let urlFormated = url.toLocaleLowerCase().trim()

  if (!urlFormated.includes('http://') && !urlFormated.includes('https://')) {
    urlFormated = 'http://' + urlFormated
  }

  if (REGEX_URL.test(urlFormated)) {
    return urlFormated
  } else {
    return ''
  }
}

export function formatUserName(fullName: string) {
  if (!fullName) {
    return 'Colaborador'
  }

  const nameParts = fullName.toLocaleLowerCase().split(' ')

  if (nameParts.length > 1) {
    return (
      firstLetterUpper(nameParts[0]) +
      ' ' +
      firstLetterUpper(nameParts[nameParts.length - 1])
    )
  } else if (nameParts.length === 1) {
    return firstLetterUpper(nameParts[0])
  } else {
    return 'Colaborador'
  }
}

export function firstLetterUpper(text: string) {
  return text.substring(0, 1).toUpperCase() + text.substring(1).toLowerCase()
}
