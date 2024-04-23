/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import {
  Button,
  Flex,
  Grid,
  SwitchField,
  TextField,
} from "@aws-amplify/ui-react";
import { fetchByPath, getOverrideProps, validateField } from "./utils";
import { API } from "aws-amplify";
import { getPlayer } from "../graphql/queries";
import { updatePlayer } from "../graphql/mutations";
export default function PlayerUpdateForm(props) {
  const {
    cognitoId: cognitoIdProp,
    player: playerModelProp,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    cognitoId: "",
    fullName: "",
    hasProfilePicture: false,
  };
  const [cognitoId, setCognitoId] = React.useState(initialValues.cognitoId);
  const [fullName, setFullName] = React.useState(initialValues.fullName);
  const [hasProfilePicture, setHasProfilePicture] = React.useState(
    initialValues.hasProfilePicture
  );
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    const cleanValues = playerRecord
      ? { ...initialValues, ...playerRecord }
      : initialValues;
    setCognitoId(cleanValues.cognitoId);
    setFullName(cleanValues.fullName);
    setHasProfilePicture(cleanValues.hasProfilePicture);
    setErrors({});
  };
  const [playerRecord, setPlayerRecord] = React.useState(playerModelProp);
  React.useEffect(() => {
    const queryData = async () => {
      const record = cognitoIdProp
        ? (
            await API.graphql({
              query: getPlayer.replaceAll("__typename", ""),
              variables: { cognitoId: cognitoIdProp },
            })
          )?.data?.getPlayer
        : playerModelProp;
      setPlayerRecord(record);
    };
    queryData();
  }, [cognitoIdProp, playerModelProp]);
  React.useEffect(resetStateValues, [playerRecord]);
  const validations = {
    cognitoId: [{ type: "Required" }],
    fullName: [{ type: "Required" }],
    hasProfilePicture: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          cognitoId,
          fullName,
          hasProfilePicture,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: updatePlayer.replaceAll("__typename", ""),
            variables: {
              input: {
                cognitoId: playerRecord.cognitoId,
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "PlayerUpdateForm")}
      {...rest}
    >
      <TextField
        label="Cognito id"
        isRequired={true}
        isReadOnly={true}
        value={cognitoId}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoId: value,
              fullName,
              hasProfilePicture,
            };
            const result = onChange(modelFields);
            value = result?.cognitoId ?? value;
          }
          if (errors.cognitoId?.hasError) {
            runValidationTasks("cognitoId", value);
          }
          setCognitoId(value);
        }}
        onBlur={() => runValidationTasks("cognitoId", cognitoId)}
        errorMessage={errors.cognitoId?.errorMessage}
        hasError={errors.cognitoId?.hasError}
        {...getOverrideProps(overrides, "cognitoId")}
      ></TextField>
      <TextField
        label="Full name"
        isRequired={true}
        isReadOnly={false}
        value={fullName}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              cognitoId,
              fullName: value,
              hasProfilePicture,
            };
            const result = onChange(modelFields);
            value = result?.fullName ?? value;
          }
          if (errors.fullName?.hasError) {
            runValidationTasks("fullName", value);
          }
          setFullName(value);
        }}
        onBlur={() => runValidationTasks("fullName", fullName)}
        errorMessage={errors.fullName?.errorMessage}
        hasError={errors.fullName?.hasError}
        {...getOverrideProps(overrides, "fullName")}
      ></TextField>
      <SwitchField
        label="Has profile picture"
        defaultChecked={false}
        isDisabled={false}
        isChecked={hasProfilePicture}
        onChange={(e) => {
          let value = e.target.checked;
          if (onChange) {
            const modelFields = {
              cognitoId,
              fullName,
              hasProfilePicture: value,
            };
            const result = onChange(modelFields);
            value = result?.hasProfilePicture ?? value;
          }
          if (errors.hasProfilePicture?.hasError) {
            runValidationTasks("hasProfilePicture", value);
          }
          setHasProfilePicture(value);
        }}
        onBlur={() =>
          runValidationTasks("hasProfilePicture", hasProfilePicture)
        }
        errorMessage={errors.hasProfilePicture?.errorMessage}
        hasError={errors.hasProfilePicture?.hasError}
        {...getOverrideProps(overrides, "hasProfilePicture")}
      ></SwitchField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Reset"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          isDisabled={!(cognitoIdProp || playerModelProp)}
          {...getOverrideProps(overrides, "ResetButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={
              !(cognitoIdProp || playerModelProp) ||
              Object.values(errors).some((e) => e?.hasError)
            }
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
