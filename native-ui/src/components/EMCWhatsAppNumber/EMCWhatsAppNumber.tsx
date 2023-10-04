import { useState } from "react"
import { Keyboard, Modal, ModalProps, TouchableWithoutFeedback } from "react-native"
import { Colors } from "../../theme"
import { validatePhoneNumber } from "../../util/util.validation"
import EMCBox from "../EMCBox"
import EMCButton from "../EMCButton"
import EMCHStack from "../EMCHStack"
import EMCMaskedInput from "../EMCMaskedInput"
import EMCText from "../EMCText"
import EMCVStack from "../EMCVStack"

interface EMCWhatsAppNumberProps extends ModalProps {
  initialPhoneNumber?: string
  isTablet?: boolean
  handleConfirm(phoneNumber: string): void
  handleClose(): void
}

const EMCWhatsAppNumber = ({
  initialPhoneNumber,
  isTablet,
  handleConfirm,
  handleClose,
  ...rest
}: EMCWhatsAppNumberProps) => {
  const [phoneNumber, setPhoneNumber] = useState(initialPhoneNumber || '')
  const [errorMessage, setErrorMessage] = useState<string | undefined>()

  function formatPhone() {
    const validPhone = validatePhoneNumber(phoneNumber)

    if (validPhone) {
      setPhoneNumber(phoneNumber)
    }
  }

  function confirmPhoneNumber() {
    if (phoneNumber.trim().length === 0) {
      setErrorMessage('Informe um número de telefone')
      return
    }

    const validPhone = validatePhoneNumber(phoneNumber, true)

    if (!validPhone) {
      setErrorMessage('Número de telefone inválido')
      return
    }

    if (validPhone.length <= 10) {
      setErrorMessage('Informe um número de telefone com DDD')
      return
    }

    setPhoneNumber(validPhone)
    handleConfirm(validPhone)
  }

  return (
    <Modal
      transparent={true}
      animationType='fade'
      {...rest}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <EMCVStack
          flex={1}
          justify='center'
          px={isTablet ? '20%' : 6}
        >
          <EMCVStack
            bg={Colors.light[50]}
            rounded='md'
            p={4}
            bColor={Colors.gray[800]}
            bWidth={1}
          >
            <EMCVStack
              py={4}
              mb={4}
              bBottomColor={Colors.gray[200]}
              bBottomWidth={1}
            >
              <EMCBox mb={2}>
                <EMCText
                  fSize={isTablet ? 'md' : 'sm'}
                  fWeight='bold'
                >
                  {initialPhoneNumber
                    ? 'Confirme o número do telefone'
                    : 'Número de telefone com DDD'}
                </EMCText>
              </EMCBox>
              <EMCBox
                w='full'
                h={10}
              >
                <EMCMaskedInput
                  autoFocus
                  placeholder='Telefone'
                  value={phoneNumber}
                  maskType={'telephone'}
                  maxLength={15}
                  onBlur={formatPhone}
                  onSubmitEditing={() => confirmPhoneNumber}
                  returnKeyType='send'
                  onChangeValue={(value) => {
                    setErrorMessage(undefined)
                    setPhoneNumber(value)
                  }}
                />
              </EMCBox>
              {errorMessage && (
                <EMCBox mt={1}>
                  <EMCText
                    fSize={isTablet ? 'sm' : 'xs'}
                    fColor={Colors.red[600]}
                  >
                    {errorMessage}
                  </EMCText>
                </EMCBox>
              )}
            </EMCVStack>
            <EMCHStack
              align='center'
              justify='center'
            >
              <EMCButton
                ml={0}
                mr={isTablet ? 5 : 3}
                isDialog
                variant='outline'
                title='Cancelar'
                onPress={() => handleClose()}
                isTablet={isTablet}
              />
              <EMCButton
                ml={isTablet ? 5 : 3}
                isDialog
                title='Enviar'
                onPress={confirmPhoneNumber}
                isTablet={isTablet}
              />
            </EMCHStack>
          </EMCVStack>
        </EMCVStack>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default EMCWhatsAppNumber
