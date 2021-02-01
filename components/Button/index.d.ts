import React from 'react';
export interface Props {
    /**
     * Cor de fundo
     */
    backgroundColor?: string;
    /**
     * Cor da letra
     */
    color?: string;
    /**
     * Configurar botão outline
     */
    outlined?: boolean;
    /**
     * Função que será executada quando for clicado no botão
     */
    onClick?: () => void;
    /**
     * Opção de desabilitar o botão
     */
    disabled?: boolean;
}
export declare const Button: React.FC<Props>;
//# sourceMappingURL=index.d.ts.map