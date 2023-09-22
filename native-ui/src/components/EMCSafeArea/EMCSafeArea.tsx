import { SafeAreaView } from "react-native";
import { styles } from "../../styles/styles";

interface EMCSafeAreaProps {
  children: React.ReactNode
}

const EMCSafeArea = ({ children }: EMCSafeAreaProps) => {
  return <SafeAreaView style={styles.safeArea}>{children}</SafeAreaView>
}

export default EMCSafeArea