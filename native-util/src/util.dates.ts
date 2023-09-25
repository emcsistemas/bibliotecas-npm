import { Platform } from 'react-native'
import { compareAsc, add, format, differenceInMinutes } from 'date-fns'
import { pt } from 'date-fns/locale'

export function formatUSDate(date?: Date, shortYear?: boolean) {
  try {
    if (date) {
      const dateString = date.toString()

      if (dateString.length === 10) {
        const dateParts = dateString.split('-')

        return (
          dateParts[2] +
          '/' +
          dateParts[1] +
          '/' +
          (shortYear ? dateParts[0].substring(2) : dateParts[0])
        )
      } else if (Platform.OS === 'ios') {
        const newDate = new Date(date.toString())

        const dateFormated = Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'short',
          timeStyle: 'short',
        }).format(newDate)

        if (shortYear) {
          const onlyDate = dateFormated.split(' ')[0]
          const dateParts = onlyDate.split('/')

          return (
            dateParts[0] + '/' + dateParts[1] + '/' + dateParts[2].substring(2)
          )
        } else {
          return dateFormated.split(' ')[0]
        }
      } else {
        return shortYear
          ? format(date, 'dd/MM/yy', { locale: pt })
          : format(date, 'dd/MM/yyy', { locale: pt })
      }
    } else {
      return ''
    }
  } catch (e) {
    return ''
  }
}

export function formatDateTimeZone(date?: string, shortYear?: boolean) {
  // 2023-02-16T00:00:00.000Z ou 2023-02-16
  if (date && date.includes('-')) {
    if (date.includes('T')) {
      const onlyDate = date.split('T')[0]
      const dateParts = onlyDate.split('-')

      let formatedDate

      if (dateParts[0].length === 4) {
        formatedDate =
          dateParts[2] +
          '/' +
          dateParts[1] +
          '/' +
          (shortYear ? dateParts[0].substring(2) : dateParts[0])
      } else {
        formatedDate =
          dateParts[0] +
          '/' +
          dateParts[1] +
          '/' +
          (shortYear ? dateParts[2].substring(2) : dateParts[2])
      }

      return formatedDate
    } else if (date && date.length === 10) {
      const dateParts = date.split('-')

      return (
        dateParts[2] +
        '/' +
        dateParts[1] +
        '/' +
        (shortYear ? dateParts[0].substring(2) : dateParts[0])
      )
    }
  }
}

export function validateDateString(date?: string) {
  try {
    if (
      date &&
      date.includes('/') &&
      (date.length === 6 ||
        date.length === 7 ||
        date.length === 8 ||
        date.length === 10)
    ) {
      const dateParts = date.split('/')

      if (dateParts.length === 3) {
        dateParts[0] = dateParts[0].padStart(2, '0')
        dateParts[1] = dateParts[1].padStart(2, '0')

        if (dateParts[2].length === 2) {
          dateParts[2] = '20' + dateParts[2]
        }

        if (
          dateParts[0].length !== 2 ||
          dateParts[1].length !== 2 ||
          dateParts[2].length !== 4
        ) {
          return undefined
        }

        const dateValidate = new Date(
          dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0],
        )

        const validDate = dateValidate.getTime()

        if (!isNaN(validDate)) {
          return dateParts[0] + '/' + dateParts[1] + '/' + dateParts[2]
        } else {
          return undefined
        }
      } else {
        return undefined
      }
    } else {
      return undefined
    }
  } catch (e) {
    return undefined
  }
}

export function dateTimeStringBRToDateTimeStringUS(dateTime?: string) {
  if (!dateTime || dateTime.length !== 19) {
    return ''
  }

  const dateBR = validateDateString(dateTime.split(' ')[0])

  if (dateBR) {
    const dateParts = dateBR.split('/')
    const onlyTime = dateTime.split(' ')[1]

    return (
      dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0] + ' ' + onlyTime
    )
  } else {
    return ''
  }
}

export function dateStringBRToDateStringUS(date?: string) {
  const dateBR = validateDateString(date)

  if (dateBR) {
    const dateParts = dateBR.split('/')
    return dateParts[2] + '-' + dateParts[1] + '-' + dateParts[0]
  } else {
    return ''
  }
}

export function dateStringUSToDateStringBR(date?: string, shortYear?: boolean) {
  if (date && date.includes('-') && date.length === 10) {
    const dateParts = date.split('-')

    dateParts[2] = dateParts[2].padStart(2, '0')
    dateParts[1] = dateParts[1].padStart(2, '0')

    if (dateParts[0].length === 2) {
      dateParts[0] = '20' + dateParts[0]
    }

    if (shortYear) {
      dateParts[0] = dateParts[0].substring(2)
    }

    return dateParts[2] + '/' + dateParts[1] + '/' + dateParts[0]
  } else {
    return undefined
  }
}

export function compareDates(initialDate: string, endDate: string) {
  initialDate = dateStringBRToDateStringUS(initialDate)
  endDate = dateStringBRToDateStringUS(endDate)

  return compareAsc(new Date(initialDate), new Date(endDate))
}

export function expiredDate(date?: Date) {
  if (!date) return false

  if (date.toString().includes('1899')) return false

  const today = getCurrentDateText()
  const formatedDate = formatJsDateTime(date)

  const compareResult = compareDates(formatedDate, today)

  return compareResult < 0
}

export function minutesBetween(majorDate: string, minorDate: string) {
  majorDate = dateTimeStringBRToDateTimeStringUS(majorDate)
  minorDate = dateTimeStringBRToDateTimeStringUS(minorDate)

  return differenceInMinutes(new Date(majorDate), new Date(minorDate))
}

export function getCurrentDateText() {
  return format(new Date(), 'dd/MM/yyyy', {
    locale: pt,
  })
}

export function getCurrentDateTimeText() {
  return format(new Date(), 'dd/MM/yyyy HH:mm:ss', {
    locale: pt,
  })
}

export function getCurrentDateTimeZoneText() {
  const formatedDate = format(new Date(), 'yyyy-MM-dd', {
    locale: pt,
  })

  const formatedTime = format(new Date(), 'HH:mm:ss', {
    locale: pt,
  })

  const formatedDateTime = formatedDate.concat('T', formatedTime, '.000Z')

  return formatedDateTime
}

export function formatDate(date: Date) {
  return format(date, 'dd/MM/yyyy', {
    locale: pt,
  })
}

export function getDateFromToday(addMonths?: number) {
  let newDate = new Date()

  if (addMonths) {
    newDate = add(newDate, { months: addMonths })
  }

  return format(newDate, 'dd/MM/yyyy', {
    locale: pt,
  })
}

export function formatJsDateTime(
  date?: Date,
  putHours?: boolean,
  shortYear?: boolean,
) {
  try {
    if (date) {
      const dateString = date.toString()

      if (dateString.length === 10) {
        const dateParts = dateString.split('-')

        return (
          dateParts[2] +
          '/' +
          dateParts[1] +
          '/' +
          (shortYear ? dateParts[0].substring(2) : dateParts[0])
        )
      } else if (Platform.OS === 'ios') {
        const newDate = new Date(
          date.toString().replace('00:00:00.000', '12:00:00.000'),
        )

        let dateFormated = Intl.DateTimeFormat('pt-BR', {
          dateStyle: 'short',
          timeStyle: 'short',
        }).format(newDate)

        if (shortYear) {
          const dateTimeParts = dateFormated.split(' ')
          const onlyDate = dateTimeParts[0]
          const onlyTime = dateTimeParts[1]
          const dateParts = onlyDate.split('/')

          dateFormated =
            dateParts[0] +
            '/' +
            dateParts[1] +
            '/' +
            dateParts[2].substring(2) +
            ' ' +
            onlyTime
        }

        if (putHours) {
          return dateFormated.replace(' ', ' - ')
        } else {
          return dateFormated.split(' ')[0]
        }
      } else {
        const newDate = date.toString().replace('00:00:00.000', '12:00:00.000')
        const onlyDate = newDate.includes('T')
          ? newDate.split('T')[0]
          : newDate.split(' ')[0]
        const onlyTime = newDate.includes('T')
          ? newDate.split('T')[1]
          : newDate.split(' ')[1]
        const fieldsDate = onlyDate.split('-')
        const fieldsTime = onlyTime.split(':')

        const dateFormated =
          fieldsDate[2] +
          '/' +
          fieldsDate[1] +
          '/' +
          (shortYear ? fieldsDate[0].substring(2) : fieldsDate[0]) +
          ' - ' +
          fieldsTime[0] +
          ':' +
          fieldsTime[1]

        if (putHours) {
          return dateFormated
        } else {
          return dateFormated.split('-')[0].trim()
        }
      }
    } else {
      return ''
    }
  } catch (e) {
    return ''
  }
}
