import { useState } from "react"
import { Keyboard, Modal, ModalProps, TouchableWithoutFeedback } from "react-native"
import { FontAwesome } from "@expo/vector-icons"
import EMCBox from "../EMCBox"
import EMCButton from "../EMCButton"
import EMCDivider from "../EMCDivider"
import EMCHStack from "../EMCHStack"
import EMCIcon from "../EMCIcon"
import EMCText from "../EMCText"
import EMCTextArea from "../EMCTextArea"
import showToast from "../EMCToast"
import EMCVStack from "../EMCVStack"
import { Colors } from "../../theme"
import Consts from "../../styles/Consts"

interface EMCDialogProps extends ModalProps {
  dialogType:
    | 'information'
    | 'alert'
    | 'error'
    | 'success'
    | 'confirmation'
    | 'request'
  message: string
  minResponseLength?: number
  alertMessageEmptyResponse?: string
  noHeader?: boolean
  showBorder?: boolean
  isTablet?: boolean
  handleConfirm?(): void
  handleConfirmRequest?(requestData: string): void
  handleClose(): void
}

const EMCDialog = ({
  dialogType,
  message,
  minResponseLength,
  alertMessageEmptyResponse,
  noHeader,
  showBorder,
  isTablet,
  handleConfirm,
  handleConfirmRequest,
  handleClose,
  ...rest
}: EMCDialogProps) => {
  const [requestData, setRequestData] = useState('')

  function confirmRequest() {
    if (requestData.trim().length === 0) {
      showToast(alertMessageEmptyResponse ?? 'Por favor, informe os dados solicitados', 'alert')
      return
    }

    if (minResponseLength && requestData.trim().length < minResponseLength) {
      showToast(
        `O texto deve conter pelo menos ${minResponseLength.toString()} caracteres`,
        'alert',
      )
      return
    }

    if (handleConfirmRequest) {
      handleConfirmRequest(requestData)
    }
  }

  return (
    <Modal
      transparent={true}
      animationType='fade'
      {...rest}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <EMCVStack flex={1}>
          <EMCVStack
            flex={1}
            justify='center'
            px={isTablet ? '20%' : 6}
          >
            <EMCVStack
              bg={Colors.light[50]}
              rounded='md'
              p={4}
              pt={noHeader ? 0 : 4}
              bColor={Colors.gray[800]}
              bWidth={showBorder ? 1 : 0}
            >
              {!noHeader && (
                <EMCHStack
                  pb={2}
                  bBottomColor={Colors.gray[200]}
                  bBottomWidth={1}
                >
                  <EMCIcon
                    as={FontAwesome}
                    name={
                      dialogType === 'alert'
                        ? 'warning'
                        : dialogType === 'error'
                        ? 'times-circle'
                        : dialogType === 'success'
                        ? 'check-circle'
                        : dialogType === 'confirmation' ||
                          dialogType === 'request'
                        ? 'question-circle'
                        : 'info-circle'
                    }
                    color={
                      dialogType === 'alert' || dialogType === 'error'
                        ? Colors.danger[600]
                        : dialogType === 'success'
                        ? Colors.success[700]
                        : Colors.blue[400]
                    }
                    size={dialogType === 'alert' ? 6 : 7}
                    mr={dialogType === 'alert' ? 3 : 2}
                  />
                  <EMCText
                    mb={0}
                    fSize={isTablet ? 'lg' : 'md'}
                    fWeight='bold'
                  >
                    {dialogType === 'alert'
                      ? 'Atenção!'
                      : dialogType === 'error'
                      ? 'Ops!'
                      : dialogType === 'success'
                      ? 'Sucesso'
                      : dialogType === 'confirmation' ||
                        dialogType === 'request'
                      ? 'Confirmação'
                      : 'Informação'}
                  </EMCText>
                </EMCHStack>
              )}
              <EMCBox pt={2}>
                <EMCText
                  fSize={isTablet ? 'md' : 'sm'}
                  wordWrap
                  fWeight={noHeader ? 'bold' : 'normal'}
                >
                  {message}
                </EMCText>
                {handleConfirmRequest && (
                  <EMCTextArea
                    w='full'
                    h={isTablet ? 25 : 20}
                    mt={2}
                    autoFocus
                    maxLength={150}
                    maxFontSizeMultiplier={Consts.MAX_ACCESSIBILITY_MULTIPLIER}
                    fSize={isTablet ? 'md' : 'sm'}
                    placeholder='Motivo'
                    autoCorrect={false}
                    bColor={Colors.gray[500]}
                    onChangeText={setRequestData}
                  />
                )}
                <EMCDivider my={4} />
              </EMCBox>
              {handleConfirm || handleConfirmRequest ? (
                <EMCHStack
                  align='center'
                  justify='center'
                >
                  <EMCButton
                    mr={3}
                    isDialog
                    variant='outline'
                    ml={0}
                    title='Cancelar'
                    onPress={() => handleClose()}
                    isTablet={isTablet}
                  />
                  <EMCButton
                    ml={3}
                    isDialog
                    variant={handleConfirmRequest ? 'red' : 'blue'}
                    title={handleConfirmRequest ? 'Confirmar' : 'Sim'}
                    onPress={() =>
                      handleConfirm ? handleConfirm() : confirmRequest()
                    }
                    isTablet={isTablet}
                  />
                </EMCHStack>
              ) : (
                <EMCBox align='center'>
                  <EMCButton
                    isDialog
                    ml={0}
                    title='OK'
                    onPress={() => handleClose()}
                    isTablet={isTablet}
                  />
                </EMCBox>
              )}
            </EMCVStack>
          </EMCVStack>
        </EMCVStack>
      </TouchableWithoutFeedback>
    </Modal>
  )
}

export default EMCDialog
