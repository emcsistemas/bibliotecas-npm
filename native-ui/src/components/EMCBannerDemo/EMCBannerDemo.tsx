import { Modal, ModalProps, TouchableOpacity } from "react-native"
import { Ionicons } from "@expo/vector-icons"
import { Colors } from "../../theme"
import EMCBox from "../EMCBox"
import EMCHStack from "../EMCHStack"
import EMCText from "../EMCText"
import EMCVStack from "../EMCVStack"
import Consts from "../../styles/Consts"

interface EMCBannerDemoProps extends ModalProps {
  appName: string
  isTablet?: boolean
  dataRequisicaoAtivacao?: string | null
  isClienteEMC?: boolean | null
  onClose: () => void
}

const EMCBannerDemo = ({
  appName, 
  isTablet,
  dataRequisicaoAtivacao,
  isClienteEMC,
  onClose,
  ...rest
}: EMCBannerDemoProps) => {
  return (
    <Modal
      transparent={true}
      animationType='fade'
      {...rest}
    >
      <EMCVStack
        position='absolute'
        left={0}
        top={0}
        w='full'
        h='full'
        px={isTablet ? 20 : 6}
        bg='rgba(26, 22, 22, 0.6)'
        align='center'
        justify='center'
      >
        <EMCBox
          w='full'
          rounded='md'
          bg={Colors.blue[400]}
          align='center'
          justify='center'
        >
          <EMCHStack
            w='full'
            px={4}
            mt={4}
            mb={3}
            justify='space-between'
            align='center'
          >
            <EMCBox
              flex={1}
              align='center'
            >
              <EMCText
                fColor={Colors.white}
                fSize={isTablet ? 'md' : 'sm'}
              >
                Seja bem-vindo!
              </EMCText>
            </EMCBox>
            <TouchableOpacity
              activeOpacity={Consts.DEFAULT_OPACITY_CLICK}
              onPress={onClose}
            >
              <Ionicons
                name='close-circle-outline'
                size={25}
                color={Colors.white}
              />
            </TouchableOpacity>
          </EMCHStack>
          <EMCBox
            w='full'
            px={4}
            pb={4}
          >
            <EMCText
              mb={3}
              fColor={Colors.white}
              fSize={isTablet ? 'md' : 'sm'}
              wordWrap
              textAlign='center'
            >
              {`Você está utilizando o ${appName} em modo de demonstração. As informações apresentadas são fictícias, mas você pode conhecer tudo que este app é capaz de fazer.`}
            </EMCText>
            <EMCText
              mb={3}
              fColor={Colors.white}
              fSize={isTablet ? 'md' : 'sm'}
              wordWrap
              textAlign='center'
            >
              {`Para conectar o app às informações reais da sua empresa, clique em ${
                isClienteEMC
                  ? '"Ativar dispositivo"'
                  : dataRequisicaoAtivacao &&
                    dataRequisicaoAtivacao.trim().length > 0
                  ? '"Ativar dispositivo"'
                  : '"Quero ser cliente"'
              } na tela de abertura e conte com o apoio da EMC Sistemas.`}
            </EMCText>
            <EMCText
              fColor={Colors.white}
              fSize={isTablet ? 'md' : 'sm'}
              wordWrap
              textAlign='center'
            >
              Faça um bom proveito.
            </EMCText>
          </EMCBox>
        </EMCBox>
      </EMCVStack>
    </Modal>
  )
}

export default EMCBannerDemo
