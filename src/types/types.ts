// types.ts
import { Config, ContentObject } from './generated';

// Exportando os tipos globais
export * from './base';
export * from './generated';

export type GlobalProps = {
    site: Config;
};

export type PageComponentProps = ContentObject & {
    global: GlobalProps;
};

// Atributos para anotações
export const objectIdAttr = 'data-sb-object-id';
export const fieldPathAttr = 'data-sb-field-path';

export type HasAnnotation =
    | {
          [objectIdAttr]?: string;
      }
    | {
          [fieldPathAttr]?: string;
      };

export type ContentObjectMetadata = {
    id?: string;
    modelName: string;
    urlPath?: string;
};

export type BaseContentObject = {
    __metadata: ContentObjectMetadata;
} & HasAnnotation;
