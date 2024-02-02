import { ITextProps, Text } from "native-base";
import { ReactNode } from "react";

interface Props extends ITextProps{
    children: ReactNode
}

export function EntradaTexto({ children, ...rest}: Props){
    return (
        <Text
        fontSize="lg"
        fontWeight="bold"
        color="gray.500"
        textAlign="center"
        mt={5}
        {...rest}
      >
        {children}
      </Text>
    )
}