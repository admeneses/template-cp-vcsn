import Ionicons from '@expo/vector-icons/Ionicons';
import { Text, View, ScrollView } from 'react-native';

export const EditScreenInfo = ({ path }: { path: string }) => {
  const title = 'Desenvolva seu aplicativo conforme orientações em aula';
  const description =
    'o tema do CP é um Catalogo de filmes, livros, produtos, etc...';
  const icones = 'Biblioteca de ícones: https://icons.expo.fyi/Index';
  const docReactNative = 'Documentação do React Native: https://reactnative.dev/docs/components-and-apis';
  const docNativeWind = 'Documentação do NativeWind: https://www.nativewind.dev/docs/getting-started/installation';
  const docExpo = 'Documentação do TailWind: https://tailwindcss.com/docs/theme';

  return (
    <ScrollView 
      className="flex-1"
      showsVerticalScrollIndicator={true}
      contentContainerStyle={{ paddingBottom: 20 }}
    >
      <View className={styles.getStartedContainer}>
        <View className={styles.codeHighlightContainer + styles.homeScreenFilename}>
          <Text>{path}</Text>
        </View>
        <Text className={styles.getStartedText}>{title}</Text>
        <Text className={styles.getStartedColor}>{description}</Text>
        <Text className={styles.getStartedColor}>{docReactNative}</Text>
        <Text className={styles.getStartedColor}>{docNativeWind}</Text>
        <Text className={styles.getStartedColor}>{docExpo}</Text>
        <Text className={styles.getStartedColor}>{icones}</Text>
        <Ionicons name="checkmark-circle" size={32} color="green" />
      </View>
    </ScrollView>
  );
};

const styles = {
  codeHighlightContainer: `rounded-md px-1`,
  getStartedContainer: `items-center mx-12`,
  getStartedText: `text-lg leading-6 text-center mt-4`,
  getStartedColor: `text-center mt-4 mb-4 text-blue-600 font-bold`,
  helpContainer: `items-center mx-5 mt-4`,
  helpLink: `py-4`,
  helpLinkText: `text-center`,
  homeScreenFilename: `mb-2`,
};
