/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SwitchFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type StatsUpdateFormInputValues = {
    plunks?: number;
    selfPlunk?: boolean;
    didWin?: boolean;
    plinks?: number;
    drinks?: number;
    points?: number;
};
export declare type StatsUpdateFormValidationValues = {
    plunks?: ValidationFunction<number>;
    selfPlunk?: ValidationFunction<boolean>;
    didWin?: ValidationFunction<boolean>;
    plinks?: ValidationFunction<number>;
    drinks?: ValidationFunction<number>;
    points?: ValidationFunction<number>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StatsUpdateFormOverridesProps = {
    StatsUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    plunks?: PrimitiveOverrideProps<TextFieldProps>;
    selfPlunk?: PrimitiveOverrideProps<SwitchFieldProps>;
    didWin?: PrimitiveOverrideProps<SwitchFieldProps>;
    plinks?: PrimitiveOverrideProps<TextFieldProps>;
    drinks?: PrimitiveOverrideProps<TextFieldProps>;
    points?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StatsUpdateFormProps = React.PropsWithChildren<{
    overrides?: StatsUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stats?: any;
    onSubmit?: (fields: StatsUpdateFormInputValues) => StatsUpdateFormInputValues;
    onSuccess?: (fields: StatsUpdateFormInputValues) => void;
    onError?: (fields: StatsUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StatsUpdateFormInputValues) => StatsUpdateFormInputValues;
    onValidate?: StatsUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StatsUpdateForm(props: StatsUpdateFormProps): React.ReactElement;
