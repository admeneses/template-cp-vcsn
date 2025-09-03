import { Text, View } from 'react-native';

import { Container } from './Container';
import { EditScreenInfo } from './EditScreenInfo';

type ScreenContentProps = {
  title: string;
  path: string;
  children?: React.ReactNode;
};

export const ScreenContent = ({ title, path, children }: ScreenContentProps) => {
  return (
    <Container>
      <View className={styles.container}>
        <Text className={styles.title}>{title}</Text>
        <View className={styles.separator} />
        <EditScreenInfo path={path} />
        {children}
      </View>
    </Container>
  );
};
const styles = {
  container: `items-center flex-1 justify-start pt-4`,
  separator: `h-[1px] my-7 w-4/5 bg-gray-200`,
  title: `text-xl font-bold mt-20`,
};
