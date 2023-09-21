import { SafeAreaView } from "react-native";

interface EMCSafeAreaProps {
  children: React.ReactNode
}

const SafeArea = ({ children }: EMCSafeAreaProps) => {
  return <SafeAreaView style={{flex: 1}}>{children}</SafeAreaView>
}

export default SafeArea